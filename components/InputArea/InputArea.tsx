import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import Label from '../Label/Label'

interface InputProps {
    lines       : number
    placeholder : string
    value?       : string
    change?      : () => void
    label       : string
}

export const InputArea = ({lines, label, placeholder, value, change }: InputProps) => {
    return (
        <View>
            <Label label={label} />
            <TextInput
                placeholder={placeholder}
                style={styles.input}
                onChange={change}
                value={value}
                multiline={true}
                numberOfLines={lines}
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
        backgroundColor: "#FFF",
        height: 100
    }
})