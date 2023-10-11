import * as React from 'react';
import { Checkbox, Text } from 'react-native-paper';
import { View } from 'react-native';
const Profile =  ({  navigation })  => {
  const [checked, setChecked] = React.useState(false);

  return (
    <View>

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