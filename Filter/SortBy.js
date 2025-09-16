import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const SortBy = ({ sortBy, setSortBy }) => {
  const handleRating = (star) => {
    setSortBy(star); // ใช้ค่าจาก props เพื่อจัดการการเลือกการจัดเรียง
  };

  const renderStars = () => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <TouchableOpacity key={i} onPress={() => handleRating(i)}>
          <Image
            source={
              i <= sortBy
                ? require("../../assets/icons/StarSelect.png")
                : require("../../assets/icons/Star.png") 
            }
            style={styles.starImage}
          />
        </TouchableOpacity>
      );
    }
    return stars;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sort by</Text>
      <View style={styles.starsRow}>
        <Text style={styles.ratingLabel}>Top Rated</Text>
        {renderStars()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 0,
  },
  title: {
    fontSize: 20,
    fontWeight: "regular",
    marginBottom: 5,
  },
  ratingLabel: {
    marginRight: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  starsRow: {
    flexDirection: "row",
    marginTop: 5,
  },
  starImage: {
    width: 20,
    height: 20,
    marginRight: 3,
    resizeMode: "contain",
  },
});

export default SortBy;
