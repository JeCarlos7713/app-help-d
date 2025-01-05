import { DataUser } from '@/components/DataUser/DataUser'
import Form from '@/components/Form/Form'
import React, { useEffect, useState } from 'react'
import { StyleSheet, KeyboardAvoidingView, ScrollView, Platform, View } from 'react-native'
import useStorage from '@/hooks/useStorage'

const Home = () => {

    const [userName, setUsername] = useState('')
    const [mail, setMail] = useState('')
    
    const getDataUser = async () => {
        const dataUser = await useStorage().getData()
        if (dataUser) {
            setUsername(dataUser.nome)
            setMail(dataUser.email)
        }
    }

    useEffect(() => {
        getDataUser()
    }, [])

    return (
        <View style={styles.area}>
            <KeyboardAvoidingView 
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={80}
            >
                <ScrollView>
                    <DataUser
                        name={userName}
                        date={new Date().toLocaleDateString()}
                        email={mail}
                    />

                    <Form />
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