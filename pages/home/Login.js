import { View, Text,TextInput, ImageBackground } from 'react-native'
import React from 'react'
import { IconButton, Provider ,Button, Card, Menu} from 'react-native-paper';
import Background from '../Style/Background';
import CardStyle from '../Style/CardStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';




const Home = ({navigation,props}) => {
  
  const data = {
    param1: 'Poulet',
    param2: 'Frites',
  };

  
  return (
    <View>
    <ImageBackground source={require("../../assets/back1.jpg")}
     style={{ height: '100%' }} />
    <View style={{ position: "absolute" }}>    
      <View style={CardStyle.container}>
    <Text style={{ color: 'white', fontSize: 64 ,fontWeight : 'bold'}}></Text>

    <Text style={{ color: 'white', fontSize: 20 ,fontWeight : 'bold'}}></Text>
      <Text style={{ color: 'white', fontSize: 30, marginBottom: 40,fontWeight:'bold', letterSpacing: 5 }}>Tonga<Text style={{color:'black'}}>Soa</Text></Text>
     
      {/* <IconButton icon={'account'} iconColor={'red'} /> */}                
    </View>
       <Card style={CardStyle.card}>
       <Card.Content>   
       <Text style={{ color: 'grey', fontSize: 20, marginBottom: 10,fontWeight:'bold', letterSpacing: 3,justifyContent:'center' ,textAlign:'center' }}>Login</Text>
       <TextInput style={CardStyle.input} 
      placeholder="Email"
    />             
       <TextInput style={CardStyle.input}
         secureTextEntry={true}
       placeholder={"Mot de passe"}
    /> 
        <TouchableOpacity onPress={() => navigation.navigate('Feed',data )} ><Button style={CardStyle.btn} ><Text style={{letterSpacing: 2,
        color: 'white',
        fontFamily :'poppins-bold', textAlign: 'center' ,
}}>Connexion</Text></Button></TouchableOpacity> 

<Button  onPress={() => navigation.navigate('Inscription')} ><Text style={{letterSpacing: 2,
        color: 'black',
        fontFamily :'poppins-bold',
}}>Inscription</Text></Button> 
    
    </Card.Content>      
  </Card>
   
  </View></View>
  ) 
}

export default Home