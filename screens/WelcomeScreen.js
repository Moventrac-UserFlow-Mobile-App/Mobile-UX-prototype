// //WelcomeScreen.js

// import React from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   ScrollView,
//   Image,
//   TextInput,
//   // TouchableOpacity,
//   SafeAreaView,
//   ImageBackground,
// } from "react-native";
// import { useNavigation } from "@react-navigation/native";

// const WelcomeScreen = () => {
//   const word = "MOVENTRAC";
//   const firstFourLetters = word.slice(0, 4);
//   const restOfLetters = word.slice(4);

//   const navigation = useNavigation();

//   const handleLogin = () => {
//     navigation.navigate("Home");
//   };

//   const handleForgotPassword = () => {
//     navigation.navigate("ForgotPassword");
//   };

//   const handleCreateAccount = () => {
//     navigation.navigate("Register");
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
//         <ImageBackground
//           source={{
//             uri: "https://moventrac.fi/____impro/1/onewebmedia/i287104489311526234.jpg?etag=%2255738-63693ba4%22&sourceContentType=image%2Fpng&quality=85",
//           }}
//           style={styles.backgroundImage}
//           resizeMode="cover"
//         >
//           <View style={styles.titleContainer}>
//             <Text style={styles.blackText}>{firstFourLetters}</Text>
//             <Text style={styles.grayText}>{restOfLetters}</Text>
//           </View>
//           <View style={styles.bodyContainer}>
//             <Text style={styles.firsttext}>Lorem ipsum dolor sit</Text>
//             <Text style={styles.secondtext}>Ut enim ad minim veniam</Text>
//             <View style={styles.loginContainer}>
//               <Text style={styles.inputLabel}>Username</Text>
//               <TextInput style={styles.input} placeholder="" value="" />
//               <Text style={styles.inputLabel}>Password</Text>
//               <TextInput
//                 style={styles.input}
//                 placeholder=""
//                 value=""
//                 secureTextEntry
//               />
//               <TouchableOpacity
//                 style={styles.buttonContainer}
//                 onPress={handleLogin}
//               >
//                 <Text style={styles.buttonText}>LOGIN</Text>
//               </TouchableOpacity>
//               <TouchableOpacity onPress={handleForgotPassword}>
//                 <Text style={styles.linkText}>Forgot password?</Text>
//               </TouchableOpacity>
//               <TouchableOpacity onPress={handleCreateAccount}>
//                 <Text style={styles.linkText}>Create an Account</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </ImageBackground>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   backgroundImage: {
//     flex: 1,
//     resizeMode: "cover",
//     justifyContent: "center",
//   },
//   titleContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 30,
//   },
//   blackText: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "black",
//   },
//   grayText: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#f2f2f2",
//     textShadowColor: "black", // Add black outline
//     textShadowOffset: { width: 1, height: 1 },
//   },
//   firsttext: {
//     marginStart: 20,
//     marginBottom: 20,
//     marginTop: 30,
//     textTransform: "uppercase",
//     fontSize: 18,
//     color: "#fff",
//   },
//   secondtext: {
//     marginTop: 15,
//     textTransform: "uppercase",
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#fff",
//   },
//   bodyContainer: {
//     paddingHorizontal: 50,
//     alignItems: "center",
//   },
//   loginContainer: {
//     marginTop: 50,
//     alignItems: "center",
//   },
//   input: {
//     height: 40,
//     borderColor: "gray",
//     borderWidth: 1,
//     marginBottom: 20,
//     paddingHorizontal: 100,
//     borderRadius: 10,
//     width: "100%",
//     backgroundColor: "#95A5A6",
//   },
//   inputLabel: {
//     fontSize: 16,
//     marginBottom: 5,
//     marginTop: 10,
//     color: "#706f6f",
//   },
//   buttonContainer: {
//     width: "80%",
//     marginTop: 20,
//     borderRadius: 10,
//     backgroundColor: "#3498db",
//     justifyContent: "center",
//     alignItems: "center",
//     height: 40,
//     borderWidth: 2,
//     borderColor: "#2980b9",
//     width: 80,
//   },
//   buttonText: {
//     fontSize: 16,
//     color: "#fff",
//   },
//   linkText: {
//     color: "#007FFF",
//     textDecorationLine: "underline",
//     marginTop: 20,
//   },
// });

// export default WelcomeScreen;


import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient"; // Import LinearGradient

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
        <LinearGradient
          colors={[
            "#3c5240",
            "#506e4d",
            "#698b59",
            "#88a862",
            "#acc569",
            "#b8b95d",
            "#c2ac56",
            "#c99f53",
            "#a26e47",
            "#704539",
            "#3a2425",
            "#000000",
          ]}
          style={styles.backgroundGradient}
        >
          {/* <ImageBackground
//           source={{
//             uri: "https://moventrac.fi/____impro/1/onewebmedia/i287104489311526234.jpg?etag=%2255738-63693ba4%22&sourceContentType=image%2Fpng&quality=85",
//           }}
//           style={styles.backgroundImage}
//           resizeMode="cover"
//         > */}
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
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={handleLogin}
              >
                <Text style={styles.buttonText}>LOGIN</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleForgotPassword}>
                <Text style={styles.linkText}>Forgot password?</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleCreateAccount}>
                <Text style={styles.linkText}>Create an Account</Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundGradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 1, height: 1 },
  },
  firsttext: {
    marginStart: 20,
    marginBottom: 20,
    marginTop: 30,
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
  },
  bodyContainer: {
    paddingHorizontal: 50,
    alignItems: "center",
  },
  loginContainer: {
    marginTop: 30,
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
    color: "#706f6f",
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


