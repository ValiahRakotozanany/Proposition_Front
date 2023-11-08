import * as React from 'react';
import { Button, Card, Checkbox, Text } from 'react-native-paper';
import { ImageBackground, TouchableOpacity, View } from 'react-native';
import CardStyle from '../Style/CardStyle';
import { TextInput } from 'react-native-gesture-handler';
import DatePicker from 'react-native-date-picker';
import { useRoute } from '@react-navigation/native';
const AjoutMembres = () => {
  const route = useRoute();  
  const [date, setDate] = React.useState();
  const [data, setData] = React.useState();
  const [datefin, setDatefin] = React.useState(new Date());
  const [showPicker, setShowPicker] = React.useState(false);
  const [openDatefin, setOpenDatefin] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState(null);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(false);
    setDate(currentDate);
  };
  const {token} = route.params;
  const [nom, setNom] = React.useState();
  const [prenom, setPrenom] = React.useState();


  const ajoutmembre = () => {
  //  setIdmembre(id);
    // const toValue = isCollapsed ? 1 : 0;
    // Animated.timing(animation, {
    //   toValue,
    //   duration: 300, // Durée de l'animation en millisecondes
    //   useNativeDriver: false, // Utilisation du pilote natif pour l'animation
    // }).start();
    // setIsCollapsed(!isCollapsed);
    console.log(datefin.getFullYear()+'-'+datefin.getMonth(0)+'-'+datefin.getDate());
const d = datefin.getDate()+'-'+datefin.getMonth(0)+'-'+datefin.getFullYear();

   fetch('http://26.22.221.140:8001/proposition/Membre_Famille?nom='+nom+'&prenom='+prenom+'&datenaissance='+d,    
    {
      method:"POST",      
      headers : {"Content-Type":"application/json",
      "Authorization": `Bearer ${token}`,}
      
    //  body: JSON.stringify({"email":email,"motdepasse":password})
    })
      .then((response) => {return response.json()})
      .then((resultat) => {
        // Mettez à jour l'état avec les données obtenues
        console.log(resultat);
        setData(resultat['data']);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des données:', error);
      });

  };


  return (
    <View>                 
    <ImageBackground source={require("../../assets/backp.jpg")}
     style={{ height: '100%' }} />
    <View style={{ position: "absolute" }}>    
      <View style={CardStyle.container}>
    <Text style={{ color: 'white', fontSize: 64 ,fontWeight : 'bold'}}></Text>
    <Text style={{ color: 'white', fontSize:25 , marginBottom: 40,fontWeight:'bold', letterSpacing: 4 }}>Ajout Membre<Text style={{color:'black'}}></Text></Text>    
                          
    </View>
       <Card style={CardStyle.card}>
       <Card.Content>          
       
       <TextInput style={CardStyle.input} 
      placeholder="Nom" onChangeText={text => setNom(text)}
      value={nom}
    />             
       <TextInput style={CardStyle.input}
      
       placeholder={"Prenom"}
       onChangeText={text => setPrenom(text)}
       value={prenom}
    /> 
    
    <Button onPress={() => setOpenDatefin(true)} style={CardStyle.input}><Text>Date : {datefin ? datefin.getUTCFullYear()+'/'+datefin.getMonth()+'/'+datefin.getDate() : 'Aucune date '}</Text></Button>
 <DatePicker
     modal
     mode="date"
     open={openDatefin}
     date={datefin || new Date()}
     title={'Sélectionner une date'}
     onConfirm={(date) => {
       setOpenDatefin(false);
       setDatefin(date);
     }}
     onCancel={() => {
       setOpenDatefin(false);
     }}
     minimumDate={date}
     confirmText="Confirmer"
     cancelText="Annuler"
   />

<TouchableOpacity ><Button style={CardStyle.btn} onPress={ajoutmembre}><Text style={{letterSpacing: 2,
        color: 'white',
        fontFamily :'poppins-bold', textAlign: 'center' ,
}}>Ajouter membre</Text></Button></TouchableOpacity> 
    </Card.Content>
</Card>
    </View>

    </View>
  );/*
  
  const handleDateChange = (newDate) => {
    setDate(newDate);
  };
  return (
    <View>
    <ImageBackground source={require("../../assets/back1.jpg")}
     style={{ height: '100%' }} />
    <View style={{ position: "absolute" }}>    
      <View style={CardStyle.container}>
    <Text style={{ color: 'white', fontSize: 64 ,fontWeight : 'bold'}}></Text>

    <Text style={{ color: 'white', fontSize: 20 ,fontWeight : 'bold'}}></Text>
      <Text style={{ color: 'white', fontSize: 30, marginBottom: 40,fontWeight:'bold', letterSpacing: 5 }}>Ajout Membres<Text style={{color:'black'}}></Text></Text>
     
      {/* <IconButton icon={'account'} iconColor={'red'} /> }                
    </View>
       <Card style={CardStyle.card}>
       <Card.Content>   
       <Text style={{ color: 'grey', fontSize: 20, marginBottom: 10,fontWeight:'bold', letterSpacing: 3,justifyContent:'center' ,textAlign:'center' }}></Text>
       <TextInput style={CardStyle.input} 
      placeholder="Nom"
    />             
       <TextInput style={CardStyle.input}
         secureTextEntry={true}
       placeholder={"Prenom"}
    /> 


<Text>Sélectionnez votre date de naissance:</Text>
<DatePicker
        style={{ width: 200 }}
        date={date}
        mode="date"
        placeholder="Sélectionnez une date"
        format="YYYY-MM-DD"
        minDate="2000-01-01"
        maxDate="2030-12-31"
        confirmBtnText="Valider"
        cancelBtnText="Annuler"
        onDateChange={handleDateChange}
      />      
        <TouchableOpacity ><Button style={CardStyle.btn} ><Text style={{letterSpacing: 2,
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
  
  );*/
};

export default AjoutMembres;
