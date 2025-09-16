import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const ApplyButton = ({ selectedCategory, price }) => {
  return (
    <TouchableOpacity
      style={styles.applyButton}
      onPress={() => alert("Processing...")}
    >
      <Text style={styles.applyText}>Apply</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  applyButton: {
    backgroundColor: "#FD561F",
    padding: 5,
    borderRadius: 20,
    alignItems: "center",
    width: 150,
    height: 40,
    marginTop: -10,
  },
  applyText: { 
    color: "white", 
    fontWeight: "Regular",
    fontSize: 22, 
  },
});

export default ApplyButton;
