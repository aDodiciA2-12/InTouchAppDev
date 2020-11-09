import React from "react";
import { ImageBackground, StyleSheet, Text, View, Button, Alert } from "react-native";

const App = () => (
  <View style={styles.container}>
    <ImageBackground source={require('./data.png')} style={styles.image}>
      <Text style={styles.text}></Text>
	  <Button
	  title= "Log in"
	  onPress={() => Alert.alert('Logging in...')}
	  />
    </ImageBackground>
  </View>
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
  }
});

export default App;