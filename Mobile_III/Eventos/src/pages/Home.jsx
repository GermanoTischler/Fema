import styles from './Styles';
import { useState } from 'react';
import { View, Text, TextInput, Pressable, FlatList, Alert } from 'react-native';
import { Participants } from '../components/Participants';

export function Home() {

   const [nameInput, setNameInput] = useState('')
   const [List, setList] = useState([])

   function handleAdd(participant) {
      if(List.includes(participant.trim())){
         Alert.alert('This person is already on the event')
      } else {
         setList((prevState) => [...prevState, participant.charAt(0).toUpperCase() + participant.slice(1)])
      }
   }

   function handleRemove(participant) {
      Alert.alert('Remove', `Do you want to remove ${participant}?`, [
         {
            text: 'no',
            onPress: () => Alert.alert('Operation canceled')
         }, {
            text: 'yes',
            onPress: () => {
               setList(prevState => prevState.filter(participantName => participantName !== participant))}
      }])
   }

   return(
      <View style={styles.container}>
         <Text style={styles.title}>Event Name</Text>
         <Text style={styles.date}>Friday, November 4th, 2022.</Text>

         <View style={styles.form}>
            <TextInput 
               style={styles.input}
               placeholder='Participant name'
               placeholderTextColor={'#6b6b6b'}
               keyboardAppearance='dark'
               onChangeText={setNameInput}
               value={nameInput}
            />  

            <Pressable style={styles.btn_add} onPress={() => handleAdd(nameInput)}>
               <Text style={styles.btn_textAdd}>+</Text>
            </Pressable>
         </View>

         <Text style={styles.subTitle}>Participants</Text>

         <FlatList
            data={List}
            keyExtractor={(item) => item }
            renderItem={({item}) => (
               <Participants
                  key={item}
                  name={item}
                  remove={() => handleRemove(item)}/>
               )}
            ListEmptyComponent={() => {
               <Text style={styles.emptyList}>There is no one in this event</Text>
            }}
            showsVerticalScrollIndicator={false}
            />
      </View>
   )
}