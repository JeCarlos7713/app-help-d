import Request from '@/components/Request/Request'
import { RequestsInfos } from '@/types/RequestsInfos'
import AntDesign from '@expo/vector-icons/AntDesign'
import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import 

const RequestsProcess = () => {

  const [requests, setRequests] = useState<RequestsInfos[]>([])

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
  title : {
    fontSize: 23,
    fontWeight: "bold"
  },
  icon : {
    fontSize: 23
  },
  container: {
    gap: 10
  },
  textChamado : {
    fontSize: 17,
    textAlign: 'center',
    fontWeight: "bold"

  }
})