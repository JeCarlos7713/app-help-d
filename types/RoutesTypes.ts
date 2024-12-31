import { NativeStackNavigationProp } from '@react-navigation/native-stack';
type StackParam = {
    login : {} | undefined
    TabNavigator : {} | undefined
}

type LoginNavigationProp = NativeStackNavigationProp<StackParam, 'login'>
type TabNavigatorNavigationProp = NativeStackNavigationProp<StackParam, 'TabNavigator'>

export {LoginNavigationProp, TabNavigatorNavigationProp}