import { View, Text, Image, Pressable } from "react-native";

import tabuada from '../../assets/tabuada.jpeg';
import styles from "./style";

export function Table({navigation}) {

   const NavHome = () => {
      navigation.navigate('Home')
   };

   return(
      <View style={styles.container}>
         <View style={styles.img_Container}>
            <Image 
               source={tabuada} 
               resizeMode='contain' 
               style={styles.img}/> 
         </View>

         <View style={styles.btn_Container}>
            <Pressable style={styles.btn} onPress={NavHome}>
               <Text style={styles.txt}>RESPONDER</Text>
            </Pressable>
         </View>

      </View>
   )
};