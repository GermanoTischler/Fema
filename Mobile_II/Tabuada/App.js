import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from './components/Home';
import { Win } from './components/Win';
import { Lose } from './components/Lose';
import { Table } from './components/Table';

export default function App() {

   const Nav = createStackNavigator();

   return (
      <NavigationContainer>
         <Nav.Navigator 
         screenOptions={{headerShown:false}} 
         initialRouteName='Win'>
            <Nav.Screen name='Home' component={ Home }/>
            <Nav.Screen name='Win' component={ Win }/>
            <Nav.Screen name='Lose' component={ Lose }/>
            <Nav.Screen name='Table' component={ Table }/>
         </Nav.Navigator>
      </NavigationContainer>
   );
};
