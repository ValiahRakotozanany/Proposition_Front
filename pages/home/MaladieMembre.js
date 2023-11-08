import { View, Text,Animated  } from 'react-native'
import React,{useEffect} from 'react'
import StyleFeed from '../tabs/style'

import { TouchableOpacity } from 'react-native-gesture-handler'
import { Button } from 'react-native-paper'
import CardStyle from '../Style/CardStyle'
import LinearGradient from 'react-native-linear-gradient';
import Modal from 'react-native-modal';
import {Dropdown} from 'react-native-element-dropdown';
const MaladieMembre = ({navigation,route}) => {
  const select = [
    { label: 'Intolérance', value: '2' },
    { label: 'Maladie', value: '1' },
  ];
  const{item,token,dataMembre} =  route.params;
console.log(select+"  SLEEECCTTT");
 // const token = route.params.token;
 const [country, setCountry] = React.useState(null);
 const [isFocus, setIsFocus] = React.useState(false);
  const [data,setData] = React.useState([]);
  const [isCollapsed, setIsCollapsed] = React.useState(true);
  const [idmembre, setIdmembre] = React.useState(true);
  const animation = React.useRef(new Animated.Value(0)).current;
  console.log(dataMembre);
  const da = dataMembre['data'];
  console.log(da+" daaaaaaa");
  const [modalVisible, setModalVisible] = React.useState(false);
  const [countryData, setCountryData] = React.useState([]);
  const [maladie, setMaladie] = React.useState([]);
  const showModal = () => {
    setModalVisible(true);
    fetch('http://26.22.221.140:8001/proposition/Maladie',    
    {
      method:"GET",      
      headers : {"Content-Type":"application/json", 
      "Authorization": `Bearer ${token}`,}
      
    //  body: JSON.stringify({"email":email,"motdepasse":password})
    })
      .then((response) => {return response.json()})
      .then((resultat) => {
        // Mettez à jour l'état avec les données obtenues
        console.log(resultat);
        setMaladie(resultat.data);
        const transformedData = maladie.map(item => ({
          label: item.maladie,
          value: item.id
       }));       
       console.log(transformedData+"transforme");
       setCountryData(transformedData);
       console.log(countryData+" maladiiie");
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des données:', error);
      });
  };
  React.useEffect(() => {
    console.log("usee");
    console.log("token '"+token+"'");
   
  }, []);

  const hideModal = () => {
    setModalVisible(false);
  };
  const ajouter=()=>{
    fetch('http://26.22.221.140:8001/proposition/Maladie?idmembre='+item.id+'&idmaladie='+country,    
    {
      method:"POST",      
      headers : {"Content-Type":"application/json",
      "Authorization": `Bearer ${token}`,}
      
    //  body: JSON.stringify({"email":email,"motdepasse":password})
    })
      .then((response) => {return response.json()})
      .then((resultat) => {
        console.log(country);
        // Mettez à jour l'état avec les données obtenues
        console.log(resultat);
       
       console.log(resultat+" resultat");
        console.log("ajouté");
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des données:', error);
      });
      setModalVisible(false);
  }


  const panelHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 200], // Hauteur maximale du panneau
  });

    const handlePress = () => {
        console.log('Bouton cliqué !');
      };
  return (
    <View>
      <Text></Text>
      <View style={{backgroundColor:'white'}}>
       <Text style={{ color: 'black', fontSize:20 ,fontWeight:'bold', letterSpacing: 2,alignContent:'center', alignItems:'center'}}>   {item.prenom}<Text style={{color:'grey'}}> {item.nom}</Text></Text>
       <Text style={{ color: 'black', fontSize:10 , marginTop: 12, letterSpacing: 2}}>    {item.datenaissance}<Text style={{color:'black'}}></Text></Text>
       
   <TouchableOpacity  style={{width:100,height:50,marginLeft:250 ,marginTop:8}}  onPress={showModal}>      
      <LinearGradient      
        colors={['#f89b29','#bf0fff']} // Couleurs du gradient
        start={{ x: 0, y: 0 }} // Point de départ du gradient (en pourcentage)
        end={{ x: 1.3, y: 0 }} // Point d'arrêt du gradient (en pourcentage)
         style={{ padding: 10 ,borderWidth:1,borderRadius: 100 ,borderColor:'#d8dbe9'}} // Styles du gradient
        >   

    <Text style={{ color: 'white', textAlign: 'center' ,fontWeight:'bold',fontFamily:'poppins'}}>Maladie +</Text>
      </LinearGradient>      
    </TouchableOpacity>   
    </View>
    <Text></Text>   
    {dataMembre.map((item) => (
  <View key={item.id} style={StyleFeed.scrollableListitem}>
    <View>
      <Text style={{ color: 'black', fontSize: 15, letterSpacing: 0.5 }}>
        {item.maladie}  
        
      </Text><Text style={{ color: 'grey' }}>{item.etatlib} </Text>
      <TouchableOpacity style={{marginLeft:250}}><Text> ❌ </Text></TouchableOpacity>
    </View>
  </View>
))}


<Modal
     isVisible={modalVisible}   
     animationInTiming={300}
     onBackdropPress={hideModal}  
     backdropTransitionOutTiming={1}
     animationIn="fadeIn"
     animationOut="fadeOut"
     animationOutTiming={1}
     swipeDirection="down"     
     backdropTransitionInTiming={1}
     style={{}}>
        <View style={{ flex: 1, backgroundColor: 'white',padding:20,borderRadius:18 }}>
        <Text style={{ color: 'black',alignItems: 'center', fontSize: 25 ,fontWeight : 'bold' , marginTop:5}}>Maladies</Text>

        <Text style={{ color: 'black',alignItems: 'center', fontSize: 5 , marginTop:5}}></Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
           </View> 
   <Dropdown
          style={[CardStyle.dropdown, isFocus && {borderColor: 'blue'}]}
          placeholderStyle={CardStyle.placeholderStyle}
          selectedTextStyle={CardStyle.selectedTextStyle}
          inputSearchStyle={CardStyle.inputSearchStyle}
          iconStyle={CardStyle.iconStyle}
          data={countryData}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select Maladie' : '...'}
          searchPlaceholder="Search..."
          value={country} 
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setCountry(item.value);
            setIsFocus(false);
          }}
        />
      
    <View style={{flexDirection: 'row', marginTop:20}}>
        
    <Button onPress={ajouter} style={{}}>Ajouter</Button><Button onPress={hideModal}>Annuler</Button>

        </View>
        </View>
      </Modal>
      {/*// justifyContent: 'center', <Button style={StyleFeed.userName}   onPress={() => navigation.navigate('Menu')} >Menu</Button>
      <Image source={require('../../assets/crevette.jpg')} style={StyleFeed.userImg} /> */}    

    </View>


  )
}

export default MaladieMembre
/*
<TouchableOpacity style={StyleFeed.scrollableListitem}>
                  <TouchableOpacity  onPress={() => toggleCollapse(item.id)} ><Text ><Text style={{fontWeight : 'bold'}}>{item.prenom}</Text> {item.nom}</Text>  
                  </TouchableOpacity>  
                  <Animated.View style={{ height: panelHeight, overflow: 'hidden' }}>
                   <Text>{item.prenom} 
                   <FlatList vertical={true} keyExtractor={itemM =>itemM.id} renderItem={({itemM}) =>{ 
                     return ( <Text>{itemM.maladie}</Text>)}}  />
                     </Text>
                 </Animated.View>            
            </TouchableOpacity>
            */

        