import { DataUser } from '@/components/DataUser/DataUser'
import Form from '@/components/Form/Form'
import Header from '@/components/Header/Header'
import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const home = () => {
    return (
        <SafeAreaView style={styles.area}>
            <Header />
            
            <DataUser 
                name='Jean Carlos' 
                date={new Date().toLocaleDateString()} 
                email='jean@gmail.com'
            />

            <Form />

        </SafeAreaView>
    )
}

export default home

const styles = StyleSheet.create({
    area : {
        flex: 1,
        backgroundColor: "#F5F5F5",
        padding: 20
    }
})