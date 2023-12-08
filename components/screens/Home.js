// HomeScreen.js

import React, { useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { UserContext } from "../contexts/UserContext";

const Home = ({ navigation }) => {
  const { user, cleanUser } = useContext(UserContext);

  const goProductsHandler = () => {
    navigation.navigate("Products");
  };

  const LogoutHandler = () => {
    cleanUser();
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome back, {user.username}!</Text>
      <Button title="Go to Products" onPress={goProductsHandler} />
      <Button title="Go to Login" onPress={LogoutHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default Home;
