import { useState } from "react"
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from "react-native"
import { Input } from "../Input/Input"
import { Picker } from '@react-native-picker/picker'
import Select from "../Select/Select"
import { OptionItem } from "@/types/OptionItem"
import Label from "../Label/Label"
import { InputArea } from "../InputArea/InputArea"

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

const GruposAtendimento: OptionItem[] = [
    {
        label: "",
        value: ""
    },
    {
        label: "TI",
        value: "TI"
    },
    {
        label: "RM",
        value: "RM"
    },
    {
        label: "C5",
        value: "C5"
    },
    {
        label: "Protheus",
        value: "protheus"
    },
    {
        label: "Fluig",
        value: "fluig"
    },
    {
        label: "Manutenção",
        value: "manut"
    },
]



const Form = () => {


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
                <Select data={listPrioridade} onChange={() => { }} placeholder="Selecione uma prioridade" topSelect={200} />
            </View>

            <View>
                <Label label="Grupo de Atendimento" />
                <Select data={GruposAtendimento} onChange={() => { }} placeholder="Selecione o grupo" topSelect={380} />
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