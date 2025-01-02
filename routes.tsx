import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import home from "./pages/Home/home";
import Initial from "./pages/Initial/initial";
import Login from "./pages/Login/login";
import SuccessProcess from "./pages/SuccessProcess/successProcess";
import { Image, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack'
import RequestsProcess from "./pages/RequestsProcess/requestsProcess";
import Header from "./components/Header/Header";

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const TabNavigator = () => {
    return (
        <Tab.Navigator initialRouteName="home" screenOptions={{
            tabBarStyle: {
                backgroundColor: '#2C2C2C',
                borderTopColor: '#2C2C2C',
                height: 60,
                justifyContent: "center"
            }
        }}>
            <Tab.Screen
                name="home"
                component={home}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: (({ focused, size, color }) => <Image source={require("./assets/images/home.png")} />)
                }}
            />
            <Tab.Screen
                name="requests"
                component={RequestsProcess}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: (({ focused, size, color }) => <Image source={require("./assets/images/analytics.png")} />)
                }}
            />

        </Tab.Navigator>
    )
}

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="initial">
                <Stack.Screen name="TabNavigator" component={TabNavigator} options={{header : () => <Header />} }/>
                <Stack.Screen name="login" component={Login} options={{ headerShown: false }}/>
                <Stack.Screen name="success" component={SuccessProcess} options={{ headerShown: false }}/>
                <Stack.Screen name="initial" component={Initial} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes