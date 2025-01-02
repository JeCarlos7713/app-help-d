import React from 'react'
import { StyleSheet, View } from 'react-native'
import { LogoBlack } from '../LogoBlack/LogoBlack'
import { Icon } from 'react-native-paper'

const Header = () => {
    return (
        <View style={style.header}>
            <LogoBlack />
            <Icon color='#2C2C2C' size={30} source={'arrow-left-circle-outline'} />
        </View>
    )
}

export default Header

const style = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20
    }
})