import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Animated, TextInput} from 'react-native';
import uuid from 'react-native-uuid';

const SelectList =  ({
    setSelected,
    placeholder,
    boxStyles,
    inputStyles,
    dropdownStyles,
    dropdownItemStyles,
    dropdownTextStyles,
    maxHeight,
    data,
    defaultOption,
    arrowicon = false,
    search = true,
    searchPlaceholder = "search",
    notFoundText = "No data found",
    disabledItemStyles,
    disabledTextStyles,
    onSelect = () => {},
    save = 'key',
    dropdownShown = false,
    fontFamily
}) => {

    const oldOption = React.useRef(null)
    const [_firstRender,_setFirstRender] = React.useState(true);
    const [dropdown, setDropdown] = React.useState(dropdownShown);
    const [selectedval, setSelectedVal] = React.useState("");
    const [height,setHeight] = React.useState(200)
    const animatedvalue = React.useRef(new Animated.Value(0)).current;
    const [filtereddata,setFilteredData] = React.useState(data)

    const id = uuid.v4()


    const slidedown = () => {
        setDropdown(true)
        Animated.timing(animatedvalue,{
            toValue:height,
            duration:500,
            useNativeDriver:false,
            
        }).start()
    }
    const slideup = () => {
        
        Animated.timing(animatedvalue,{
            toValue:0,
            duration:500,
            useNativeDriver:false,
            
        }).start(() => setDropdown(false))
    }

    React.useEffect( () => {
        if(maxHeight)
            setHeight(maxHeight)
    },[maxHeight])

    
    React.useEffect(() => {
        setFilteredData(data);
      },[data])


    React.useEffect(() => {
        if(_firstRender){
          _setFirstRender(false);
          return;
        }
        onSelect()
    },[selectedval])
  

    React.useEffect(() => {
        if(!_firstRender && defaultOption && oldOption.current != defaultOption.key ){
            // oldOption.current != null
            oldOption.current = defaultOption.key
            setSelected(defaultOption.key);
            setSelectedVal(defaultOption.value);
        }
        if(defaultOption && _firstRender && defaultOption.key != undefined){
            
            oldOption.current = defaultOption.key
            setSelected(defaultOption.key);
            setSelectedVal(defaultOption.value);
        }
        
    },[defaultOption])

    React.useEffect(() => {
        if(!_firstRender){
            if(dropdownShown)
                slidedown();
            else
                slideup();
            
        }
        
    },[dropdownShown])



    return(
        <View>
            {
                (dropdown && search)
                ?
                    <View style={[styles.wrapper,boxStyles]}>
                        <View style={{flexDirection:'row',alignItems:'center',flex:1}}> 
                            
                            <TextInput 
                                placeholder={searchPlaceholder}
                                onChangeText={(val) => {
                                    let result =  data.filter((item) => {
                                        val.toLowerCase();
                                        let row = item.value.toLowerCase()
                                        return row.search(val.toLowerCase()) > -1;
                                    });
                                    setFilteredData(result)
                                }}
                                style={[{padding:0,height:20,flex:1,fontFamily},inputStyles]}
                            />
                                <TouchableOpacity onPress={() => slideup()} >

                                </TouchableOpacity>
                                
                           
                        </View>
                        
                    </View>
                :
                    <TouchableOpacity style={[styles.wrapper,boxStyles]} onPress={() => { if(!dropdown){ slidedown() }else{ slideup() } }}>
                        <Text style={[{fontFamily},inputStyles]}>{ (selectedval == "") ? (placeholder) ? placeholder : 'Select option' : selectedval  }</Text>
                        {
                            (!arrowicon)
                            ?
                                <Image 
                                    source={require('../assets/chevron.png')}
                                    resizeMode='contain'
                                    style={{width:20,height:20}}
                                />
                            :
                                arrowicon
                        }
                        
                    </TouchableOpacity>
            }
            
            {
                (dropdown)
                ?
                    <Animated.View style={[{maxHeight:animatedvalue},styles.dropdown,dropdownStyles]}>
                        <ScrollView  contentContainerStyle={{paddingVertical:10,overflow:'hidden'}} nestedScrollEnabled={true}>

                            {
                                (filtereddata.length >=  1)
                                ?
                                filtereddata.map((item,index) => {
                                    let key = item.key ?? item.value ?? item;
                                    let value = item.value ?? item;
                                    let disabled = item.disabled ?? false;
                                    
                                    if(disabled){
                                        return(
                                            <TouchableOpacity style={[styles.disabledoption,disabledItemStyles]} key={index} onPress={ () => {}}>
                                                <Text style={[{color:'#c4c5c6',fontFamily},disabledTextStyles]}>{value}</Text>
                                            </TouchableOpacity>
                                        )
                                    }else{
                                        return(
                                            <TouchableOpacity style={[styles.option,dropdownItemStyles]} key={index} onPress={ () => {
                                                if(save === 'value'){
                                                    setSelected(value);
                                                }else{
                                                    setSelected(key)
                                                }
                                                
                                                setSelectedVal(value)
                                                slideup()
                                                setTimeout(() => {setFilteredData(data)}, 800)
                                                
                                            }}>
                                                <Text style={[{fontFamily},dropdownTextStyles]}>{value}</Text>
                                            </TouchableOpacity>
                                        )
                                    }
                                    
                                })
                                :
                                <TouchableOpacity style={[styles.option,dropdownItemStyles]} onPress={ () => {
                                    setSelected(undefined)
                                    setSelectedVal("")
                                    slideup()
                                    setTimeout(() => setFilteredData(data), 800)
                                    
                                }}>
                                    <Text style={[{fontFamily},dropdownTextStyles]}>{notFoundText}</Text>
                                </TouchableOpacity>
                            }
                            
                            
                            
                        </ScrollView>
                    </Animated.View>
                :
                null
            }
            
            
        </View>
    )
}


export default SelectList;


const styles = StyleSheet.create({
    wrapper:{ borderWidth:1,borderRadius:10,borderColor:'gray',paddingHorizontal:20,paddingVertical:12,flexDirection:'row',justifyContent:'space-between' },
    dropdown:{ borderWidth:1,borderRadius:10,borderColor:'gray',marginTop:10,overflow:'hidden'},
    option:{ paddingHorizontal:20,paddingVertical:8,overflow:'hidden' },
    disabledoption:{ paddingHorizontal:20,paddingVertical:8,flexDirection:'row',alignItems:'center', backgroundColor:'whitesmoke',opacity:0.9}

})