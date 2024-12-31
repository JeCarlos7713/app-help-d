import React from 'react'
import { Text, StyleSheet } from 'react-native'

type PropLabel = {
    label : string
}

const Label = ({label}: PropLabel) => {
  return <Text style={styles.label}>{label}</Text>
}

export default Label


const styles = StyleSheet.create( {
    label: {
        fontSize: 18,
        marginBottom: 5
    }
})