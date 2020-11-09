import React from "react";
import { ImageBackground, StyleSheet, Text, View, Button, Alert, SafeAreaView } from "react-native";

const App = () => (
<View style={styles.container}>
<ImageBackground source={require('./data.png')} style={styles.image}>
  <View>
      <Text style={styles.text}>Welcome</Text>
  </View>
	<View style={{flex: 1, alignSelf: "center", position: "absolute"}}>
		<Button
			title= "Log in"
			onPress={() => Alert.alert('Logging in...')}
		/>
	</View>
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
    backgroundColor: "#000000a0"
  }
});

export default App;