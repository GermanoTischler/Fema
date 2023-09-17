import styles from './Styles';
import { useState } from 'react';
import { View, Text, Pressable, FlatList, Alert, Image } from 'react-native';
import { Sale } from '../components/Sale';
import { TotalAmount } from '../components/TotalAmount';
import server from '../../API/axios';
import SelectList from '../components/DropDown';
import balaoJunino from './../assets/balaoJunino.png';
import uuid from 'react-native-uuid'

export function Home() {

	const data = [
		{value:'Bolo'},
		{value:'Cachorro quente'},
		{value:'Pé de moleque'},
		{value:'Quentão P'},
		{value:'Quentão M'},
		{value:'Quentão G'},
		{value:'Pipoca P'},
		{value:'Pipoca M'},
		{value:'Pipoca G'},
	]

	const catalogo = [
		{food:'Bolo', price: 4.0},
		{food:'Cachorro quente', price: 6.5},
		{food:'Pé de moleque', price: 3.5},
		{food:'Quentão P', price: 5.0},
		{food:'Quentão M', price: 10.0},
		{food:'Quentão G', price: 15.0},
		{food:'Pipoca P', price: 3.0},
		{food:'Pipoca M', price: 6.0},
		{food:'Pipoca G', price: 9.0},
	]

	const [selected, setSelected] = useState('');
	const [list, setList] = useState([]);
	const [count, setCount] = useState(0);
	const [qtd, setQtd] = useState(0);

	console.log(list);

	async function serverData(server) {

		const resultSERVER = await server.post('/register', {
			item: food,
			value: price,
			position: position
		})
		setList((prevState) => [...prevState, resultSERVER])
	};

	function id() {return uuid.v4()};

	function handleAdd(selected) {
		const filter = catalogo.find(item => item.food === selected )
		setQtd(prevState => prevState + 1)
		const newItem = {...filter, id: id(), position: qtd}
		setList((prevState) => [...prevState, newItem])
		handleCount(selected)
	};

	function handleRemove(menu) {
		Alert.alert('Remover', `Você deseja remover ${menu.food}?`, [
			{
				text: 'Não',
				onPress: () => Alert.alert('Operação cancelada')
			}, {
				text: 'Sim',
				onPress: () => {
					setList(prevState => prevState.filter(item => item.id !== menu.id))
					setCount(prevState => prevState - menu.price)
				}
		}])
	};

	function handleCount(selected) {
		const filter = catalogo.find(item => item.food === selected )
		setCount((prevState) => prevState + filter.price)
	};

	const EmptyList = () => {
		return(
		<View>
			<Text style={styles.emptyList}>Não foi vendido nenhum item</Text>
		</View>
	)};

	return(
		<View style={styles.container}>
			<View style={styles.header}>
				<View>
					<Text style={styles.title}>Festa Junina FEMA</Text>
					<Text style={styles.date}>Quinta-feira, 6 de Julho de 2023.</Text>
				</View>

				<Image style={styles.img} source={balaoJunino}/>
			</View>

			<View style={styles.form}>

				<SelectList
				boxStyles={styles.inputBox}
				inputStyles={styles.inputText}
				dropdownStyles={styles.dropDown}
				dropdownTextStyles={styles.item}
				setSelected={(val) => setSelected(val)} 
				data={data} 
				save="value"
				placeholder='Selecione um item'
				search={false}
				/>

				<Pressable style={styles.btn_add} onPress={() => handleAdd(selected)}>
					<Text style={styles.btn_textAdd}>+</Text>
				</Pressable>
			</View>

			<TotalAmount 
			amount={count}
			quantity={list.length}
			/>

			<FlatList
			style={styles.list}
			data={list}
			keyExtractor={(item) => item.id}
			renderItem={({item}) => (
				<Sale
					key={item.id}
					position={item.position}
					name={item.food}
					price={item.price}
					remove={() => handleRemove(item)}/>
				)}
			ListEmptyComponent={EmptyList}
			showsVerticalScrollIndicator={false}
			/>

		</View>
	)
}