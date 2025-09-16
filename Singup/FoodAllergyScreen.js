import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { StatusBar } from "expo-status-bar";

export default function FoodAllergyScreen({ navigation }) {
  const [allergy, setAllergy] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image source={require("./imgs/dog3.png")} style={styles.image} />
      <Text style={styles.title}>Are you allergic to any foods?</Text>
      <Text style={styles.subtitle}>คุณมีการแพ้อาหารมั้ย?</Text>

      <View style={styles.pickerContainer}>
        <RNPickerSelect
          onValueChange={(value) => setAllergy(value)}
          placeholder={{ label: "เลือกอาหารที่แพ้", value: null }}
          items={[
            { label: "กุ้ง", value: "กุ้ง" },
            { label: "ปู", value: "ปู" },
            { label: "ไข่", value: "ไข่" },
            { label: "ถั่ว", value: "ถั่ว" },
            { label: "ไม่มี", value: "ไม่มี" },
          ]}
          style={{
            inputIOS: styles.pickerText,
            inputAndroid: styles.pickerText,
          }}
          value={allergy}
          useNativeAndroidPickerStyle={false}
        />
      </View>

      <Text style={styles.resultText}>
        การแพ้อาหารของคุณ : {allergy || " - "}
      </Text>

      <Text style={styles.note}>**หากไม่มีโปรด Skip**</Text>

      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate("MainPage")}
      >
        <Text style={styles.nextText}>Next</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("MainPage")}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8E1",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#000",
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: "#333",
  },
  pickerContainer: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingHorizontal: 20,
    justifyContent: "center",
    height: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  pickerText: {
    fontSize: 16,
    textAlign: "center",
    color: "#000",
  },
  resultText: {
    fontSize: 16,
    marginTop: 20,
    fontWeight: "500",
    color: "#000",
  },
  note: {
    fontSize: 12,
    color: "#666",
    marginTop: 10,
    marginBottom: 30,
  },
  nextButton: {
    backgroundColor: "#FFC107",
    paddingVertical: 15,
    borderRadius: 15,
    width: "80%",
    alignItems: "center",
    marginBottom: 15,
  },
  nextText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
  },
  skipText: {
    fontSize: 16,
    textDecorationLine: "underline",
    color: "#666",
  },
});
