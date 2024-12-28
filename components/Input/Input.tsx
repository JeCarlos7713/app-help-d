import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

interface InputProps {
    label: string,
    placeholder: string
}

export const Input = ({ label, placeholder }: InputProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                placeholder={placeholder}
                style={styles.input}
            />
        </View>
    )
}

const styles = StyleSheet.create( {
    container : {
        marginTop: 20
    },
    label: {
        fontSize: 18,
        marginBottom: 5
    },
    input : {
        padding: 15,
        borderRadius: 10,
        borderColor: "#DBDBDB",
        borderWidth: 1,
        color: "#DBDBDB",
        backgroundColor: "#FFF"
    }
})