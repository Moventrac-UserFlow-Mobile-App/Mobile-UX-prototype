//SwingSpeedMeter

import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const SwingSpeedMeter = () => {
  const [swingSpeed, setSwingSpeed] = useState(null);

  // Function to simulate swing and calculate speed
  const simulateSwing = () => {
    // Simulate swing speed calculation (dummy logic)
    const speed = Math.floor(Math.random() * 100) + 50; // Dummy speed between 50 and 150
    setSwingSpeed(speed);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={simulateSwing} style={styles.button}>
        <Text style={styles.buttonText}>Swing!</Text>
      </TouchableOpacity>
      <Text style={styles.result}>
        {swingSpeed !== null
          ? `Swing Speed: ${swingSpeed} mph`
          : "Awaiting swing..."}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "rgba(2,0,3,0.2)",
    background:
      "linear-gradient(90deg, rgba(2,0,36,0.5) 0%, rgba(117,145,205,0.5) 35%, rgba(0,212,255,0.5) 100%)",
    padding: 10,
    borderRadius: 5,
    borderColor: "gray",
    borderWidth: 0.5,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  result: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default SwingSpeedMeter;
