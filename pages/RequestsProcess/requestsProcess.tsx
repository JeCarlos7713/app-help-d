import Request from '@/components/Request/Request'
import { RequestsInfos } from '@/types/RequestsInfos'
import AntDesign from '@expo/vector-icons/AntDesign'
import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Process from '@/services/process'
import useStorage from '@/hooks/useStorage'
import { useNavigation } from '@react-navigation/native';
import { LoginNavigationProp } from '@/types/RoutesTypes';

const RequestsProcess = () => {
  const navigation = useNavigation<LoginNavigationProp>();
  const [requests, setRequests] = useState<RequestsInfos[]>([])
  
  const getDataUser = async () => {
    const dataUser = await useStorage().getData()
    if (dataUser.token) {
      return dataUser.matricula
    }else{
      navigation.navigate('login')
    }
  }
  
  const setProcessFormmat = async () => {
    const userMat = await getDataUser()
    const process = await new Process(userMat).execute()
    
    if (process.length == 0) {
      throw new Error("Não foi possível carregar os grupos de atendimento solicitados.")
    }

    const formattProcess: RequestsInfos[] = process.retorno.map((proc: any) => {
      return {
        numChamado  : proc.process,
        status      : proc.status,
        prioridade  : proc.prioridade,
        topicoAjuda : proc.topico,
        atendimento : proc.grupo
      }
    })

    setRequests(formattProcess)
  }

  useEffect(() => {
    setProcessFormmat()
  }, [])
  return (
    <View style={styles.area}>

      <View>
        <Text style={styles.title}> <AntDesign name='barschart' color='#1E1E1E' style={styles.icon} /> Meus Chamados</Text>
      </View>

      <View style={styles.container}>
        {
          requests.length > 0 ?
            requests.map((request, index) => (
              <Request key={index} {...request} />
            )) : <Text style={styles.textChamado}>Ops... Não há chamados abertos</Text>
        }
      </View>
    </View>
  )
}

export default RequestsProcess

const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
    width: "100%",
    gap: 20
  },
  title: {
    fontSize: 23,
    fontWeight: "bold"
  },
  icon: {
    fontSize: 23
  },
  container: {
    gap: 10
  },
  textChamado: {
    fontSize: 17,
    textAlign: 'center',
    fontWeight: "bold"

  }
})