import { View, Text } from 'react-native'
import React from 'react'
import StyleFeed from '../tabs/style'
import { FakeData } from '../../data/FakeData'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { Button } from 'react-native-paper'
import CardStyle from '../Style/CardStyle'
import LinearGradient from 'react-native-linear-gradient';
import { useRoute } from '@react-navigation/native';
import Bouton from './Bouton'

const DetailsProposition = ({navigation}) => {

  const route = useRoute();  
  const {token, details} = route.params;
  console.log(details+" detailss")
    const handlePress = () => {
        console.log('Bouton cliqué !');
      };
      return (
        <View>
        {/* <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}//{propp.valeurenfant * propp.unite} {propp.unite}
        /> */}
    <Bouton title='retour' titre='Recettes'  onPress={() => navigation.navigate('Proposition',{token: token})} />
   

            {details && details.map((item,index) => (
            <View style={StyleFeed.scrollableListitem}>
               <ScrollView style={{}}>
                <View key={index}>                      
                <View style={{backgroundColor:'#c3f4ff', borderBottomRightRadius:15,borderBottomLeftRadius:15}}>
                <Text style={{fontSize:3}}> </Text>              
                  <Text>{item.val}</Text>
                  <Text style={{ color: 'black', marginTop:10,fontSize:16 ,fontWeight:'bold',marginBottom:5,  letterSpacing:0 ,backgroundColor:'#c3f4ff'}}> {item.nomplats}   
                    -  {item.totalprix} Ar </Text>             
                    <Text style={{fontSize:5}}> </Text>              
                 </View>
                  {item.ingredients.map((propp,ind)=>(
                    <ScrollView style={{}}>                      
                    
                    <Text key={ind} style={{ color: 'black', fontSize:12 ,fontWeight:'',  letterSpacing: 1 }}>{propp.ingredient} - {propp.valeurenfant} {propp.unite} x ({item.nbr}) ={Number.isInteger(parseInt(item.nbr, 10)) && Number.isInteger(parseInt(propp.valeurenfant, 10)) ? parseInt(item.nbr, 10) * parseInt(propp.valeurenfant, 10) : 0} {propp.unite}
                    
                    </Text> 
                    <Text style={{color:'grey', fontSize:11}}>{propp.ETATINGREDIENT_LIB}</Text>
                    {propp.remarque !== '0' && (
                      <Text>{propp.remarque}</Text>
                      )}
                    <Text style={{color:'grey'}}></Text> 
                    </ScrollView>               
                    ))}
                  <Text style={{ color: 'black', fontSize:15 ,fontWeight:'bold',  letterSpacing: 2 }}>{}<Text style={{color:'grey'}}>   {}</Text>            
                </Text>
                <View>              
                <TouchableOpacity style={{marginLeft:250,flexDirection:'right'}}><Text>  🖊️</Text></TouchableOpacity>
                </View>
              </View>     
               </ScrollView>    
        </View>
                  
                  
                  ))} 
                  <Text style={{ color: 'white', fontSize: 80, marginBottom: 40,fontWeight:'bold', letterSpacing: 5 }}><Text style={{color:'black'}}> </Text></Text>
                  
        </View>
      );
}

export default DetailsProposition