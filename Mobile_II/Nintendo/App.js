import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Header from './Components/Header/index.js';
import Content from './Components/Content/content.js';

export default function App() {
  return (
    <View style={{flex:1}}>
      <StatusBar hidden/>

      <Header />
      <Content />
      
    </View>
  );
}


