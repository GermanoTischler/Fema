import React from 'react';
import { Text, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  
  return (
    <LinearGradient 
      style={{height: "100%", width: "100%"}}
      colors={["#5FCDC2", "#1E60B4"]}>

      <View style={styles.container}>

        <TextInput
          style={styles.input}
          placeholder='Username'>
        </TextInput>

        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}>
        </TextInput>

        <TouchableOpacity
        style={styles.button}>
          <Text style={styles.text}>Login Now</Text>
        </TouchableOpacity>


      </View>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#40F2FC',
    borderRadius: 23,
    padding: 10,
    marginTop: 40,
    height: 50,
    width: 270,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8B4A9',
    borderRadius: 23,
    padding: 10,
    marginTop: 40,
    height: 50,
    width: 270,
      
  },
  
  text: {
    fontSize: 20,
    alignText: 'center',
    fontWeight: 'bold'
  }

});
