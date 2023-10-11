import React from 'react';
import {View, ImageBackground,Animated} from 'react-native';
import { Text } from 'react-native-paper';
//import  from 'react-native-reanimated';



const backgrounds = [
  require('../../assets/food-with-ingredients-min.jpg'),
  require('../../assets/five.jpg'),
  require('../../assets/back1-min.jpg'),  
  require('../../assets/4.jpg'),
  require('../../assets/two.jpg'),
  // Ajoutez ici les chemins de vos images de fond supplémentaires
];

const Background = ({ children }) => {
  const [randomIndex, setRandomIndex] = React.useState(0);
  const scrollValue = new Animated.Value(0);

  React.useEffect(() => {
    const changeBackground = () => {
      const random = Math.floor(Math.random() * backgrounds.length);
      setRandomIndex(random);
    };

    const interval = setInterval(changeBackground, 5000);

    return () => clearInterval(interval);
  }, []);

  
  return (
    <View>
    <ImageBackground source={backgrounds[randomIndex]}
     style={{ height: '100%' }} />
    <View style={{ position: "absolute" }}>
      {children}
    </View>
  </View>
  );
}
//
export default Background;

