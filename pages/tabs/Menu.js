import * as React from 'react';
import { Text } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import Profile from './Profile';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../home/Login';
import Membres from '../Membres/Membres';
import Accueil from '../home/Accueil';
import Proposer from '../Membres/Proposer';
import AjoutMembres from '../Membres/AjoutMembre';
import MaladieMembre from '../home/MaladieMembre';
import AjoutMaladieM from '../Membres/AjoutMaladieM';

const Drawer = createDrawerNavigator();
const Menuu = (props) => {
 const token = props.token;
  console.log("token menu = "+token)
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator>     
      <Drawer.Screen name='Accueil' component={Accueil} initialParams={{ token: token }}/>    
     <Drawer.Screen name='Membres' component={Membres}  initialParams={{ token: token }}/>        
     <Drawer.Screen name='Profile' component={Profile}    initialParams={{ token: token }}/> 
     <Drawer.Screen name='Proposer' component={Proposer}   initialParams={{ token: token }}/> 
     <Drawer.Screen name='AjoutMembres' component={AjoutMembres}   initialParams={{ token: token }}/> 
     <Drawer.Screen name='MaladieMembre' component={MaladieMembre}   initialParams={{ token: token }}  options={{ title: 'Details du membre' }}/> 
     <Drawer.Screen name='AjoutMaladieM' component={AjoutMaladieM}   initialParams={{ token: token }}/> 
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Menuu;


/*<Drawer.Section title="Some title">
        <Drawer.Itemr
     style={{ backgroundColor: '#64ffda' }}
     icon="star"
     label="First Item"
   />   
      <Drawer.Item
        label="First Item"
        //active={active === 'first'}
  //      onPress={() => setActive('first')}
      />
      <Drawer.Item
        label="Second Item"
      //  active={active === 'second'}
    //    onPress={() => setActive('second')}
      />
    </Drawer.Section>*/