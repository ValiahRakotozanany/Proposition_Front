import { View, Text ,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { FlatList, ScrollView, TouchableHighlight } from 'react-native-gesture-handler'
import StyleFeed from './style'
import { FakeData } from '../../data/FakeData'
import { Button } from 'react-native-paper'
import Menuu from './Menu'

const Feed = ({navigation}) => {
  return (
    <ScrollView>
    <View style={StyleFeed.header}>  
      {/* <Button style={StyleFeed.userName}   onPress={() => navigation.navigate('Menu')} >Menu</Button>
      <Image source={require('../../assets/crevette.jpg')} style={StyleFeed.userImg} /> */}
    <Menuu/>
    </View> 
    {/* <FlatList vertical={true} style={StyleFeed.scrollableList} showsHorizontalScrollIndicator={false} keyExtractor={item =>item.id} renderItem={({item}) =>{ 
        return (<TouchableOpacity style={StyleFeed.scrollableListitem}>
                <Text>{item.mainText}</Text>
            </TouchableOpacity> )}}
     data={FakeData}/> */}
    </ScrollView>
  )
}

export default Feed