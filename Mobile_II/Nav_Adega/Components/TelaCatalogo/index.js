import React from "react";
import { ScrollView, View, Text, Image } from "react-native";
import styles from './style';

import vinhoBranco from '../../assets/vinhoBranco.jpg';
import vinhoEspecial from '../../assets/vinhoEspecial.jpg';
import vinhoRose from '../../assets/vinhoRose.jpg';
import vinhoSeco from '../../assets/vinhoSeco.jpg';
import vinhoTinto from '../../assets/vinhoTinto.jpg';

export default function TelaCatalogo () {
   return(
      <View style={styles.container}>
         <ScrollView style={styles.containerScroll}>
            <Text style={styles.title}>Nosso vinhos</Text>
            <Text style={styles.subtitle}>Trabalhamos com o melhor vinho dos seguintes tipos: branco, rosé, tinto e seco.</Text>
         
            <View style={styles.cardVinho}>
               <Image source={ vinhoBranco } style={styles.vinhoImg} resizeMode='contain' />
               <View style={styles.cardBoxDescricao}>
                  <Text style={styles.cardTitle}>Chatigny Chardonnay</Text>
                  <Text style={styles.cardDescricao}>Vinho leve, refrescante e levemente cítrico. Perfeito com carnes brancas e massa ao pesto.</Text>
               </View>
            </View>

            <View style={styles.cardVinho}>
               <Image source={ vinhoRose } style={styles.vinhoImg} resizeMode='contain' />
               <View style={styles.cardBoxDescricao}>
                  <Text style={styles.cardTitle}>Concha y Toro Exportacion</Text>
                  <Text style={styles.cardDescricao}>Vinho rosé fresco, intenso e macio da cor rosa pálido. Perfeito com saladas e aperitivos.</Text>
               </View>
            </View>

            <View style={styles.cardVinho}>
               <Image source={ vinhoRose } style={styles.vinhoImg} resizeMode='contain' />
               <View style={styles.cardBoxDescricao}>
                  <Text style={styles.cardTitle}>Concha y Toro Exportacion</Text>
                  <Text style={styles.cardDescricao}>Vinho rosé fresco, intenso e macio da cor rosa pálido. Perfeito com saladas e aperitivos.</Text>
               </View>
            </View>

            <View style={styles.cardVinho}>
               <Image source={ vinhoRose } style={styles.vinhoImg} resizeMode='contain' />
               <View style={styles.cardBoxDescricao}>
                  <Text style={styles.cardTitle}>Concha y Toro Exportacion</Text>
                  <Text style={styles.cardDescricao}>Vinho rosé fresco, intenso e macio da cor rosa pálido. Perfeito com saladas e aperitivos.</Text>
               </View>
            </View>
            
         </ScrollView>
      </View>
   )
};