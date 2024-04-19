//HomeScreen.js

import React, { useContext, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import fitnessData from "../data/fitness";
import { FitnessItems } from "../Context";
import { useNavigation } from "@react-navigation/native";
import RatingScreen from "./RatingScreen";
import PerformanceGraph from "./PerformanceGraph";
import ChatScreen from "./ChatScreen";
import { Fontisto } from "@expo/vector-icons";

const HomeScreen = () => {
  const { minutes, calories, workout } = useContext(FitnessItems);
  const navigation = useNavigation();
  const [chatVisible, setChatVisible] = useState(false); 

  // Example historical data
  const historicalData = [10, 20, 15, 25, 30];
  console.log("Historical Data:", historicalData);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.user}>
        <Image style={styles.userimg} source={require("../assets/user.png")} />
        <View>
          <Text style={styles.welcome}>Welcome Back (UserName)</Text>
        </View>
      </View>
      <PerformanceGraph />
      <Pressable
        onPress={() =>
          navigation.navigate("Training", {
            image:
              "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,ar_1.2,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/sku-card-widget/gold2.png",
            excersises: fitnessData[0].excersises,
          })
        }
      >
        <RatingScreen />
        <Text
          style={{
            textAlign: "center",
            marginTop: 70,
            fontSize: 20,
            color: "blue",
          }}
        >
          Back To Training! 
          
        </Text>
      </Pressable>

      {/* Add the chat icon/button */}
      <Pressable onPress={() => setChatVisible(true)}>
        {/* <Fontisto
          name="hipchat"
          size={24}
          color="black"
          style={styles.chatIconOutline}
        /> */}
        <Fontisto
          name="hipchat"
          size={24}
          color="orange"
          style={styles.chatIcon}
        />
      </Pressable>

      {/* Render the ChatScreen component */}
      <ChatScreen visible={chatVisible} onClose={() => setChatVisible(false)} />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(2,0,3,0.5)",
    borderRadius: 7,
  },
  user: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
    marginBottom: 30,
  },
  userimg: {
    width: 45,
    height: 45,
  },
  welcome: {
    marginTop: 30,
    fontSize: 20,
  },
  chatIcon: {
    width: 30,
    height: 30,
    position: "absolute",
    bottom: 30,
    right: 30,
  },
  chatIconOutline: {
    // width: 30,
    // height: 34,
    // position: "absolute",
    // bottom: 48,
    // right: 58,
    // color: "transparent",
    // borderColor: "orange",
    // borderWidth: 1,
  },
});
