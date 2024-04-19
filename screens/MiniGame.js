import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const MiniGame = () => {
  const [successfulPutts, setSuccessfulPutts] = useState(0);
  const [totalAttempts, setTotalAttempts] = useState(0);

  // Function to handle putting attempt
  const attemptPutt = (success) => {
    setTotalAttempts(totalAttempts + 1);
    if (success) {
      setSuccessfulPutts(successfulPutts + 1);
    }
  };

  // Function to reset the game
  const resetGame = () => {
    setSuccessfulPutts(0);
    setTotalAttempts(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.stats}>
        Successful Putts: {successfulPutts} / Total Attempts: {totalAttempts}
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => attemptPutt(Math.random() > 0.5)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Putt!</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={resetGame}
          style={[styles.button, styles.resetButton]}
        >
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  stats: {
    fontSize: 18,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    marginRight: 10, 
  },
  resetButton: {
    backgroundColor: "red",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});

export default MiniGame;
