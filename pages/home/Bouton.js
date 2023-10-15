import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import StyleFeed from '../tabs/style';

const Bouton = ({title,onPress,titre}) => {
  return (
    <View style={StyleFeed.header1}>
      <Text style={{ color: 'black', fontSize:18 ,fontWeight:'bold',  letterSpacing: 1 }}>{titre}</Text>
    <TouchableOpacity onPress={onPress} style={{width:120,height:50,marginLeft:80 ,marginTop:8}}>
      <LinearGradient      
        colors={['#f89b29','#bf0fff']} // Couleurs du gradient
        start={{ x: 0, y: 0 }} // Point de départ du gradient (en pourcentage)
        end={{ x: 1.3, y: 0 }} // Point d'arrêt du gradient (en pourcentage)
         style={{ padding: 10 ,borderWidth:1,borderRadius: 100 ,borderColor:'#d8dbe9'}} // Styles du gradient
>   

    <Text style={{ color: 'white', textAlign: 'center' ,fontWeight:'bold',fontFamily:'poppins'}}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
    </View>
  )
}

export default Bouton

