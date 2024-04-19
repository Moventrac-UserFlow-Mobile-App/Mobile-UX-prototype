//ForgotPassword

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; 

const ForgotPassword = () => {
  const word = "MOVENTRAC";
  const firstFourLetters = word.slice(0, 4);
  const restOfLetters = word.slice(4);

  const navigation = useNavigation(); 

  const handleResetPassword = () => {
    navigation.navigate("Welcome");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.blackText}>{firstFourLetters}</Text>
        <Text style={styles.grayText}>{restOfLetters}</Text>
      </View>

      <View style={styles.bodyContainer}>
        <Text style={styles.title}>Forgot Password</Text>
        <Text style={styles.description}>
          Enter your email address below to reset your password.
        </Text>
        <TextInput style={styles.input} placeholder="Email address" />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleResetPassword} 
        >
          <Text style={styles.buttonText}>Reset Password</Text>
        </TouchableOpacity>
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
    marginTop: 70,
    paddingVertical: 40,
    paddingHorizontal: 130,
    borderRadius: 5,
    background:
      "linear-gradient(90deg, rgba(2,0,36,0.5) 0%, rgba(117,145,205,0.5) 35%, rgba(0,212,255,0.5) 100%)",
  },
  bodyContainer: {
    flex: 1,
    // backgroundColor: "#3B444B",
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 2,
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
    marginBottom: 70,
    marginTop: 20,
    textAlign: "center",
    color: "#3700ff",
  },
  description: {
    marginBottom: 20,
    textAlign: "center",
    color: "white",
  },

  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#95A5A6",
  },

  buttonContainer: {
    width: "60%",
    backgroundColor: "#3498db",
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: "center",
    marginLeft: 70,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
  },
});

export default ForgotPassword;
