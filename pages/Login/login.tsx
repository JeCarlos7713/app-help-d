import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native'

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

            <View style={styles.contentTitle}>
                <Text style={styles.titleLogin}>Login</Text>
            </View>

        </View>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
    content : {
        flex: 1,
        backgroundColor: "#FFF",
    },
    header : {
        backgroundColor: "#2C2C2C",
        flex: 2,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        alignItems: "center",
        justifyContent: "flex-end"
    },
    contentLogin: {
        backgroundColor: "#FFF",
        flex: 4
    },
    logo: {
        width: 150,
    },
    contentTitle: {
        marginTop: 60
    },
    titleLogin: {
        textAlign: "center",
        fontSize: 26,
        fontWeight: "semibold",
        fontFamily: "Inter"
    }
})