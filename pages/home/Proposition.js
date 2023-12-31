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
  
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 5; // Nombre d'éléments à afficher par page  

  const route = useRoute();  
  const {token,proposition} = route.params;
  //const prop =JSON.stringify(proposition.listedata);
  console.log(token+" token memnre");
 // console.log(proposition.listedata+" proposition");
//  console.log(prop+" prop");
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
<Bouton title='retour' titre='Combinaison de plats' onPress={() => navigation.navigate('AjoutMembres',{token: token})} />
<ScrollView style={{}}>
{!proposition&& <Text style={{justifyContent:'center'}}>Aucune Proposition Disponible</Text>}
        {proposition && proposition.listedata.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
        .map((item,index) => (<View style={StyleFeed.scrollableListitem}>
            <View key={index} >  
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
              <Text style={{ color: 'white', fontSize: 80, marginBottom: 15,fontWeight:'bold', letterSpacing: 5 }}><Text style={{color:'black'}}> </Text></Text>
              {proposition && (   
              <View style={{width:100,flexDirection:'row'}}>
              
          <Button
          style={{width:100,height: 40,backgroundColor:'white'}}
                   title="Page précédente"
                   disabled={currentPage === 1}
                   onPress={() => setCurrentPage(currentPage - 1)}
                 ><Text style={{fontSize:10}}>←</Text></Button>
                 <Button style={{width:100,height: 40,backgroundColor:'white'}}
                   title="Page suivante"
                   disabled={currentPage === Math.ceil(proposition.listedata.length / itemsPerPage)}
                   onPress={() => setCurrentPage(currentPage + 1)}
                   ><Text  style={{fontSize:10}}> →</Text></Button>
        </View>)}

              </ScrollView>

    </View>
  );
};

export default Proposition;
