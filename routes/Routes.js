import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import{NavigationContainer} from '@react-navigation/native';
import Home from '../pages/home/Login';
import HomeScreen from '../pages/tabs/HomeScreen';
import Inscription from '../pages/Membres/Inscription';
import Proposer from '../pages/Membres/Proposer';
import Feed from '../pages/tabs/Feed';
import AjoutMembres from '../pages/Membres/AjoutMembre';
import MaladieMembre from '../pages/home/MaladieMembre';
import AjoutMaladieM from '../pages/Membres/AjoutMaladieM';
import Proposition from '../pages/home/Proposition';
import DetailsProposition from '../pages/home/DetailsProposition';
import PropositionPlan from '../pages/home/PropositionPlan';


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
        <Stack.Screen name="Proposition" component={Proposition} />        
        <Stack.Screen name="AjoutMaladieM" component={AjoutMaladieM} />   
        <Stack.Screen name="DetailsProposition" component={DetailsProposition} /> 
        <Stack.Screen name="PropositionPlan" component={PropositionPlan} /> 
      </Stack.Navigator>         
      </NavigationContainer>
    );
};