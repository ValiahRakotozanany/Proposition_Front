import * as React from 'react';
import {  Checkbox,  Text ,Button} from 'react-native-paper';
import { View,useColorScheme } from 'react-native';
import CardStyle from '../Style/CardStyle';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import StyleFeed from '../tabs/style';
import { FakeData } from '../../data/FakeData';
import Bouton from './Bouton';
import Modal from 'react-native-modal';
import AjoutMembres from '../Membres/AjoutMembre';
import { useRoute } from '@react-navigation/native';

const Proposition = ({navigation}) => {
  
  const route = useRoute();  
  const {token,proposition} = route.params;
  const prop =JSON.stringify(proposition.listedata);
  console.log(token+" token memnre");
  console.log(proposition.listedata+" proposition");
  console.log(prop+" prop");
  const [checked, setChecked] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);
console.log(token +" membre token")
  const showModal = () => {
    setModalVisible(true);
  };

  const navigatToDetails = (item,to) => {
    
  };

  return (
    <View>
    {/* <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    /> */}
<Bouton title='retour' titre='Planning' onPress={() => navigation.navigate('AjoutMembres',{token: token})} />
<ScrollView style={{}}>
        {proposition && proposition.listedata.map((item,index) => (<View style={StyleFeed.scrollableListitem}>
            <View key={index} >  
            <Text>Jour {index+1  }</Text>            
                <Button title="Détails" style={{justifyContent:'flex-start',alignItems:'flex-start'}} onPress={() =>navigation.navigate("DetailsProposition", { token, details: item })}>
              {item.map((propp,ind)=>(
                <Text key={ind} tyle={{ color: 'black', fontSize:15 ,fontWeight:'bold',  letterSpacing: 2 }}><Text style={{color:'grey'}}>{propp.nomplats} -</Text>  </Text>                     
                ))}
             </Button>
           
            <View>              
            <TouchableOpacity style={{marginLeft:250,flexDirection:'right'}}><Text> </Text></TouchableOpacity>
            </View>
          </View>          
    </View>
              
              
              ))} 
              <Text style={{ color: 'white', fontSize: 80, marginBottom: 40,fontWeight:'bold', letterSpacing: 5 }}><Text style={{color:'black'}}> </Text></Text>
              </ScrollView>
    </View>
  );
};

export default Proposition;
