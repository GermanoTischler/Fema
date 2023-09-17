import { View, StyleSheet, Text } from "react-native";

export function TotalAmount({amount, quantity}) {

   return (
      <View style={styles.container}>
         <Text style={styles.amount}>Total:  R${amount}</Text>
         <Text style={styles.total}>Qtd:  {quantity}</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      width: 365,
      height: 55,
      borderWidth: 1,
      borderRadius: 10,
      borderColor: '#1B1B1E',
      alignItems: 'center',
      justifyContent: 'flex-start',
      display: 'flex',
      flexDirection: 'row',
      gap: 105,
      backgroundColor: '#fffcc0',
   },

   amount: {
      fontSize: 18,
      fontWeight: 700,
      marginLeft: 20,
      justifyContent: 'flex-start',
   },

   total: {
      fontSize: 18,
      fontWeight: 700,
      justifyContent: 'flex-end',
      
   },
})