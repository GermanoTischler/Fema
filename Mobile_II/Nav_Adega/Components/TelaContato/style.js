import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#fff'
   },
    titulo: {
      fontSize: '1.4rem',
      fontWeight: 'bold',
      marginBottom: '5%'
   },
    contatoLista: {
      alignItems: 'center',
   },
    contatoBox: {
      borderWidth: '1px',
      borderRadius: '10px',
      width: '75vw',
      height: '18vh',
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: '2%',
   },
    contatoTitulo: {
      fontWeight: '800',
      color: '#400303',
   },
    contatoParagrafo: {
      color: '#400303',
      fontWeight: '500'
   },
});

export default styles