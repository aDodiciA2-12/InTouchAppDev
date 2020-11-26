import React, {Component} from 'react';
import { ImageBackground, StyleSheet, Text, View, Button, Alert, SafeAreaView, AppRegistry, Navigator } from "react-native";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';


const App = () => (
<NavigationContainer>
<View style={styles.container}>
<ImageBackground source={require('./data.png')} style={styles.image}>
	<View style={styles.button2}>
		<Button 
			title= "Log In"
			onPress={() => Alert.alert('Logging in...')}
		/>
	</View>
	<View style={styles.button1}>
		<Button 
			title= "Sign Up"
			onPress={() => Alert.alert('Signing up...')}
		/>
	</View>
</ImageBackground>
</View>
</NavigationContainer>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    //backgroundColor: "#000000a0"
  },
  button1: {
	  flex: 1,
	  paddingBottom: 100,
	  justifyContent: "flex-end"
  },
  button2: {
	  flex: 1,
	  paddingTop: 575,
	  justifyContent: "flex-end"
  }
});

export default App;