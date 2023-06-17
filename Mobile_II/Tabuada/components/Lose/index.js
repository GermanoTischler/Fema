import { View, Text, ImageBackground, Pressable } from 'react-native';
import styles from './style';

import errou from '../../assets/errou.jpg';

export function Lose({navigation}) {

   const NavTable = () => {
      navigation.navigate('Table')
   };

   const NavHome = () => {
      navigation.navigate('Home')
   };

   return(
      <ImageBackground style={styles.background} source={errou}>
         <View style={styles.box}>
            <Text style={styles.title}>OPS! REPOSTA ERRADA, QUE TAL VER A TABUADA?</Text>

            <View style={styles.btn_box}>
               <Pressable style={styles.btn_table} onPress={NavTable}>
                  <Text style={styles.table}>VER TABUADA</Text>
               </Pressable>
               <Pressable style={styles.btn_retry} onPress={NavHome}>
                  <Text style={styles.retry}>TENTAR OUTRO</Text>
               </Pressable>
            </View>
         </View>
      </ImageBackground>
   )
};