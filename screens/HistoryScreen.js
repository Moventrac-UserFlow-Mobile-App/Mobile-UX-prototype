// HistoryScreen.js

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LineChart } from "react-native-chart-kit";

const HistoryScreen = ({ historicalData }) => {
  // Prepare data for the chart
  const data = {
    labels: ["1", "2", "3", "4", "5"], 
    datasets: [
      {
        data: historicalData, // Historical data from props
      },
    ],
  }; 

  return (
    <View style={styles.container}>
      <Text style={styles.historyText}>Good work!</Text>
      <LineChart
        data={data}
        width={350}
        height={220}
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 30,
    marginTop: 30,
  },
  historyText: {
    fontSize: 28,
    marginBottom: 10,
    marginLeft: 30,
  },
});
