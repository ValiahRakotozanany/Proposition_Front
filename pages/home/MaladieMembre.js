import { View, Text,Animated  } from 'react-native'
import React from 'react'
import StyleFeed from '../tabs/style'
import { FakeData } from '../../data/FakeData'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { Button } from 'react-native-paper'
import CardStyle from '../Style/CardStyle'
import LinearGradient from 'react-native-linear-gradient';
import Bouton from './Bouton'
import Proposer from '../Membres/Proposer'

const MaladieMembre = ({navigation,route}) => {
  const [data, setData] = React.useState([]);
  const [dataMembre, setDataMembre] = React.useState([]);
  const token = route.params.token;

  const [isCollapsed, setIsCollapsed] = React.useState(true);
  const [idmembre, setIdmembre] = React.useState(true);
  const animation = React.useRef(new Animated.Value(0)).current;

  const toggleCollapse = (id) => {
    setIdmembre(id);
    const toValue = isCollapsed ? 1 : 0;
    Animated.timing(animation, {
      toValue,
      duration: 300, // Durée de l'animation en millisecondes
      useNativeDriver: false, // Utilisation du pilote natif pour l'animation
    }).start();
    setIsCollapsed(!isCollapsed);


    fetch('http://26.22.221.140:8087/tiatanindrazana/MaladieMembre?idmembre='+idmembre,    
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
        setDataMembre(resultat['data']);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des données:', error);
      });

  };



  const panelHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 200], // Hauteur maximale du panneau
  });

  React.useEffect(() => {
    console.log("usee");
    console.log("token '"+token+"'");
    fetch('http://26.22.221.140:8087/tiatanindrazana/Membre_Famille',    
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
        setData(resultat['data']);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des données:', error);
      });
  }, []);


    const handlePress = () => {
        console.log('Bouton cliqué !');
      };
  return (
    <View >
      {/* <Button style={CardStyle.btn2} onPress={() => navigation.navigate('Proposer',data )} ><Text style={{letterSpacing: 1,
        color: 'white',fontFamily :'poppins-bold',fontWeight:'bold', alignItems: 'center',
}}>Proposer + </Text></Button>  */}
<Bouton title='Proposition' onPress={() => navigation.navigate('Proposer')} />
      <FlatList vertical={true} style={StyleFeed.scrollableList} showsHorizontalScrollIndicator={false} keyExtractor={item =>item.id} renderItem={({item}) =>{ 
        return (<TouchableOpacity style={StyleFeed.scrollableListitem}>
                  <Text ><Text style={{fontWeight : 'bold'}}>{item.prenom}</Text> {item.nom}</Text>                   
                  <Button title="Détails"
        onPress={() => navigation.navigate('MaladieMembre', { item })} // Naviguer vers les détails avec l'élément en tant que paramètre
      />
                  <Animated.View style={{ height: panelHeight, overflow: 'hidden' }}>
                  MaladieMembre
                   <Text>{item.prenom}                  
                     </Text>
                 </Animated.View>            
            </TouchableOpacity>
            
            )}}
     data={data}/>
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