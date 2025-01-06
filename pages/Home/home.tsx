import { DataUser } from '@/components/DataUser/DataUser'
import Form from '@/components/Form/Form'
import React, { useEffect, useState } from 'react'
import { StyleSheet, KeyboardAvoidingView, ScrollView, Platform, View } from 'react-native'
import useStorage from '@/hooks/useStorage'
import { PropsStart } from "@/types/PropsStart"
import { BodyStartProcess } from '@/interfaces/BodyStartProcess'
import GetGroups from "@/services/grupoAtendimento"
import StartProcess from '@/services/startProcess'
import { useNavigation } from 'expo-router'
import { SuccessNavigationProp } from '@/types/RoutesTypes'

const Home = () => {
    const navigation = useNavigation<SuccessNavigationProp>()
    const [userName, setUsername] = useState('')
    const [mail, setMail] = useState('')
    const [matricula, setMatricula] = useState('')
    const [date, setDate] = useState(new Date().toLocaleDateString())

    const getDataUser = async () => {
        const dataUser = await useStorage().getData()
        if (dataUser) {
            setUsername(dataUser.nome)
            setMail(dataUser.email)
            setMatricula(dataUser.matricula)
        }
    }

    useEffect(() => {
        getDataUser()
    }, [])

    const sendProcess = async (props: PropsStart) => {
        console.log("CORPO DA INTEGRAÇÃO")
        console.log(props)

        try {
            const groupSelected = props.grupo.value
            const prioridade = props.prioridade.value
            const resumo = props.resumo
            const topico = props.topicoAjuda

            if ([topico, prioridade, groupSelected, resumo].includes("")) {
                alert("Erro ao enviar solicitação! Há campos vazios, preencha todos para criar o chamado.")
                return false
            }

            const requestGroups = await new GetGroups().execute()

            const dataGroupSelected = await requestGroups.retorno.filter((group: any) => group.ID === groupSelected)
           
            if (dataGroupSelected.length == 0) {
                alert("Erro ao buscar o Grupo! Tente novamente.")
                return
            }

            const { SLA, grupo, area } = dataGroupSelected[0]

            const bodySend: BodyStartProcess = {
                txt_solicitante: userName,
                txt_email: mail,
                txt_data_solic: date,
                txt_topico_ajuda: topico,
                sl_prioridade: prioridade,
                ztxt_grupo_atendimento: area,
                txta_obs_chamado: resumo,
                hd_mat_solic: matricula,
                hd_grupo_atendimento: `Pool:Group:${grupo}`,
                hd_sla_horas: SLA
            }

            const instance = new StartProcess(bodySend)
            const start = await instance.execute()

            start.success ? navigation.navigate('success', {idProcess : start.idProcess}) : new Error(start.error)
        } catch (error) {
            console.log(error)
        }



    }

    return (
        <View style={styles.area}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={80}
            >
                <ScrollView>
                    <DataUser
                        name={userName}
                        date={date}
                        email={mail}
                    />

                    <Form sendProcess={sendProcess} />
                </ScrollView>
            </KeyboardAvoidingView>

        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    area: {
        flex: 1,
        backgroundColor: "#F5F5F5",
        padding: 20,
        width: "100%"
    }
})