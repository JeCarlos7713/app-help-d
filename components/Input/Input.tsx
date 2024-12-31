import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import Label from '../Label/Label'

interface InputProps {
    label       : string
    placeholder : string
    value?       : string
    change?      : () => void
    blur?        : () => void
    focus?       : () => void
}

export const Input = ({ label, placeholder, value, change, blur, focus }: InputProps) => {
    return (
        <View>
            <Label label='Tópico de Ajuda' />
            <TextInput
                placeholder={placeholder}
                style={styles.input}
                onChange={change}
                onBlur={blur}
                onFocus={focus}
                value={value}
            />
        </View>
    )
}

const styles = StyleSheet.create( {
    label: {
        fontSize: 18,
        marginBottom: 5
    },
    input : {
        padding: 15,
        borderRadius: 10,
        borderColor: "#DBDBDB",
        borderWidth: 1,
        color: "#B3B3B3",
        backgroundColor: "#FFF"
    }
})