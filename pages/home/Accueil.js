import { View, Text } from 'react-native'
import React from 'react'
import StyleFeed from '../tabs/style'
import { FakeData } from '../../data/FakeData'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { Button } from 'react-native-paper'
import CardStyle from '../Style/CardStyle'
import LinearGradient from 'react-native-linear-gradient';
import Bouton from './Bouton'
import Proposer from '../Membres/Proposer'

const Accueil = ({navigation}) => {

    const handlePress = () => {
        console.log('Bouton cliqué !');
      };
  return (
    <View >
      {/* <Button style={CardStyle.btn2} onPress={() => navigation.navigate('Proposer',data )} ><Text style={{letterSpacing: 1,
        color: 'white',fontFamily :'poppins-bold',fontWeight:'bold', alignItems: 'center',
}}>Proposer + </Text></Button>  */}
<Bouton title='Proposition' onPress={() => navigation.navigate('Proposer')} />
      <FlatList vertical={true} style={StyleFeed.scrollableList} showsHorizontalScrollIndicator={false} keyExtractor={item =>item.id} renderItem={({item}) =>{ 
        return (<TouchableOpacity style={StyleFeed.scrollableListitem}>
                <Text>{item.mainText}</Text>
            </TouchableOpacity> )}}
     data={FakeData}/>
    </View>
  )
}

export default Accueil