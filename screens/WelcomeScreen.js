import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
  const word = "MOVENTRAC";
  const firstFourLetters = word.slice(0, 4);
  const restOfLetters = word.slice(4);

  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate("Home");
  };

  const handleForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };

  const handleCreateAccount = () => {
    navigation.navigate("Register");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.titleContainer}>
          <Text style={styles.blackText}>{firstFourLetters}</Text>
          <Text style={styles.grayText}>{restOfLetters}</Text>
        </View>
        <View style={styles.bodyContainer}>
          <Text style={styles.firsttext}>Lorem ipsum dolor sit</Text>
          <Text style={styles.secondtext}>Ut enim ad minim veniam</Text>
          <View style={styles.loginContainer}>
            <Text style={styles.inputLabel}>Username</Text>
            <TextInput style={styles.input} placeholder="" value="" />
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder=""
              value=""
              secureTextEntry
            />
            {/* <View style={styles.buttonContainer}>
              <Button title="Login" onPress={handleLogin} />
            </View> */}
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={handleLogin}
            >
              <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>

            {/* Forgot password */}
            <TouchableOpacity onPress={handleForgotPassword}>
              <Text style={styles.linkText}>Forgot password?</Text>
            </TouchableOpacity>
            {/* Create an Account */}
            <TouchableOpacity onPress={handleCreateAccount}>
              <Text style={styles.linkText}>Create an Account</Text>
            </TouchableOpacity>
            
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(2,0,3,0.5)",
    background:
      "linear-gradient(90deg, rgba(2,0,36,0.5) 0%, rgba(117,145,205,0.5) 35%, rgba(0,212,255,0.5) 100%)",
    padding: 10,
    marginTop: 50,
  },
  titleContainer: {
    flexDirection: "row",
  },
  blackText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
  grayText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#515457",
  },
  firsttext: {
    marginStart: 20,
    marginBottom: 30,
    marginTop: 60,
    textTransform: "uppercase",
    fontSize: 18,
    color: "#fff",
  },
  secondtext: {
    marginTop: 15,
    textTransform: "uppercase",
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 30,
  },

  bodyContainer: {
    flex: 1,
    backgroundColor: "#3B444B",
    paddingHorizontal: 50,
    alignItems: "center",
  },
  loginContainer: {
    marginTop: 50,
    alignItems: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 100,
    borderRadius: 10,
    width: "100%",
    backgroundColor: "#95A5A6",
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 5,
    marginTop: 10,
    color: "#BFBFBF",
  },
  buttonContainer: {
    width: "80%",
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "#3498db",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    borderWidth: 2,
    borderColor: "#2980b9",
    width: 80,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
  },

  linkText: {
    color: "#007FFF",
    textDecorationLine: "underline",
    marginTop: 20,
  },
});

export default WelcomeScreen;
