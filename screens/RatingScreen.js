import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FitnessItems } from "../Context";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const RatingScreen = () => {
  const { historicalData } = useContext(FitnessItems);
  const [rating, setRating] = useState(null);
  let averageRating = 0;

  // Function to calculate rating based on historical data
  useEffect(() => {
    if (historicalData.length === 0) {
      setRating(null); // No data, no rating
    } else {
      // Calculate average of historical data
      averageRating =
        historicalData.reduce((sum, value) => sum + value, 0) /
        historicalData.length;
      // Define rating criteria
      if (averageRating >= 20) {
        setRating("Excellent");
      } else if (averageRating >= 15) {
        setRating("Good");
      } else if (averageRating >= 10) {
        setRating("Average");
      } else {
        setRating("Poor");
      }
    }
  }, [historicalData]);

  // Function to render rating stars
  const renderRatingStars = () => {
    const fullStars = Math.floor(averageRating);
    const halfStar = averageRating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    const stars = [];

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<AntDesign key={i} name="star" size={24} color="gold" />);
    }

    // Half star
    if (halfStar) {
      stars.push(
        <AntDesign key="half" name="starhalf" size={24} color="gold" />
      );
    }

    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <AntDesign key={`empty_${i}`} name="staro" size={24} color="gold" />
      );
    }

    return stars;
  };

  return (
    <View style={styles.container}>
      <View style={styles.ratingStars}>
        {rating !== null ? (
          renderRatingStars()
        ) : (
          // Show 3.5 stars when there's no rating available
          <>
            <AntDesign name="star" size={24} color="gold" />
            <AntDesign name="star" size={24} color="gold" />
            <AntDesign name="star" size={24} color="gold" />
            <FontAwesome5 name="star-half-alt" size={24} color="gold" />
            <AntDesign name="staro" size={24} color="gold" />
          </>
        )}
      </View>
      {rating !== null && <Text>{rating}</Text>}
    </View>
  );
};

export default RatingScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 20,
  },
  ratingStars: {
    flexDirection: "row",
  },
});
