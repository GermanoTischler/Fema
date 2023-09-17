import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
   },
   containerScroll: {
      display: 'flex',
   },
   title: {
      fontSize: '2rem',
      fontWeight: 'bold',
      paddingVertical: '3vh',
      paddingLeft: '5%',
   },
   subtitle: {
      fontWeight: 500,
      paddingBottom: '3vh',
      paddingLeft: '5%',
   },
   cardVinho: {
      display: 'flex',
      flexDirection: 'row',
      borderRadius: '10px',
      backgroundColor: '#c4a3a7',
      padding: '1vh',
      maxWidth: '350px',
      marginHorizontal: '5%',
      marginBottom: '2.5vh',
      justifyContent: 'center',
      alignItems: 'center'
   
   },
   vinhoImg: {
      height: '15vmax',
      width: '15vmax',
   },
   cardBoxDescricao: {
      flex: 1,
      alignItems:'flex-start',
      justifyContent: 'center',
   },
   cardTitle: {
      color: 'white',
      fontWeight: '800',
      paddingVertical: '5%',
   },
   cardDescricao: {
      color: 'white',
   },
});

export default styles