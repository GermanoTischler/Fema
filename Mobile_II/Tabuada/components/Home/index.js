import React, { useState } from "react";
import { ImageBackground, Pressable, TextInput, View, Text} from "react-native";
import styles from './style'
import fundo from '../../assets/fundo.png';

import { NumberGen, Validate } from "./function";

export function Home({navigation}) {

   const [firstN, setFirstN] = useState(NumberGen());
   const [secondN, setSecondN] = useState(NumberGen());
   const [userInput, setUserInput] = useState('');

   const create = () => {
      setFirstN(NumberGen());
      setSecondN(NumberGen());
   };

   const ResponseValidation = () => {
      if(Validate(firstN, secondN, userInput)) {
         NavWin();
      } else {
         NavLose();
      }

      create();
   };

   const NavTable = () => {
      navigation.navigate('Table');
   };

   const NavWin = () => {
      navigation.navigate('Win');
   };

   const NavLose = () => {
      navigation.navigate('Lose');
   };

   //####### Filtrar apenas números #######

   // function onChanged(text) {
   //    this.setState({
   //       text: text.replace(/[^0-9/g, '']),
   //    });
   // }

   return(
      <ImageBackground source={fundo} style={styles.background}>
         <View style={styles.box}>
            <Text style={styles.title}>DUVIDO VOCÊ ACERTAR!</Text>

            <View style={styles.math}>
               <Text style={styles.operation}>{firstN}</Text>
               <Text style={styles.operation}>X</Text>
               <Text style={styles.operation}>{secondN}</Text>
               <Text style={styles.operation}>=</Text>
               <TextInput 
                  style={styles.input} 
                  keyboardType="numeric"
                  maxLength={3}
                  autoFocus={true}
                  onChangeText={setUserInput}
                  value={userInput}
                  ></TextInput>
         
            </View>
            <View style={styles.btn_box}>
               <Pressable style={styles.btn_pular} onPress={create}>
                  <Text style={styles.pular}>PULAR</Text>
               </Pressable>
               <Pressable style={styles.btn_responder} onPress={ResponseValidation}>
                  <Text style={styles.responder}>RESPONDER</Text>
               </Pressable>
            </View>
         </View>

         <Pressable style={styles.btn_table} onPress={NavTable}>
            <Text style={styles.table} >VER TABUADA</Text>
         </Pressable>
      </ImageBackground>
   )
};