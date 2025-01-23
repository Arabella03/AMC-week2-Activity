import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <Text><center> Arabella Joy Dela Cruz</center></Text>
      <View>
        <Text><center>IT 302 </center></Text>
        <Image 
          source={{
            uri:'https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpgdev/docs/assets/p_any.jpg',
        }} 
         
style={{ width: 200, height: 200 }}
        />
      </View>
      <TextInput
        style={{

          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          justifyContent: 'center',
          alignItems: 'center'
       
        }}
        
defaultValue= "You can type in me"
      />
    </ScrollView>
  );
};

export default App;

