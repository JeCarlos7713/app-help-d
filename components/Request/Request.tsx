import AntDesign from "@expo/vector-icons/AntDesign"
import { View, Text, StyleSheet } from "react-native"
import { RequestsInfos } from "@/types/RequestsInfos"
const Request = ({ numChamado, prioridade, topicoAjuda, atendimento, status }: RequestsInfos) => {

    const statusComponent = [
        (<AntDesign name="clockcircleo" size={18} color="#FFB641" />),
        (<AntDesign name="closecircleo" size={18} color="#FF0033" />),
        (<AntDesign name="checkcircleo" size={18} color="#42CA3D" />)
    ]
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textHeader}>N° {numChamado} - Prioridade {prioridade}</Text>
                {statusComponent[parseInt(status)]}
            </View>

            <View style={styles.contain}>
                <View style={styles.items}>
                    <Text style={styles.title}>Tópico de Ajuda</Text>
                    <Text>{topicoAjuda}</Text>
                </View>
                <View style={styles.items}>
                    <Text style={styles.title}>Atendimento</Text>
                    <Text>{atendimento}</Text>
                </View>
            </View>
        </View>
    )
}

export default Request

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#D9D9D9",
        borderRadius: 20
    },
    header: {
        backgroundColor: "#2C2C2C",
        paddingHorizontal: 15,
        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    textHeader: {
        color: "#FFF",
        fontWeight: "bold"
    },
    contain: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    title: {
        fontWeight: "bold"
    },
    items: {
        width: "50%"
    }
})