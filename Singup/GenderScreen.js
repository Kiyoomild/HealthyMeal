import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

export default function GenderScreen({ navigation }) {
  const [selectedGender, setSelectedGender] = useState("");

  const renderOption = (label, imageSource) => (
    <TouchableOpacity
      style={[
        styles.option,
        selectedGender === label && styles.selectedOption,
      ]}
      onPress={() => setSelectedGender(label)}
    >
      {imageSource && <Image source={imageSource} style={styles.image} />}
      <Text style={styles.optionText}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What is your gender?</Text>
      <Text style={styles.subtitle}>เพศของคุณคืออะไร?</Text>
      <View style={styles.row}>
        {renderOption("Male", require("./imgs/male.png"))}
        {renderOption("Female", require("./imgs/female.png"))}
      </View>
      {renderOption("Other", null)}

      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate("Disease")}
      >
        <Text style={styles.nextText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: "#FFF3E0", alignItems: "center", justifyContent: "center",
  },
  title: {
    fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 4,
  },
  subtitle: {
    fontSize: 14, marginBottom: 20, color: "#555",
  },
  row: {
    flexDirection: "row", justifyContent: "center", gap: 20,
  },
  option: {
    backgroundColor: "#fff", borderRadius: 10, alignItems: "center",
    justifyContent: "center", padding: 16, width: 120, margin: 10,
    shadowColor: "#000", shadowOpacity: 0.1, shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4, elevation: 3,
  },
  selectedOption: {
    borderWidth: 2, borderColor: "#FF9800",
  },
  image: {
    width: 60, height: 60, marginBottom: 8,
  },
  optionText: {
    fontSize: 16, fontWeight: "bold",
  },
  nextButton: {
    backgroundColor: "#FFC107", paddingVertical: 14, paddingHorizontal: 60,
    borderRadius: 12, position: "absolute", bottom: 40,
  },
  nextText: {
    fontSize: 18, fontWeight: "bold", color: "#fff",
  },
});
