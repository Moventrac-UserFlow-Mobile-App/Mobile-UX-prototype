//PerformanceGraph.js

import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { LineChart } from "react-native-chart-kit";

const PerformanceGraph = () => {
  // Mock performance data (replace this with actual data)
  const performanceData = {
    labels: ["1", "2", "3", "4", "5"],
    datasets: [
      {
        data: [10, 20, 15, 25, 30], // Example data, replace with actual performance data
      },
    ],
  };

  return (
    <View style={styles.container}>
      {/* Y-axis label */}
      <View style={styles.yAxisLabelContainer}>
        <Text style={styles.yAxisLabel}>Efficieny Index</Text>
      </View>
      {/* X-axis label */}
      <View style={styles.xAxisLabelContainer}>
        <Text style={styles.xAxisLabel}>Time(minutes)</Text>
      </View>
      {/* Line chart */}
      <LineChart
        data={performanceData}
        width={350}
        height={220}
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 0,
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

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "rgba(2,0,3,0.2)",
    background:
      "linear-gradient(90deg, rgba(2,0,36,0.5) 0%, rgba(117,145,205,0.5) 35%, rgba(0,212,255,0.5) 100%)",
    padding: 10,
    borderRadius: 5,
    borderColor: "gray",
    borderWidth: 0.5,
  },
  yAxisLabelContainer: {
    position: "absolute",
    left: 0.5,
    top: "50%",
    transform: [{ rotate: "-90deg" }],
    zIndex: 1,
  },
  yAxisLabel: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.7)",
  },
  xAxisLabelContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  xAxisLabel: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.7)",
  },
});

export default PerformanceGraph;
