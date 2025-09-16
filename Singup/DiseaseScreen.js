import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

export default function DiseaseScreen({ navigation }) {
  const [selected, setSelected] = useState("");

  const renderButton = (label, icon) => (
    <TouchableOpacity
      style={[styles.option, selected === label && styles.selectedOption]}
      onPress={() => setSelected(label)}
    >
      {icon && <Image source={icon} style={styles.icon} />}
      <Text style={styles.optionText}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Do you have any{"\n"}chronic conditions?</Text>
      <Text style={styles.subtitle}>คุณมีโรคประจำตัวมั้ย?</Text>

      {renderButton("โรคเบาหวาน", require("./imgs/heart1.png"))}
      {renderButton("ความดันโลหิตสูง", require("./imgs/heart2.png"))}
      {renderButton("โรคหัวใจ", require("./imgs/heart3.png"))}
      {renderButton("อื่นๆ", null)}

      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate("FoodAllergy")}
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
    fontSize: 22, fontWeight: "bold", textAlign: "center", marginBottom: 4,
  },
  subtitle: {
    fontSize: 14, color: "#555", marginBottom: 20,
  },
  option: {
    width: "80%", backgroundColor: "#fff", paddingVertical: 14, paddingHorizontal: 20,
    borderRadius: 12, marginVertical: 8, alignItems: "center",
    flexDirection: "row", justifyContent: "center",
    shadowColor: "#000", shadowOpacity: 0.1, shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4, elevation: 3,
  },
  selectedOption: {
    borderWidth: 2, borderColor: "#FF9800",
  },
  optionText: {
    fontSize: 16, fontWeight: "bold",
  },
  icon: {
    width: 24, height: 24, marginRight: 8,
  },
  nextButton: {
    backgroundColor: "#FFC107", paddingVertical: 14, paddingHorizontal: 60,
    borderRadius: 12, position: "absolute", bottom: 40,
  },
  nextText: {
    fontSize: 18, fontWeight: "bold", color: "#fff",
  },
});
