import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import{NavigationContainer} from '@react-navigation/native';
import Home from '../pages/home/Login';
import HomeScreen from '../pages/tabs/HomeScreen';
import Inscription from '../pages/Membres/Inscription';
import Proposer from '../pages/Membres/Proposer';
import Feed from '../pages/tabs/Feed';
import AjoutMembres from '../pages/Membres/AjoutMembre';
import Membres from '../pages/Membres/Membres';
import MaladieMembre from '../pages/home/MaladieMembre';


export default function Routes() {
  const Stack = createStackNavigator();""
    return(      
      <NavigationContainer>        
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown : false}}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="MaladieMembre" component={MaladieMembre} />  
        <Stack.Screen name="Inscription" component={Inscription} />
        <Stack.Screen name="AjoutMembres" component={AjoutMembres} />
        <Stack.Screen name="Proposer" component={Proposer} />
        <Stack.Screen name="Membre" component={Membres} />        
         
      </Stack.Navigator>         
      </NavigationContainer>
    );
};