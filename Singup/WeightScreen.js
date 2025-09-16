import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { StatusBar } from "expo-status-bar";

export default function WeightScreen({ navigation }) {
  const [weight, setWeight] = useState("50");

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image source={require("./imgs/dog1.png")} style={styles.image} />
      <Text style={styles.title}>Your Weight.</Text>
      <View style={styles.pickerContainer}>
        <RNPickerSelect
          onValueChange={(value) => setWeight(value)}
          items={Array.from({ length: 150 }, (_, i) => ({
            label: `${i + 1} kg`,
            value: `${i + 1}`,
          }))}
          value={weight}
          style={{
            inputIOS: { fontSize: 18, textAlign: "center", color: "#333" },
            inputAndroid: { fontSize: 18, textAlign: "center", color: "#333" },
          }}
          useNativeAndroidPickerStyle={false}
        />
      </View>
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate("Height")}
      >
        <Text style={styles.nextText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#FFF8E1",
  },
  image: {
    width: 280, height: 280, marginBottom: 20, marginTop: -100,
  },
  title: {
    fontSize: 24, fontWeight: "bold", color: "#333", marginBottom: 10,
  },
  pickerContainer: {
    width: "80%", height: 60, backgroundColor: "white", borderRadius: 25,
    paddingHorizontal: 20, justifyContent: "center",
    shadowColor: "#000", shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1, shadowRadius: 4, elevation: 5,
  },
  nextButton: {
    backgroundColor: "#FFC107", paddingVertical: 15, borderRadius: 10,
    width: "80%", alignItems: "center", position: "absolute", bottom: 50,
  },
  nextText: {
    fontSize: 18, fontWeight: "bold", color: "#FFF", textAlign: "center",
  },
});
