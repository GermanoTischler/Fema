import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import { Home } from './src/pages/Home';

export default function App() {

  return (
    <View style={{flex: 1, backgroundColor: '#131016'}}>
      <StatusBar style="light" />

      <Home />
       
    </View>
  );
}
