import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import TelaHome from './Components/TelaHome/index';
import TelaCatalogo from './Components/TelaCatalogo/index';
import TelaContato from './Components/TelaContato/index';

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={{
          headerStyle: { 
            backgroundColor: '#400303',
            borderBottomWidth: 0,
            elevation: 0
          },
          headerTitleStyle: { 
            color: '#fff', 
            fontWeight: 'bold' 
          },
          tabBarStyle: { 
            backgroundColor: "#fff",
            borderTopWidth: 0,
            elevation: 0
          },
          tabBarLabelStyle:{ 
            fontSize: 13, 
            fontWeight: "bold",
            display: 'none'
          },
          headerTitleAlign: 'center',
          tabBarActiveTintColor: '#000',
          tabBarInactiveTintColor: "#ab887c",
          tabBarActiveBackgroundColor: "#400303"
        }}>

        <Tabs.Screen 
          name='Início' 
          component={ TelaHome }
          options={{
            tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color="#bd6a75" size={22}/>)
          }}
        />

        <Tabs.Screen 
          name='Catálogo' 
          component={ TelaCatalogo }
          options={{
            tabBarIcon: ({ color, size }) => (
            <Ionicons name="wine" color="#bd6a75" size={22}/>
          )}}
        />

        <Tabs.Screen 
          name='Contato'
          component={ TelaContato }
          options={{
            tabBarIcon: ({ color, size }) => (
            <Ionicons name="call" color="#bd6a75" size={22}/>
          )}}
        />

      </Tabs.Navigator>
    </NavigationContainer>
  );
};