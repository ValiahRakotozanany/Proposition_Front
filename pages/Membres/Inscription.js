import { View, Text,TextInput ,ImageBackground} from 'react-native'
import React from 'react'
import { IconButton, Provider ,Button, Card, Menu} from 'react-native-paper';
import Background from '../Style/Background';
import CardStyle from '../Style/CardStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Inscription = ({navigation}) => {
  
  const data = {
    param1: 'Poulet',
    param2: 'Frites',
  };
  
  return (<View>
<Background>
      <View style={CardStyle.container}>
    <Text style={{ color: 'white', fontSize: 64 ,fontWeight : 'bold'}}></Text>
    <Text style={{ color: 'white', fontSize: 20 ,fontWeight : 'bold'}}></Text>
      
     
      {/* <IconButton icon={'account'} iconColor={'red'} /> */}                
    </View>
       <Card style={CardStyle.card}>
       <Card.Content>   
       <Text style={{ color: 'white', fontSize:10, marginBottom: 10,fontWeight:'bold', letterSpacing: 5 }}></Text>
       <Text style={{ color: 'black', fontSize: 30, marginBottom: 10,fontWeight:'bold', letterSpacing: 3 ,justifyContent: 'center' ,flex: 1, textAlign:'center'}}>Inscription</Text>
       <Text style={{ color: 'black', fontSize:15, marginBottom: 15, textAlign:'center' }}>__________________</Text>
       <TextInput style={CardStyle.input} 
      placeholder="Nom de Famille"
    />       
       <TextInput style={CardStyle.input} 
      placeholder="Email"
    />             
       <TextInput style={CardStyle.input}
         secureTextEntry={true} 
       placeholder={"Mot de passe"}
    /> 
        <TouchableOpacity onPress={() => navigation.navigate('Feed') }  style={CardStyle.btn} ><Text style={{letterSpacing: 2,
        color: 'white',
        fontFamily :'poppins-bold',textAlign:'center',alignItems:'center', textAlign: 'center' ,
}}>S'inscrire</Text></TouchableOpacity> 
    </Card.Content>      
  </Card></Background>    
  </View>
   
  )
};

export default Inscription