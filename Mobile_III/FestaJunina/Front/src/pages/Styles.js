import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#FFFEE0',
      padding: 24,
   },

   header: {
      display: 'flex',
      flexDirection: 'row',
   },

   img: {
      position: 'absolute',
      left: 265,
      top: 20,
      height: 100,
      width: 100,
   },

   title: {
      color: '#1B1B1E',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 48,
   },

   date: {
      color: '#6a6a6a',
      fontSize: 16,
   },

   form: {
      width: '100%',
      flexDirection: 'row',
      gap: 8,
      marginTop: 36,
      marginBottom: 17,
   },

   inputBox: {
      width: 300,
      height: 56,
      alignItems: 'center',
      borderColor: '#1b1b1e',
      position: 'relative',
      zIndex: 10,
   },

   inputText: {
      fontSize: 16,
      fontWeight: 600,
   },

   dropDown: {
      zIndex: 100,
      position: 'relative',
      overflow: 'scroll',
      // float: 'right',
      // top: 55,
      // width: 300,
   },

   item: {
      fontSize: 14,
      fontWeight: 500,
      position: 'relative',
      zIndex: 1000,
   },

   btn_add: {
      height: 56,
      width: 56,
      borderRadius: 9,
      backgroundColor: '#76D265',
      alignItems: 'center',
      justifyContent: 'center',
   },

   btn_textAdd: {
      color: '#fff',
      fontSize: 25,
   },

   list: {
      marginTop: 30,
   },

   emptyList: {
      color: '#000',
      fontSize: 14,
      fontWeight: 700,
      textAlign: 'center',
      marginTop: 50,
   },
})

export default styles