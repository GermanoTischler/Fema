import { View, Text, Pressable, StyleSheet } from "react-native"

export function Sale({ position, name, price, remove }) {

   return(
      <View style={styles.container}>
         <View style={styles.card}>
            <Text style={styles.item}>#{position + 1}</Text>
            <Text style={styles.item}>{name}</Text>
            <Text style={styles.item}>R${price}</Text>
         </View>

         <Pressable style={styles.btn_remove} onPress={remove}>
            <Text style={styles.btn_textRemove}>-</Text>
         </Pressable>
      </View> 
   )
}

const styles = StyleSheet.create({
   
   container: {
      width: '100%',
      flexDirection: 'row',
      gap: -12,
      marginBottom: 10,
   },

   card: {
      flex: 1,
      flexDirection: 'row',
      gap: 30,
      height: 55,
      borderRadius: 8,
      borderWidth: 1,
      color: '#fff',
      padding: 16,
      fontSize: 16,
   },

   item: {
      color: '#000',
      fontSize: 16,
   },

   btn_remove: {
      height: 55,
      width: 55,
      borderRadius: 8,
      backgroundColor: '#E23C44',
      alignItems: 'center',
      justifyContent: 'center',
   },

   btn_textRemove: {
      color: '#fff',
      fontSize: 25,
      fontWeight: 900,
   },
})