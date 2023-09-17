import React from "react";
import { View, Text, ScrollView } from "react-native";
import { FontAwesome, Entypo, MaterialIcons } from '@expo/vector-icons';

import styles from './style.js';

export default function TelaContato () {
   return(
      <ScrollView>
         <View style={styles.container}>
            <Text style={styles.titulo}>Entre em contato conosco para comprar nossos produtos</Text>
         
            <View style={styles.contatoLista}>

               <View style={styles.contatoBox}>
                  <FontAwesome name="phone" size={50} color="#400303" />
                  <Text style={styles.contatoTitulo}>Telefone:</Text>
                  <Text style={styles.contatoParagrafo}>+55 21 000000000</Text>
               </View>
               
               <View style={styles.contatoBox}>
                  <Entypo name="location-pin" size={50} color="#400303" />
                  <Text style={styles.contatoTitulo}>Endereço:</Text>
                  <Text style={styles.contatoParagrafo}>Av. 123, 222 - Rio de Janeiro RJ</Text>
               </View>

               <View style={styles.contatoBox}>
                  <MaterialIcons name="email" size={50} color="#400303" />
                  <Text style={styles.contatoTitulo}>Email:</Text>
                  <Text style={styles.contatoParagrafo}>preferida@adega.com.br</Text>
               </View>

               <View style={styles.contatoBox}>
                  <FontAwesome name="instagram" size={50} color="#400303" />
                  <Text style={styles.contatoTitulo}>Instagram:</Text>
                  <Text style={styles.contatoParagrafo}>@adegapreferida</Text>
               </View>

            </View>
         </View>
      </ScrollView>
   )
};