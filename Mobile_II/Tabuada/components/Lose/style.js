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
      gap: '4.5vh',
   },

   title: {
      fontSize: '1.5rem',
      fontWeight: 600,
      color: '#0345fc'
   },

   btn_box: {
      display: 'flex',
      flexDirection: 'row',
      gap: '7vw',
   },

   btn_table: {
      backgroundColor: 'rgba(25, 35, 130, 0.85)',
      height: '3rem',
      width: '5rem',
      alignItems: 'center',
      justifyContent: 'center',
   },

   table: {
      color: '#fff',

   },

   btn_retry: {
      backgroundColor: 'rgba(30, 117, 42, 0.85)',
      height: '3rem',
      width: '5rem',
      alignItems: 'center',
      justifyContent: 'center',
   },

   retry: {
      color: '#fff',
   },
});

export default styles