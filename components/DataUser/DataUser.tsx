import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface DataUserProps {
    name : string
    date : string
    email: string
}

export const DataUser = ({name, date, email}: DataUserProps) => {
  return (
    <View style={style.container}>
        <View style={style.fields}>
            <Text style={style.label}>
                Nome: 
                <Text style={style.inputsValue}> {name}</Text>
            </Text>
            <Text style={style.label}>
                Data: 
                <Text style={style.inputsValue}> {date}</Text>
            </Text>
        </View>
        <View>
            <Text style={style.label}>
                E-mail: 
                <Text style={style.inputsValue}> {email}</Text>
            </Text>
        </View>
    </View>
  )
}

const style = StyleSheet.create({
    container : {
        backgroundColor: "#D9D9D9",
        padding: 15,
        borderRadius: 15,
        marginTop: 10,
        gap: 10
    },
    fields: {
        flexDirection: "row",
        gap: 10,
        justifyContent: "space-between"
    },
    label : {
        color: "#515151"
    },
    inputsValue : {
        color: "#858585"
    },
})
