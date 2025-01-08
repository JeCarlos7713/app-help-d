import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { LogoBlack } from '../LogoBlack/LogoBlack'
import { Icon } from 'react-native-paper'
import useStorage from '@/hooks/useStorage'
import { useNavigation } from '@react-navigation/native';
import { LoginNavigationProp } from '@/types/RoutesTypes';

const Header = () => {
    const navigation = useNavigation<LoginNavigationProp>();
    
    const logout = async () => {
        await useStorage().removeData()
        navigation.navigate('login')
    }

    return (
        <View style={style.header}>
            <LogoBlack />
            
            <TouchableOpacity onPress={() => logout()}>
                <Icon  color='#2C2C2C' size={30} source={'arrow-left-circle-outline'} />
            </TouchableOpacity>
        </View>
    )
}

export default Header

const style = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: "#F5F5F5",
    }
})