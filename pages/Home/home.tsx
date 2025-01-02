import { DataUser } from '@/components/DataUser/DataUser'
import Form from '@/components/Form/Form'
import React from 'react'
import { StyleSheet, KeyboardAvoidingView, ScrollView, Platform, View } from 'react-native'

const Home = () => {
    return (
        <View style={styles.area}>
            <KeyboardAvoidingView 
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={80}
            >
                <ScrollView>
                    <DataUser
                        name='Jean Carlos'
                        date={new Date().toLocaleDateString()}
                        email='jean@gmail.com'
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