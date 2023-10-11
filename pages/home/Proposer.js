import { View, Text } from 'react-native'
import React from 'react'
import StyleFeed from '../tabs/style'
import { FakeData } from '../../data/FakeData'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { Button } from 'react-native-paper'
import CardStyle from '../Style/CardStyle'
import LinearGradient from 'react-native-linear-gradient';

const Proposer = () => {

    const handlePress = () => {
        console.log('Bouton cliqué !');
      };
  return (
    <View>
      {/* <Button style={CardStyle.btn2} onPress={() => navigation.navigate('Proposer',data )} ><Text style={{letterSpacing: 1,
        color: 'white',fontFamily :'poppins-bold',fontWeight:'bold', alignItems: 'center',
}}>Proposer + </Text></Button>  */}
 <TouchableOpacity onPress={handlePress} style={{width:100,height:50,marginLeft:280 ,marginTop:8}}>
      <LinearGradient
      
        colors={['#0e0725', '#30c67c']} // Couleurs du gradient
        start={{ x: 0, y: 0 }} // Point de départ du gradient (en pourcentage)
        end={{ x: 1.3, y: 0 }} // Point d'arrêt du gradient (en pourcentage)
         style={{ padding: 10 ,borderRadius: 100 ,}} // Styles du gradient
      >
        <Text style={{ color: 'white', textAlign: 'center' ,fontFamily:'poppins-bold'}}>Proposer + </Text>
      </LinearGradient>
    </TouchableOpacity>

      <FlatList vertical={true} style={StyleFeed.scrollableList} showsHorizontalScrollIndicator={false} keyExtractor={item =>item.id} renderItem={({item}) =>{ 
        return (<TouchableOpacity style={StyleFeed.scrollableListitem}>
                <Text>{item.mainText}</Text>
            </TouchableOpacity> )}}
     data={FakeData}/>
    </View>
  )
}

export default Proposer