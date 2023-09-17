import { View, Text, Image } from 'react-native'
import styles from './style'

export default function Content() {
   return(
      <View style={styles.content}>
        <Text style={{fontSize:'0.92rem',fontWeight:'bold',paddingBottom:'5%'}}>Os principais jogos estão aqui!</Text>
        <Image style={{height:108, width:200}} source={require('../../assets/characters.png')}/>
        <Text 
          style={{fontWeight:400, paddingTop:'5%'}}>A família Nintendo Switch é o lar de jogos<br/>exclusivos de séries como Super Mario Bros,<br/> Legend of Zelda, Mario Kart e muitas outras.</Text>
      </View>
   )
};