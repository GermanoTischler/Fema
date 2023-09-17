import { Text, View, Image } from 'react-native';
import styles from './style.js'

export default function Header() {
   return(
      <View style={styles.header}>
        <Image style={{height:100, width:100}} source={require('../../assets/switch.png')}/>
        <Text style={styles.headerText}>Nintendo Switch</Text>
      </View>
   )
}