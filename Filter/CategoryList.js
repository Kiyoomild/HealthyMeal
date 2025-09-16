import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';

const categories = [
  { id: 1, name: "Meal", icon: require("../../assets/icons/Meal.png") },
  { id: 2, name: "Appetizers", icon: require("../../assets/icons/Appetizers.png") },
  { id: 3, name: "Dessert", icon: require("../../assets/icons/Dessert.png") },
  { id: 4, name: "Salad", icon: require("../../assets/icons/Salad.png") }, 
  { id: 5, name: "Drinks", icon: require("../../assets/icons/Drinks.png") }, 
];

const CategoryList = ({ selectedCategory, onSelectCategory }) => {
  const navigation = useNavigation();

  const handleCategoryPress = (category) => {
    onSelectCategory(category);
    navigation.navigate('FilterScreen', { selectedCategory: category });
  };

  return (
    <View>
      <Text style={styles.title}>Categories</Text>
      <View style={styles.categoriesContainer}>
        {categories.map((category) => {
          const isSelected = selectedCategory?.id === category.id;
          return (
            <View key={category.id} style={styles.categoryWrapper}>
              <TouchableOpacity
                style={[
                  styles.categoryItem,
                  { backgroundColor: isSelected ? '#FDC525' : '#FFF1CF' }
                ]}
                onPress={() => handleCategoryPress(category)}
              >
                <Image
                  source={category.icon}
                  style={styles.icon} // กำหนดขนาดคงที่ให้รูป
                />
              </TouchableOpacity>
              {/* ชื่อจะอยู่ภายนอกกรอบรูป */}
              <Text style={styles.label}>{category.name}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "Regular",
    marginBottom: 5,
  },
  categoriesContainer: {
    marginTop: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryWrapper: {
    alignItems: 'center',  // ทำให้ทุกอย่างอยู่ตรงกลาง
    marginBottom: 15, // ระยะห่างระหว่าง item แต่ละตัว
  },
  categoryItem: {
    width: 60,
    height:60,  // ทำให้แต่ละ item กินพื้นที่ 45% ของ container
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    padding: 5,
  },
  icon: {
    width: '75%',  // ขนาดที่ต้องการ
    height: '75%', // ให้สูงและกว้างเท่ากัน
    resizeMode: 'contain', // ให้รูปไม่บิดเบือน
    marginBottom: 5,
    marginTop: 5,
  },
  label: {
    fontSize: 11,
    fontWeight: '500',
  },
});


export default CategoryList;
