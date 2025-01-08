import { useState, useEffect } from "react"
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from "react-native"
import { Input } from "../Input/Input"
import Select from "../Select/Select"
import { OptionItem } from "@/types/OptionItem"
import Label from "../Label/Label"
import { InputArea } from "../InputArea/InputArea"
import GetGroups from "@/services/grupoAtendimento"

const listPrioridade: OptionItem[] = [
    {
        label: "",
        value: ""
    },
    {
        label: "Alto",
        value: "alta"
    },
    {
        label: "Médio",
        value: "media"
    },
    {
        label: "Baixo",
        value: "baixa"
    },
]

const Form = ({sendProcess} : any) => {

    const [groups, setGroups] = useState<OptionItem[]>([])
    const [topicoAjuda, setTopicoAjuda] = useState()
    const [prioridade, setPrioridade] = useState()
    const [atendimento, setAtendimento] = useState()
    const [resumo, setResumo] = useState()
    
    const sendProcessObject = {
        topicoAjuda : topicoAjuda,
        grupo       : atendimento,
        prioridade  : prioridade,
        resumo      : resumo
    }


    const setGroupsFormmat = async () => {
        const groups = await new GetGroups().execute()
        if (groups.length == 0) {
            throw new Error("Não foi possível carregar os grupos de atendimento solicitados.")
        }

        const formattGroups = groups.retorno.map((group: any) => {
            return {
                label : group.area,
                value : group.ID
            }
        })

        setGroups(formattGroups)
    }

    useEffect(() => {
        setGroupsFormmat()
    }, [])

    return (
        <View style={styles.container}>

            <View>
                <Input
                    label="Tópico de Ajuda"
                    placeholder="Digite o tópico de Ajuda"
                    change={(e:any) => setTopicoAjuda(e)}
                />
            </View>

            <View>
                <Label label="Prioridade" />
                <Select data={listPrioridade} onChange={(e: any) => setPrioridade(e)} placeholder="Selecione uma prioridade" topSelect={150} />
            </View>

            <View>
                <Label label="Grupo de Atendimento" />
                <Select data={groups} onChange={(e: any) => setAtendimento(e)} placeholder="Selecione o grupo" topSelect={250} />
            </View>

            <View>
                <InputArea lines={4} placeholder="Resuma o chamado" label="Resumo do Chamado" change={(e:any) => setResumo(e)}  />
            </View>

            <View>
                <TouchableOpacity style={styles.button} onPress={() => sendProcess(sendProcessObject)}>
                    <Text style={styles.textButton}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Form

const styles = StyleSheet.create({
    container: {
        gap: 15,
        marginTop: 15
    },
    button : {
        backgroundColor: "#009951",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        borderRadius: 20
    },
    textButton : {
        color: "#FFF"
    }
})