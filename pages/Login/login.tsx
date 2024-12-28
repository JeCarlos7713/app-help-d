import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, KeyboardAvoidingView, ScrollView } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
const Login = () => {
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
                <KeyboardAvoidingView>
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
                        />
                        <TextInput
                            label="Token"
                            mode='outlined'
                            style={styles.input}
                            outlineStyle={{ borderColor: "#2C2C2C" }}
                            textColor="#2C2C2C"
                            cursorColor='#2C2C2C'
                            placeholder='Digite seu Token'
                            secureTextEntry
                            right={<TextInput.Icon icon="eye" />}
                        />

                        <Button
                            mode="contained"
                            textColor='#FFF'
                            style={styles.buttonStyle}
                            onPress={() => console.log('Pressed')}
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