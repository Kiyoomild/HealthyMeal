import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import CategoryList from "./CategoryList";
import SortBy from "./SortBy";
import PriceSlider from "./PriceSlider";
import ApplyButton from "./ApplyButton";
import BottomNav from "./BottomNav";
import SelectCategory from "./SelectCategory";

const FilterScreen = ({ navigation }) => {
  const [price, setPrice] = useState(40);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);

  useEffect(() => {
    setPrice(40);  // รีเซ็ตราคา
    setSortBy(null); // รีเซ็ตการเลือกการจัดเรียง
    setSelectedSubCategory(null); // รีเซ็ตการเลือกหมวดหมู่ย่อย
  }, [selectedCategory]);

  const handleBackPress = () => {
    navigation.goBack(); // ใช้ navigation กลับหน้าก่อนหน้า
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
      <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
        <Image source={require("../../assets/icons/Back.png")} 
        style={styles.backButtonImage}
        />
      </TouchableOpacity>
        <Text style={styles.header}>Filter</Text>
      </View>
    <View style={styles.innerContainer}>
      <View style={styles.categoryListContainer}>
        <CategoryList
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </View>
    <View style={styles.liner} />

    <View style={styles.sortByContainer}>
      <SortBy sortBy={sortBy} setSortBy={setSortBy} />
    </View>
    <View style={styles.liner} />

    <View style={styles.selectCategoryContainer}>
      <SelectCategory 
        parentCategory={selectedCategory}
        selectedSubCategory={selectedSubCategory}
        setSelectedSubCategory={setSelectedSubCategory}
      />
    </View>
    <View style={styles.liner} />

    <View style={styles.priceSliderContainer}>
      <PriceSlider price={price} setPrice={setPrice} />
    </View>
    <View style={styles.applyButtonContainer}>
      <ApplyButton price={price} selectedCategory={selectedCategory} />
    </View>
    <BottomNav />
  </View>
  </View>

  );
};


const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#FFC757" 
},
  headerContainer: { 
    flexDirection: "row", 
    paddingHorizontal: 20 
},
  backButton: { 
    marginRight: 10,
    marginTop: 50,

},
  backButtonImage: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    marginTop: 10,
},
  backButtonText: { 
    fontSize: 25, 
    color: "#00000" 
},
  header: { 
    fontSize: 24, 
    fontWeight: "bold",
    marginLeft: 125,
    textAlign: "center", 
    marginTop: 50,
    color: "#fff", 
},
  innerContainer: { 
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    borderRadius: 50,
    marginTop: 30,
      // iOS shadow
  shadowColor: "black", // สีเงา
  shadowOffset: { width: 0, height: 15 }, // ระยะห่างของเงา
  shadowOpacity: 4, // ความเข้มของเงา
  shadowRadius: 5,  // ความเบลอของเงา
  // Android shadow
  elevation: 5, // ความสูงของเงา
},
  categoryListContainer: { 
    marginTop: 30, 
    paddingHorizontal: 20,
    //marginBottom: 10,
},
  sortByContainer: { 
    marginTop: 20, 
    paddingHorizontal: 20,
    marginBottom: 20,
},
  selectCategoryContainer: { 
    marginTop: 20, 
    paddingHorizontal: 20,
    marginBottom: 20,
},
  priceSliderContainer: { 
    marginTop: 20, 
    paddingHorizontal: 20,
    marginBottom: 20,
},
  applyButtonContainer: { 
    marginTop: 30, 
    paddingHorizontal: 20,
    marginBottom: 50,
    alignItems: "center",
},
  liner: { 
    height: 1, 
    backgroundColor: "#FD561F", 
    marginVertical: 1,
    marginHorizontal: 25,
},
  

});

export default FilterScreen;
