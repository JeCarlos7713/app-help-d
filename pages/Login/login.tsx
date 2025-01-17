import { useNavigation } from 'expo-router'
import React, { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, KeyboardAvoidingView, ScrollView, Platform } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import { TabNavigatorNavigationProp } from '@/types/RoutesTypes'
import Auth from '@/services/auth'
import useStorage from '@/hooks/useStorage'

const Login = () => {

    const [secureTextEntry, setSecureTextEntry] = useState(true)
    const [eye, setEye] = useState('eye')
    const [email, setEmail] = useState("")
    const [token, setToken] = useState("")

    const changeSecureTextEntry = () => {
        setSecureTextEntry(!secureTextEntry)
        setEye(secureTextEntry ? 'eye-off' : 'eye')
    }

    const navigation = useNavigation<TabNavigatorNavigationProp>()

    const login = async () => {
        try {
            const hasMail = email != "" && token != ""

            if (!hasMail) {
                alert("Erro ao realizar login! Há dados incompletos, preencha todos para prosseguir")
                return
            }

            if (email != "" && token != "") {
                const instance = new Auth(email.trim(), token.trim())
                const auth = await instance.execute()
                
                if (auth.success && auth.retorno) {
                    await saveData(auth.retorno)
                    navigation.navigate("TabNavigator")
                }
            }

        } catch (error) {
            alert(error)
        }
    }

    const saveData = async (dataUser: {}) => await useStorage().storeData(dataUser)

    return (
        <SafeAreaView style={styles.content}>
            <View style={styles.header}>
                <Image
                    style={styles.logo}
                    source={require('./../../assets/images/logo.png')}
                    resizeMode='contain'
                />
            </View>

            <View style={styles.contentLogin}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    keyboardVerticalOffset={80}>
                    <ScrollView>
                        <View style={styles.contentTitle}>
                            <Text style={styles.titleLogin}>Login</Text>
                        </View>

                        <TextInput
                            label="Email"
                            mode='outlined'
                            style={styles.input}
                            outlineStyle={{ borderColor: "#2C2C2C" }}
                            textColor="#2C2C2C"
                            cursorColor='#2C2C2C'
                            placeholder='Digite seu e-mail'
                            value={email}
                            onChangeText={setEmail}
                        />
                        <TextInput
                            label="Token"
                            mode='outlined'
                            style={styles.input}
                            outlineStyle={{ borderColor: "#2C2C2C" }}
                            textColor="#2C2C2C"
                            cursorColor='#2C2C2C'
                            placeholder='Digite seu Token'
                            secureTextEntry={secureTextEntry}
                            right={
                                <TextInput.Icon onPress={changeSecureTextEntry} icon={eye} />
                            }
                            onChangeText={setToken}
                        />

                        <Button
                            mode="contained"
                            textColor='#FFF'
                            style={styles.buttonStyle}
                            onPress={() => login()}
                        >
                            Entrar
                        </Button>
                    </ScrollView>
                </KeyboardAvoidingView>

            </View>
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: "#FFF",
        maxHeight: "100%"
    },
    header: {
        backgroundColor: "#2C2C2C",
        flex: 2,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        alignItems: "center",
        justifyContent: "flex-end"
    },
    contentLogin: {
        backgroundColor: "#FFF",
        flex: 5,
        marginHorizontal: 20
    },
    logo: {
        width: 150,
    },
    contentTitle: {
        marginTop: 30
    },
    titleLogin: {
        textAlign: "center",
        fontSize: 26,
        fontWeight: "semibold",
        fontFamily: "Inter"
    },
    input: {
        backgroundColor: "#FFF",
        color: "#2C2C2C",
        marginVertical: 10
    },
    buttonStyle: {
        backgroundColor: "#2C2C2C",
        marginTop: 20
    }
})