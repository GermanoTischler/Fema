import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#131016',
      padding: 24,
   },

   title: {
      color: '#fdfcfe',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 48,
   },

   date: {
      color: '#6b6b6b',
      fontSize: 16,
   },

   form: {
      width: '100%',
      flexDirection: 'row',
      gap: 8,
      marginTop: 36,
      marginBottom: 42,
   },

   input: {
      flex: 1,
      height: 56,
      backgroundColor: '#1f1e25',
      borderRadius: 5,
      color: '#fff',
      padding: 16,
      fontSize: 16,
   },

   btn_add: {
      height: 56,
      width: 56,
      borderRadius: 5,
      backgroundColor: '#31CF67',
      alignItems: 'center',
      justifyContent: 'center',
   },

   btn_textAdd: {
      color: '#fff',
      fontSize: 25,
   },

   subTitle: {
      color: '#fdfcfe',
      fontSize: 20,
      fontWeight: 700,
      marginBottom: 16,
   },

   emptyList: {
      color: '#fff',
      fontSize: 14,
      fontWeight: 700,
      textAlign: 'center',
   },
})

export default styles