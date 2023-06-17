import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
   },

   title_box: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '18vh',
   },

   title: {
      fontSize: '1.5rem',
      fontWeight: 600,
      color: '#0345fc',
   },

   img_box: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
   },

   img: {
      height: '60vh',
      width: '100vw'
   },

   btn_box: {
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '2.5rem'
   },

   btn: {
      backgroundColor: 'rgba(30, 117, 42, 0.85)reen',
      alignItems: 'center',
      justifyContent: 'center',
      height: '2.5rem',
      width: '10rem',
   },

   btn_text: {
      color: '#fff'
   }
})

export default styles