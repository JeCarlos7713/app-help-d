import Request from '@/components/Request/Request'
import { RequestsInfos } from '@/types/RequestsInfos'
import AntDesign from '@expo/vector-icons/AntDesign'
import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const RequestsProcess = () => {
  const requests: RequestsInfos[] = [
    {
      numChamado: '0001',
      status: 'aberto',
      prioridade: 'Alta',
      topicoAjuda: 'Ajuste no PC',
      atendimento: 'Técnico'
    },
    {
      numChamado: '0002',
      status: 'fechado',
      prioridade: 'Média',
      topicoAjuda: 'PC com Falha',
      atendimento: 'Técnico'
    }
  ]

  return (
    <View style={styles.area}>

      <View>
        <Text style={styles.title}> <AntDesign name='barschart' color='#1E1E1E' style={styles.icon} /> Meus Chamados</Text>
      </View>

      <View style={styles.container}>
        {
          requests.map((request, index) => (
            <Request key={index} {...request} />
          ))
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
  title : {
    fontSize: 23,
    fontWeight: "bold"
  },
  icon : {
    fontSize: 23
  },
  container: {
    gap: 10
  }
})