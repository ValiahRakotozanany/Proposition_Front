import * as React from 'react';
import { Text } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import Profile from './Profile';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../home/Login';
import Membres from '../Membres/Membres';
import Accueil from '../home/Accueil';
import Proposer from '../Membres/Proposer';

const Drawer = createDrawerNavigator();
const Menuu = () => {
  
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator>     
      <Drawer.Screen name='Accueil' component={Accueil}/>    
     <Drawer.Screen name='Membres' component={Membres}/>        
     <Drawer.Screen name='Profile' component={Profile}/> 
     <Drawer.Screen name='Proposer' component={Proposer}/> 
     
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