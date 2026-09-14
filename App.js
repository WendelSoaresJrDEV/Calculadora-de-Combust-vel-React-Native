import {useState} from 'react';
import {Text, View, Image, Button, TextInput, StyleSheet} from 'react-native';
import logo from './assets/logo.png'


export default function App() {
 
  function calcular(alcool, gasolina){
    if (alcool && gasolina){
      if (alcool + gasolina < 0.7){
        alert("Abasteça com álcool")
      } else {
        alert("Abasteça com gasolina")
      }
    } else {
        alert("Insira o preço do alcool e da gasolina")
    }
}

  const [precoAlcool, setAlcool] = useState('');
  const [precoGasolina, setGasolina] = useState('');

  return (
    
    <View
      style={styles.container}>
      <Image source={logo} style={{width: 150, height: 150}}/>

      <Text style={styles.text}>Qual a melhor opção?</Text>

      <Text style= {styles.label} >Álcool (preço por litro)</Text>
      <TextInput
        onChangeText={newText => setAlcool(newText)}
        defaultValue={precoAlcool}
        placeholder="Coloque o preço do Álcool" 
        keyboardType="numeric"
        style={styles.textInput}
      />

      <Text style={styles.label} placeholder="Coloque o preço da Gasolina" keyboardType="numeric">Gasolina (preço por litro)</Text>
      <TextInput
        onChangeText={newText => setGasolina(newText)}
        defaultValue={precoGasolina}
        placeholder="Coloque o preço Gasolina" 
        keyboardType="numeric"
        style={styles.textInput}
      />

      <Button title="Calcular" color='#FFBF00' style={styles.button} onPress={() => calcular(precoAlcool, precoGasolina)}/>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3c3c3c',
    gap: 20
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff'
  },
  label: {
    color: '#fff'
  },
  textInput: {
    height: 40,
    width: 300,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: 'white'
  },
  button: {
    borderRadius: 4
  }


});
