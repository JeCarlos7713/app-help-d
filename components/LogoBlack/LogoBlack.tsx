import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

export const LogoBlack = () => {
    return <View >
        <Image
            source={require('./../../assets/images/logo-black.png')}
            resizeMode='contain'
            style={style.logo}
        />
    </View>
}

const style = StyleSheet.create({
    logo: {
        width: 80
    }
})