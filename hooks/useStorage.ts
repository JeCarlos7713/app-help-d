import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {

    const getData = async () => {
        try {
            const dataUser: string | null = await AsyncStorage.getItem('userData')
            console.log("BUSQUEI OS DADOS")
            console.log(dataUser)
            return dataUser ? JSON.parse(dataUser) : []
        
        } catch (error) {
            console.log(`Erro ao buscar: ${error}`)
        }
    }

    // Salvar um item no storage
    const storeData = async (dataUser: {}) => {
        try {
            const jsonValue = JSON.stringify(dataUser);
            console.log("SETANDO OS VALORES")
            await AsyncStorage.setItem('userData', jsonValue);
        } catch (e) {
            new Error("ERRO AO GERAR CRIAÇÃO DOS DADOS DO USUÁRIO")
        }
    };

    // Remover storage
    const removeData = async () => {
        try {
            await AsyncStorage.setItem('userData', JSON.stringify({}))
        } catch (error) {
            console.log("ERROR AO DELETAR: ", error)
        }
    }
    return {
        getData,
        storeData,
        removeItem: removeData
    }
}

export default useStorage;