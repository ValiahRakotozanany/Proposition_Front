import * as React from 'react';
import { Button, Checkbox, Text } from 'react-native-paper';
import { View } from 'react-native';
import CardStyle from '../Style/CardStyle';
const Membres = ({navigation}) => {
  const [checked, setChecked] = React.useState(false);

  return (
    <View>
    <Text>Membres de la famille</Text>
    <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
        <Button style={CardStyle.btn} onPress={() => navigation.navigate('Profile')} ><Text style={{letterSpacing: 2,
        color: 'white',
        fontFamily :'poppins-bold'
}}>Connexion</Text></Button> 

    </View>
  );
};

export default Membres;
