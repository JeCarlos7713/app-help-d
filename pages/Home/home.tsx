import { DataUser } from '@/components/DataUser/DataUser'
import Form from '@/components/Form/Form'
import Header from '@/components/Header/Header'
import React from 'react'
import { StyleSheet, KeyboardAvoidingView, ScrollView, Platform } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
    return (
        <SafeAreaView style={styles.area}>
            <KeyboardAvoidingView 
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={80}
            >
                <ScrollView>
                    <Header />

                    <DataUser
                        name='Jean Carlos'
                        date={new Date().toLocaleDateString()}
                        email='jean@gmail.com'
                    />

                    <Form />
                </ScrollView>
            </KeyboardAvoidingView>

        </SafeAreaView>
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