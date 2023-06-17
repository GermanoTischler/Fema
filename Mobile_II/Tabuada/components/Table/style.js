import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#FFF9D7'
   },

   img_Container: {
      flex: 1,
      alignItems: 'center',
      
   },

   img: {
      height: '80vh',
      width: '100vw',
      marginTop: '3vh'
   },

   btn_Container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end',
      marginBottom: '7vh'
   },

   btn: {
      backgroundColor: 'rgba(30, 117, 42, 0.85)',
      height: '2rem',
      width: '8rem',
      alignItems: 'center',
      justifyContent: 'center',
   },

   txt: {
      color: '#fff'
   }
})

export default styles