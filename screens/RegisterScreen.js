//RegisterScreen.js

import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons"; 

const RegisterScreen = () => {
  const word = "MOVENTRAC";
  const firstFourLetters = word.slice(0, 4);
  const restOfLetters = word.slice(4);

  const navigation = useNavigation();

  const handleSignIn = () => {
    navigation.navigate("Welcome");
  };

  const handleCreateAccount = () => {
    navigation.navigate("Home");
  };

  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked((prevState) => !prevState);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.blackText}>{firstFourLetters}</Text>
        <Text style={styles.grayText}>{restOfLetters}</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>Create Account</Text>
        <TextInput style={styles.input} placeholder="First Name" />
        <TextInput style={styles.input} placeholder="Email address" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry
        />
        <View style={styles.checkboxContainer}>
          <TouchableOpacity onPress={toggleCheckbox}>
                        <MaterialIcons
              name={isChecked ? "check-box" : "check-box-outline-blank"}
              size={24}
              color="black"
            />
          </TouchableOpacity>
          <Text style={styles.checkboxText}>I agree to the terms</Text>
        </View>

        <View style={styles.linkContainer}>
          <Text style={styles.account}>Have an Account?</Text>
          <TouchableOpacity onPress={handleSignIn}>
            <Text style={styles.signInText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(2,0,3,0.5)",
    borderRadius: 7,
  },
  titleContainer: {
    flexDirection: "row",
    marginTop: 20,
    paddingVertical: 40,
    paddingHorizontal: 130,
    borderRadius: 7,
  },
  blackText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
  grayText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#f2f2f2",
    textShadowColor: "#000000",
    textShadowOffset: { width: 1, height: -1 },
    textShadowRadius: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 50,
    marginTop: 20,
    textAlign: "center",
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: "#95A5A6",
    borderRadius: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    marginLeft: 35,
  },
  checkboxText: {
    marginLeft: 10,
    flex: 1,
  },
  signInText: {
    color: "#fff",
    textDecorationLine: "underline",
  },
  linkContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  account: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 45,
    marginRight: 20,
  },
  bodyContainer: {
    flex: 1,
    // backgroundColor: "#3B444B",
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 2,
  },
});

export default RegisterScreen;
