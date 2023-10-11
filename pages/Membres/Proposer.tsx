import React, { useCallback, useRef } from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native';
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';
import { Text ,Image} from 'react-native';
import BottomSheet,{ BottomSheetRefProps } from '../tabs/BottomSheet';
import ModalDropdown from 'react-native-modal-dropdown';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button, Card ,Checkbox, IconButton} from 'react-native-paper';
import CardStyle from '../Style/CardStyle';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome';
import Bouton from '../home/Bouton';
import Bouton2 from '../home/Bouton2';
const Proposer = ({navigation}) => {
  const ref = useRef<BottomSheetRefProps>(null);
  const [checked, setChecked] = React.useState(false);



  const [dataCheck, setData] = React.useState([
    { id: 1, label: 'Élément 1'+' -  ', isChecked: false },
    { id: 2, label: 'Élément 2', isChecked: false },
    { id: 3, label: 'Élément 3', isChecked: false },
    // Ajoutez d'autres éléments à votre liste de données ici
  ]);

  const toggleCheckbox = (id) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  const [selectedOption, setSelectedOption] = React.useState(null);
  const handleSelect = (index, value) => {
    setSelectedOption(value);
  };

  const onPress = useCallback(() => {
    const isActive = ref?.current?.isActive();
    if (isActive) {
      ref?.current?.scrollTo(0);
    } else {
      ref?.current?.scrollTo(-200);
    }
  }, []);
  const [modalVisible, setModalVisible] = React.useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };
  const data = ['Option 1', 'Option 2', 'Option 3'];
  return (
    <GestureHandlerRootView style={{ flex: 1 ,backgroundColor: 'white'}} > 
         <View style={{ position: "absolute"}}>        
      
      <ImageBackground source={require("../../assets/aa.jpg")}
     style={{  width: '108%',    justifyContent: 'center',    position: 'absolute',flex:1,
     height: 280, borderRadius:150}} resizeMode="cover" borderRadius={12}  
    />
      {/* <IconButton icon={'account'} iconColor={'red'} /> */}
      <Text style={{ color: 'black', fontSize: 100, marginBottom: 20,fontWeight:'bold', letterSpacing: 2 ,justifyContent: 'center' ,textAlign:'center'}}></Text>

       <Card style={CardStyle.card} >        
       <Card.Content>   
       <Text style={{ color: 'black', fontSize: 30, marginBottom: 20,fontWeight:'bold', letterSpacing: 2 ,justifyContent: 'center' ,textAlign:'center'}}>A completer</Text>
       <TextInput style={CardStyle.input} 
      placeholder="Budget Min"
    />       
       <TextInput style={CardStyle.input} 
      placeholder="Budget Max"
    />

<ModalDropdown 
          options={data}
          onSelect={handleSelect}
          defaultValue="Select an option" style={CardStyle.input}
         
        //  onSelect={(index, value) => this.setState({ selectedOption: value })}
        />

<TouchableOpacity  onPress={showModal}  ><Button style={CardStyle.btn2}><Text style={{color: 'grey', fontSize: 15 }}>Critères
        <MaterialCommunityIcons name="transfer-down" size={18} /> </Text></Button></TouchableOpacity>        
        

<TouchableOpacity  onPress={onPress} ><Button style={CardStyle.btn2}><Text style={{color: 'grey', fontSize: 15 }}><MaterialCommunityIcons name="transfer-down" size={18} /> Choix plat
        </Text></Button></TouchableOpacity>
        

        <TouchableOpacity  onPress={onPress} ><Button style={CardStyle.btn}><Text style={{color: 'white', fontSize: 15 }}>Valider
        </Text></Button></TouchableOpacity>
        



    </Card.Content>      
  </Card></View>
      <View style={styles.container}>
      
        <BottomSheet ref={ref}>
          <View style={{ flex: 1, backgroundColor: 'orange'}} >
            
          </View>
        </BottomSheet>
      </View>



      
    <View>  
    <Modal
     isVisible={modalVisible}   
     animationInTiming={300}
     onBackdropPress={hideModal}  
     backdropTransitionOutTiming={1}
     animationIn="fadeIn"
     animationOut="fadeOut"
     animationOutTiming={1}
     swipeDirection="down"     
     backdropTransitionInTiming={1}
     style={{}}>
        <View style={{ flex: 1, backgroundColor: 'white',padding:20,borderRadius:18 }}>
        <Text style={{ color: 'black',alignItems: 'center', fontSize: 25 ,fontWeight : 'bold' , marginTop:5}}>Les Critères des Membres</Text>

        <Text style={{ color: 'black',alignItems: 'center', fontSize: 5 , marginTop:5}}></Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TextInput style={CardStyle.input2}       
      placeholder="Recherche Critère"
    ></TextInput><Button  style={{width:20,paddingHorizontal: 10,backgroundColor :'gray' }}> 
        <Icon name='search' size={20} color="white" />    </Button>
    </View>
    <View>
      {dataCheck.map((item) => (
        <View key={item.id} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Checkbox
            status={item.isChecked ? 'checked' : 'unchecked'}
            onPress={() => toggleCheckbox(item.id)}
          />
          <Text>{item.label}</Text>
        </View>
      ))}
    </View>
    <View style={{flexDirection: 'row', marginTop:20}}>
        

      <Bouton2  title='Valider'  color1='#0e1c26' color2='#43c197' onPress={() => navigation.navigate('Proposer')} /><Text>    </Text>
        <Bouton2 onPress={hideModal}  title='Annuler'  color1='#bbc7dc' color2='#bbc7dc' />     
        </View>
        </View>
      </Modal>
      {/*// justifyContent: 'center', <Button style={StyleFeed.userName}   onPress={() => navigation.navigate('Menu')} >Menu</Button>
      <Image source={require('../../assets/crevette.jpg')} style={StyleFeed.userImg} /> */}    
    </View> 


    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
   // flex:1,
   marginTop: 10,
   marginBottom: 10,
   width: 240,
   height: 40,
   alignItems : 'center',
 //  position: 'center',
   borderWidth: 1, // Épaisseur de la bordure
   borderColor: 'grey', 
   borderRadius : 100     ,
   paddingHorizontal: 10,
   marginVertical: 10,
   backgroundColor : 'pink',
   color: 'black',
   fontFamily :'poppins-bold',
    aspectRatio: 1,
    opacity: 0.6,
  },
});
export default Proposer

