import { View, Text ,TouchableOpacity } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feed from './Feed';
import Profile from './Profile';


const HomeScreen = ({  route ,navigation }) => {
  const { param1, param2 } = route.params || {};
  
const Tab = createMaterialBottomTabNavigator();
  return (
    // <Text>Paramètre 1 : {param1}</Text>
    // <Text>Paramètre 2 : {param2}</Text>  
      <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#e91e63"
//      activeColor="#f0edf6"
  inactiveColor="#3e2465"

      barStyle={{ backgroundColor: 'white' }}
    >       
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />    
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
          
  );
};

export default HomeScreen