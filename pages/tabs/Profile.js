import * as React from 'react';
import { Checkbox, Text } from 'react-native-paper';
import { View } from 'react-native';
const Profile =  ({  navigation ,route})  => {
  const [checked, setChecked] = React.useState(false);
  const [data, setData] = React.useState([]);
  const token = route.params.token;

  React.useEffect(() => {
    console.log("usee");
    console.log("token '"+token+"'");
    fetch('http://26.22.221.140:8001/tiatanindrazana/Ingredient_Interdit',    
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

  return (
    <View>
{data.map((ingredient) => (
        <View key={ingredient.idingredientmaladie}>
          <Text>{ingredient.ingredient}</Text>
          <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
        </View>
      ))}
    <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
    </View>
  );
};

export default Profile;


/*    <CheckBox
            value={ingredient.selected}
            onValueChange={(newValue) => {
              // Mettez à jour la valeur sélectionnée dans l'état local ou envoyez une requête pour mettre à jour le serveur
              // Vous pouvez gérer cette partie en fonction de vos besoins
            }}
          />
       */