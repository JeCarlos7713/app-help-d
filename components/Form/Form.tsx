import { useState, useEffect } from "react"
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from "react-native"
import { Input } from "../Input/Input"
import { Picker } from '@react-native-picker/picker'
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
        value: "alto"
    },
    {
        label: "Médio",
        value: "medio"
    },
    {
        label: "Baixo",
        value: "baixo"
    },
]


const Form = () => {

    const [groups, setGroups] = useState<OptionItem[]>([])

    const setGroupsFormmat = async () => {
        console.log("GRUPOOOOOOS")
        const groups = await new GetGroups().execute()
        console.log("SETANDO OS GRUPOS: ")
        console.log(groups)
        if (groups.length == 0) {
            throw new Error("Não foi possível carregar os grupos de atendimento solicitados.")
        }

        const formattGroups = groups.retorno.map((group: any) => {
            return {
                label : group.area,
                value : group.ID
            }
        })

        console.log(formattGroups)

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
                    change={() => {}}
                />
            </View>

            <View>
                <Label label="Prioridade" />
                <Select data={listPrioridade} onChange={() => { }} placeholder="Selecione uma prioridade" topSelect={150} />
            </View>

            <View>
                <Label label="Grupo de Atendimento" />
                <Select data={groups} onChange={() => { }} placeholder="Selecione o grupo" topSelect={250} />
            </View>

            <View>
                <InputArea lines={4} placeholder="Resuma o chamado" label="Resumo do Chamado"  />
            </View>

            <View>
                <TouchableOpacity style={styles.button} onPress={() => {}}>
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