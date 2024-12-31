import Header from "@/components/Header/Header"
import AntDesign from "@expo/vector-icons/AntDesign"
import { useNavigation } from "expo-router"
import { StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

interface ProcessProps {
    route : {}
}

const SuccessProcess = ({route}: ProcessProps) => {
    const navigation = useNavigation()
    const {processId} = route.params
  return (
    <SafeAreaView style={styles.container}>
        <Header />

        <View style={styles.containProcess}>
            <AntDesign  name="checkcircleo" color="#42CA3D" size={64} />
            <Text style={styles.text}>
                Chamado 
                <Text style={styles.blue}> {processId} </Text> 
                iniciado com sucesso!
            </Text>
        </View>
    </SafeAreaView>
  )
}

export default SuccessProcess

const styles = StyleSheet.create({
    container : {
        padding: 20
    },
    containProcess : {
        alignItems: "center",
        justifyContent: "center",
        height: "90%"
    },
    text : {
        fontSize: 24,
        color: "#1E1E1E",
        fontWeight: "500",
        textAlign: "center",
        width: "80%",
        marginTop: 10
    },
    blue : {
        color: "#0F7584"
    }

})