
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React, { useContext } from "react";
import FitnessCards from "../components/FitnessCards";
import { FitnessItems } from "../Context";

const HomeScreen = () => {
  const { minutes, calories, workout } = useContext(FitnessItems);

  return (
    <ScrollView style={{ flex: 1, marginTop: 50 }}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>MOVENTRAC</Text>
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={styles.statValue}>{workout}</Text>
            <Text style={styles.statLabel}>WORKOUTS</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statValue}>{calories}</Text>
            <Text style={styles.statLabel}>KCAL</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statValue}>{minutes}</Text>
            <Text style={styles.statLabel}>MINS</Text>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,ar_1.2,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/sku-card-widget/gold2.png",
            }}
          />
        </View>
        <FitnessCards />
        {/* Extra content to enable scrolling */}
        <View style={{ height: 1000 }} />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  titleContainer: {
    backgroundColor: "rgba(2,0,3,0.5)", 
    background:
      "linear-gradient(90deg, rgba(2,0,36,0.5) 0%, rgba(117,145,205,0.5) 35%, rgba(0,212,255,0.5) 100%)", // Adjusted alpha values for gradient colors
    padding: 10,
    marginTop: 50,
  },
  title: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "rgba(2,0,36,0.5)",
    background:
      "linear-gradient(90deg, rgba(2,0,36,0.5) 0%, rgba(117,145,205,0.5) 35%, rgba(0,212,255,0.5) 100%)", 
    marginBottom: 10,
  },
  stat: {
    alignItems: "center",
  },
  statValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: "##291D70",
    marginBottom: 14,
  },
  statLabel: {
    fontSize: 14,
    color: "white",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  image: {
    width: "90%",
    height: 120,
    borderRadius: 7,
    marginTop: -20,
  },
});





