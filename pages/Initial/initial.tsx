import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import Routes from '@/routes';

const Initial = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.logo}
          source={require('./../../assets/images/logo.png')}
          resizeMode='contain'
        />
      </View>
      <View style={styles.viewIntroduction}>
        <Text style={styles.textIntroduction}>Centralizando a abertura de chamados na palma da sua mão.</Text>
      </View>
      
      <TouchableOpacity onPress={() =>  navigation.navigate('login')}>
        <AntDesign name="playcircleo" size={40} color="white" />
      </TouchableOpacity>

    </View>
  )
}

export default Initial

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: "column",
    backgroundColor: "#2C2C2C",
  },
  logo: {
    width: 240,
  },
  viewIntroduction : {
    width: 240,
    marginTop: 20,
    marginBottom: 20
  },
  textIntroduction: {
    color: "#FFF",
    fontSize: 16, 
    textAlign: "justify"
  }
})