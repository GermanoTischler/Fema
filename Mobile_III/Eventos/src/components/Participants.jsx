import { View, Text, Pressable } from "react-native"
import styles from "./Styles"

export function Participants({ name, remove }) {

   return(
      <View style={styles.container}>
         <View style={styles.card}>
            <Text style={styles.name}>{name}</Text>
         </View>

         <Pressable style={styles.btn_remove} onPress={remove}>
            <Text style={styles.btn_textRemove}>-</Text>
         </Pressable>
      </View> 
   )
}