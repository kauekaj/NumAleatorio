import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native';


const app = () => {

  const [numero, setNumero] = useState(0)

  const handleNumero = () => {

    const novo_numero = Math.floor(Math.random() * 100)

    setNumero(novo_numero)
  }


  return (
    <SafeAreaView style={style.container}>
      <Text style={style.numero}>{numero}</Text>
      <TouchableOpacity onPress={handleNumero} style={style.botao}>
          <Text style={style.textoBotao}>Gerar Número</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
    
    container: {
      backgroundColor: '#ffccb6',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
        
    },

    numero: {
      fontSize: 38,
      fontWeight: 'bold',
      color: '#ffffff',
      marginBottom: 10
    },

    botao: {
      fontSize: 20,
      backgroundColor: '#abdee6',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 10,    
    },  

    textoBotao: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#ffffff'
    }
});

export default app;