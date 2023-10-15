import * as React from 'react';
import {  Checkbox,  Text } from 'react-native-paper';
import { View,useColorScheme,Button } from 'react-native';
import CardStyle from '../Style/CardStyle';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import StyleFeed from '../tabs/style';
import { FakeData } from '../../data/FakeData';
import Bouton from '../home/Bouton';
import Modal from 'react-native-modal';
import AjoutMembres from './AjoutMembre';
import { useRoute } from '@react-navigation/native';

const Membres = ({navigation}) => {
  
  const route = useRoute();  
  const {token} = route.params;
  console.log(token+" token memnre");
  const [checked, setChecked] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);
console.log(token +" membre token")
  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  return (
    <View>
    {/* <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    /> */}
<Bouton title='Ajout Membre' onPress={() => navigation.navigate('AjoutMembres',{token: token})} />
{/* 
  <FlatList vertical={true} style={StyleFeed.scrollableList} showsHorizontalScrollIndicator={false} keyExtractor={item =>item.id} renderItem={({item}) =>{ 
        return (<TouchableOpacity style={StyleFeed.scrollableListitem}>
                <Text>{item.mainText}</Text>
            </TouchableOpacity> )}}
     data={FakeData}/> */}
    </View>
  );
};

export default Membres;
