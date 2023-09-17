import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   
   container: {
      width: '100%',
      flexDirection: 'row',
      gap: -8,
      marginBottom: 10,
   },

   card: {
      flex: 1,
      height: 56,
      backgroundColor: '#1f1e25',
      borderRadius: 5,
      color: '#fff',
      padding: 16,
      fontSize: 16,
   },

   name: {
      color: '#FDFCFE',
      fontSize: 16,
   },

   btn_remove: {
      height: 56,
      width: 56,
      borderRadius: 5,
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

export default styles