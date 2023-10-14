import { View, Text,Animated  } from 'react-native'
import React,{useEffect} from 'react'
import StyleFeed from '../tabs/style'
import { FakeData } from '../../data/FakeData'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { Button } from 'react-native-paper'
import CardStyle from '../Style/CardStyle'
import LinearGradient from 'react-native-linear-gradient';
import Bouton from './Bouton'
import Proposer from '../Membres/Proposer'

const MaladieMembre = ({navigation,route}) => {

  const{item,token} =  route.params;
 // const token = route.params.token;
  const [data,setData] = React.useState([]);
  const [isCollapsed, setIsCollapsed] = React.useState(true);
  const [idmembre, setIdmembre] = React.useState(true);
  const animation = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    console.log("membre"+item.id);
    console.log("token '"+token+"'");
    fetch('http://26.22.221.140:8087/tiatanindrazana/MaladieMembre?idmembre='+item.id,    
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
      <View style={{backgroundColor:'white',alignContent:'center', alignItems:'center' }}>
       <Text style={{ color: 'black', fontSize:20 ,fontWeight:'bold', letterSpacing: 2,alignContent:'center', alignItems:'center'}}>{item.prenom}<Text style={{color:'grey'}}> {item.nom}</Text></Text>
       <Text style={{ color: 'black', fontSize:10 , marginBottom: 10, letterSpacing: 2}}>Date de naissance : {item.datenaissance}<Text style={{color:'black'}}></Text></Text>
       
   <TouchableOpacity  style={{width:100,height:50,marginLeft:250 ,marginTop:8}}>      
      <LinearGradient      
        colors={['#f89b29','#bf0fff']} // Couleurs du gradient
        start={{ x: 0, y: 0 }} // Point de départ du gradient (en pourcentage)
        end={{ x: 1.3, y: 0 }} // Point d'arrêt du gradient (en pourcentage)
         style={{ padding: 10 ,borderWidth:1,borderRadius: 100 ,borderColor:'#d8dbe9'}} // Styles du gradient
>   

    <Text style={{ color: 'white', textAlign: 'center' ,fontWeight:'bold',fontFamily:'poppins'}}>Ajout +</Text>
      </LinearGradient>      
    </TouchableOpacity>   
    </View>
    <Text></Text>   
    {Array.isArray(data) && data.map((item) => (
  <View key={item.id} style={StyleFeed.scrollableListitem}>
    <View>
      <Text style={{ color: 'black', fontSize: 15, letterSpacing: 0.5 }}>
        {item.maladie}
        
      </Text><Text style={{ color: 'grey' }}>{item.etatlib} </Text>
    </View>
  </View>
))}

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