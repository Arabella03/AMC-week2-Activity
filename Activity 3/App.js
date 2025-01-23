import React from 'react';
import {Text,StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';


const BoldAndBeautiful = () => (
<SafeAreaProvider>
 <SafeAreaView style={styles.container}>
  <Text style={styles.baseText}>
   Dela Cruz 
   <Text style ={styles.innerText}> I am arabella Joy Dela cruz currently studying at Global Reciprocal Colleges as an Bsit student.</Text>
   </Text> 
   </SafeAreaView>
   </SafeAreaProvider>
);

const styles = StyleSheet.create({
container: {
flex: 1, 
}, 
baseText: {
color: 'red',
fontWeight: 'bold'


},
innerText:{
color: 'blue',
},
});
export default BoldAndBeautiful;

