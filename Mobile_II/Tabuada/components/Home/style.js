import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   background: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
   },
   
   box: {
      height: '35vh',
      width: '70vw',
      borderRadius: 7,
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
   },

   title: {
      marginTop: '15px',
      fontSize: '1.4rem',
      fontWeight: '600',
      color: '#0345fc',
   },

   math: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: '3vh'
   },

   operation: {
      fontSize: '1.2rem',
      fontWeight: '500',
      marginHorizontal: '3px',
   },

   input: {
      height: '25px',
      width: '50px',
      marginLeft: '5px',
      borderWidth: '1px',
      borderRadius: '4px',
      borderColor: '#444444',
      fontSize: '1.2rem',
      fontWeight: '500',
   },

   btn_box: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: '8vw',
   },

   btn_pular: {
      backgroundColor: 'rgba(173, 36, 36, 0.85)',
      height: '2rem',
      width: '5.5rem',
      alignItems: 'center',
      justifyContent: 'center',
   },

   pular: {
      color: '#fff',
      fontWeight: '500',
   },

   btn_responder: {
      backgroundColor: 'rgba(30, 117, 42, 0.85)',
      height: '2rem',
      width: '5.5rem',
      alignItems: 'center',
      justifyContent: 'center',
   },

   responder: {
      color: '#fff',
      fontWeight: '500',
   },

   btn_table: {
      backgroundColor: 'rgba(25, 35, 130, 0.95)',
      height: '2.1rem',
      width: '70vw',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '5vh'
   },

   table: {
      color: '#fff',
      fontWeight: '500',
   }
})

export default styles