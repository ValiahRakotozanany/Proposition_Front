import * as React from 'react';
import { Button, Card, Checkbox, Text } from 'react-native-paper';
import { ImageBackground, TouchableOpacity, View } from 'react-native';
import CardStyle from '../Style/CardStyle';
import { TextInput } from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';
const AjoutMembres = () => {
  
  const [date, setDate] = React.useState(new Date());
  const [showPicker, setShowPicker] = React.useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(false);
    setDate(currentDate);
  };

  return (
    <>
      <Button title="Select Date" onPress={() => setShowPicker(true)} />
      {showPicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
    </>
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
