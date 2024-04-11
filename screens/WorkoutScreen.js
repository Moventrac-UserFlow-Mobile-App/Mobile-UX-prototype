// WorkoutScreen.js
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { FitnessItems } from "../Context";
import React, { useContext } from "react";
import { AntDesign } from "@expo/vector-icons";

const WorkoutScreen = () => {
  const route = useRoute();
  //console.log(route.params)
  const navigation = useNavigation();
  const { completed, setCompleted } = useContext(FitnessItems);

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: "white", marginTop: 50 }}
      >
        <Image
          style={{ width: "100%", height: 170 }}
          source={{ uri: route.params.image }}
        />
        <Ionicons
          onPress={() => navigation.goBack()}
          style={{ position: "absolute", top: 20, left: 20 }}
          name="arrow-back-outline"
          size={24}
          color="white"
        />
        {/* <View style={styles.exercisesContainer}> */}
        {route.params.excersises.map((item, index) => (
          <Pressable
            style={{ margin: 10, flexDirection: "row", alignItems: "center" }}
            key={index}
          >
            <Image
              style={{ width: 90, height: 90 }}
              source={{ uri: item.image }}
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 17, fontWeight: "bold", width: 170 }}>
                {item.name}
              </Text>
              <Text style={{ marginTop: 4, fontSize: 18, color: "gray" }}>
                x{item.sets}
              </Text>
            </View>

            {completed.includes(item.name) ? (
              <AntDesign
                style={{ marginLeft: 40 }}
                name="checkcircle"
                size={24}
                color="green"
              />
            ) : null}
          </Pressable>
        ))}
        {/* </View> */}
      </ScrollView>

      <Pressable
        // onPress={() => console.warn("Pressed")}
        onPress={() => {
          navigation.navigate("Fit", {
            excersises: route.params.excersises,
          });
          setCompleted([]);
        }}
        style={{
          backgroundColor: "blue",
          padding: 10,
          marginLeft: "auto",
          marginRight: "auto",
          marginVertical: 20,
          width: 120,
          borderRadius: 6,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 15,
            fontWeight: "600",
          }}
        >
          START HERE
        </Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  exercisesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    marginTop: 20,
    paddingHorizontal: 10,
  },
  exerciseItem: {
    alignItems: "center",
    // marginBottom: 20,
    margin: 10,
  },
  exerciseName: {
    marginTop: 5,
    fontWeight: "bold",
  },
  exerciseSets: {
    color: "gray",
    marginTop: 2,
  },
});

export default WorkoutScreen;
