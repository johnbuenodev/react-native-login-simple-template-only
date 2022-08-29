import { StatusBar } from 'expo-status-bar';
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
       <Image 
        source={require('./assets/login.png')}
        style={styles.logo}
       />
       <TextInput 
        style={styles.input}
        placeholder='Digite seu Email'

       />
       <TextInput 
        style={styles.input}
        secureTextEntry={true}
        placeholder='Digite sua Senha'

       />

       {/* Alert.alert alert("Login", "Acessando o dashBoard...") */}
       
       <TouchableOpacity
        style={styles.button} 
        onPress={() => alert("Acessando dashboard...")}
       >
        <Text style={styles.buttonTitle}>Entrar</Text>
       </TouchableOpacity>
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width:150,
    height:150,
    //borderRadius: 50,
    resizeMode : 'contain' // 'cover' 'contain'
  },
  input: {
    marginTop: 10,
    width: 300,
    backgroundColor: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 4,
    padding: 16 
  },
  button: {
    width: 300,
    backgroundColor: '#4B0082',
    marginTop: 16,
    borderRadius: 50
  },
  buttonTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    padding: 16,
    alignSelf:'center',
  }
});
