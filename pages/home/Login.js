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

  const [email, setEmail] = React.useState('');
const [password, setPassword] = React.useState('');


const appelWebService = async () => {
  try {
    console.log(email);
    const response = await fetch(`http://192.168.88.182:8087/tiatanindrazana/Login_Famille?email=${email}&motdepasse=${password}`);
    const data = await response.json();

    console.log(data);console.log("coucou"); // Affiche les données renvoyées par le service Web dans la console
  } catch (error) {
    console.error(error);
  }
};

const submit = () =>{
  //   console.log(thijgds.state.email+" "+this.state.password);        
   //  console.log(this.state.email);
  /*   log.append("email",this.state.email);
     log.append("motdepasse",this.state.password);
     console.log(log.get("email"));*/
  console.log(email)
     fetch("http://26.22.221.140:8087/tiatanindrazana/Login_Famille?email="+email+"&motdepasse="+password,//"http://localhost:8087/tiatanindrazana/Login_Famille?email="+email+"&motdepasse="+password,
     {
         method:"POST",
         headers : {"Content-Type":"application/json"},
       //  body: JSON.stringify({"email":email,"motdepasse":password})
       }) 
       .then((res)=>{if (!res.ok) {
       console.log('huhuu');
        throw new Error("Network response was not ok");
      }
      return res.json()})
       .then((resultat)=>{
       if(resultat['data']!=null){
         console.log(resultat['data'][0].token+" mandeha");            
         navigation.navigate ('Feed', { token: resultat['data'][0].token });  
        }
        // setEnchere(resultat.data);
     //   sessionStorage.setItem('iduser',JSON.stringify(resultat.utilisateurid))
       // sessionStorage.setItem('token',resultat.token);  
        
        
       }).catch((error) => {
        console.error(error);
      });
       }
 
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
      placeholder="Email" onChangeText={text => setEmail(text)}
      value={email}
    />             
       <TextInput style={CardStyle.input}
         secureTextEntry={true} 
         onChangeText={text => setPassword(text)}
         value={password}
       placeholder={"Mot de passe"}
    /> 
        <TouchableOpacity onPress={submit} ><Button style={CardStyle.btn} ><Text style={{letterSpacing: 2,
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