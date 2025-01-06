import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type StackParam = {
    login           : {} | undefined
    TabNavigator    : {} | undefined
    success         : {} | undefined
}

type LoginNavigationProp = NativeStackNavigationProp<StackParam, 'login'>
type TabNavigatorNavigationProp = NativeStackNavigationProp<StackParam, 'TabNavigator'>
type SuccessNavigationProp = NativeStackNavigationProp<StackParam, 'success'>

export {
    LoginNavigationProp, 
    TabNavigatorNavigationProp, 
    SuccessNavigationProp
}