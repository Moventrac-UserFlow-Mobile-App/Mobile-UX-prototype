//TrainingScreen

import React, { useState, useContext } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
// import fitnessData from "../data/fitness";
import { FitnessItems } from "../Context";
import { useNavigation } from "@react-navigation/native";
import SwingSpeedMeter from "./SwingSpeedMeter";
import MiniGame from "./MiniGame";
import PerformanceGraph from "./PerformanceGraph";

const TrainingScreen = () => {
  const { minutes, calories, workout } = useContext(FitnessItems);
  const navigation = useNavigation();
  const [showGraph, setShowGraph] = useState(false);

  const handleSeePerformancePress = () => {
    navigation.navigate("Home"); 
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.user}>
        <Image style={styles.userimg} source={require("../assets/user.png")} />
        <View>
          <Text style={styles.welcome}>(Some Training) Golf </Text>
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.swingTitle}> Swing Speed Simulation</Text>

        <SwingSpeedMeter />
        <Text
          style={[
            styles.PuttTitle,
            { textDecorationLine: "underline", textDecorationColor: "red" },
          ]}
        >
          Swing Speed Simulation
        </Text>
        <MiniGame onGameEnd={() => setShowGraph(true)} />
      </View>

      {showGraph && <PerformanceGraph />}
      <Pressable onPress={handleSeePerformancePress}>
        <Text
          style={{
            textAlign: "center",
            marginTop: 60,
            fontSize: 20,
            color: "blue",
          }}
        >
          Track Your Movement!
        </Text>
      </Pressable>
    </ScrollView>
  );
};

export default TrainingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(2,0,3,0.5)",
  },
  user: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
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
  sectionContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#033d4f",
  },
  swingTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#033d4f",
  },
  PuttTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#023059",
    marginTop: 30,
  },
});
