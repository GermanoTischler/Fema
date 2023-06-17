import { View, Text, Pressable, Image } from 'react-native';

import styles from './style';
import trofeu from  '../../assets/trofeu.jpg';

export function Win({navigation}) {

   const NavHome = () => {
      navigation.navigate('Home')
   };

   return(
      <View style={styles.container}>
         <View style={styles.title_box}>
            <Text style={styles.title}>PARABÉNS, VOCÊ ACERTOU!</Text>
         </View>
         <View style={styles.img_box}>
            <Image 
               source={trofeu}
               resizeMode='contain'
               style={styles.img}/>
         </View>
         <View style={styles.btn_box}>
            <Pressable style={styles.btn} onPress={NavHome}>
               <Text style={styles.btn_text}>RESPONDER OUTRO</Text>
            </Pressable>
         </View>
      </View>
   )
};