import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import StyleFeed from '../tabs/style';

const Bouton2 = ({title,onPress,color1,color2})=>{
    return (
    <TouchableOpacity onPress={onPress} style={{width:120,height:50}}>
    <LinearGradient      
    colors={[color1,color2]} // Couleurs du gradient
      //colors={['#0e1c26','#99f2d1']} // Couleurs du gradient
      start={{ x: 0, y: 0 }} // Point de départ du gradient (en pourcentage)
      end={{ x: 1, y: 0 }} // Point d'arrêt du gradient (en pourcentage)
       style={{ padding: 10 ,borderWidth:1,borderRadius: 100 ,borderColor:'#d8dbe9'}} // Styles du gradient
  >   
  
  <Text style={{ color: 'white', textAlign: 'center' ,fontWeight:'bold',fontFamily:'poppins'}}>{title}</Text>
    </LinearGradient>
  </TouchableOpacity>
    )
  }
  export default Bouton2