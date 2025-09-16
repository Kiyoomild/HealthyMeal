import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from "react";

const mealOptions = [
  'Rice', 'Noodle', 'Curry & Stew',
  'Fried', 'Stir-Fried', 'Soup',
  'Grilled', 'Rolled', 'Fusion',
];
const appetizersOption = [
  'Soups', 'Skewers', 'Small Bites',
  'Bread', 'Seafood', 'Pickled',
  'Fried', 'Dim Sum', 'Tartare'
]
const dessertOption = [
  'Baked', 'Puddings', 'Fruit-Based',
  'Frozen', 'Steeamed', 'Fried',
  'Thai Traditional', 'Mousse', 'Pancake'
]
const saladOption = [
  'Green', 'Fruit', 'Pasta',
  'Seafood', 'Asian-Style', 'Grain',
  'Creamy', 'Protein-Based', 'Rolled'
]
const drinkOption = [
  'Mineral', 'Carbonated', 'Smoothies',
  'Juices', 'Energy', 'Hot Beverages',
  'Cocktails', 'Yogurt', 'Milkshakes'
]

const SelectCategory = ({ parentCategory, selectedSubCategory, setSelectedSubCategory }) => {
  const [selectedFoods, setSelectedFoods] = useState([]);
  const [options, setOptions] = useState(mealOptions);

  useEffect(() => {
    if (!parentCategory) return;
    const categoryName = parentCategory.name;

    if (categoryName === 'Meal') setOptions(mealOptions);
    else if (categoryName === 'Appetizers') setOptions(appetizersOption);
    else if (categoryName === 'Dessert') setOptions(dessertOption);
    else if (categoryName === 'Salad') setOptions(saladOption);
    else if (categoryName === 'Drinks') setOptions(drinkOption);

    setSelectedFoods([]);
    setSelectedSubCategory(null);
  }, [parentCategory]);

  const handleSelect = (food) => {
    let updated;
    setSelectedFoods((prev) => {
      if (prev.includes(food)) {
        updated = prev.filter((item) => item !== food);
      } else {
        updated = [...prev, food];
      }
      return updated;
    });
    setSelectedSubCategory(food);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <View style={styles.grid}>
        {options.map((food, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleSelect(food)}
            style={[
              styles.foodButton,
              selectedFoods.includes(food) && styles.selectedFoodButton,
            ]}
          >
            <Text
              style={[
                styles.foodText,
                selectedFoods.includes(food) && styles.selectedFoodText,
              ]}
            >
              {food}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    marginVertical: 0,
  },
  title: { 
    fontSize: 16, 
    fontWeight: '500', // เปลี่ยน fontWeight ให้เหมาะสม
    marginBottom: 20, 
    color: "#616161",
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: -10,
  },
  foodButton: {
    width: '30%',  // ใช้ความกว้างเป็น 30% เพื่อให้แสดงเป็นแถวละ 3 ปุ่ม
    height: 30,
    margin: 5,
    backgroundColor: '#FFD1C2',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: 5,
  },
  selectedFoodButton: {
    backgroundColor: '#FD561F',
  },
  foodText: {
    fontSize: 14,
    color: '#FD561F',
    fontWeight: 'regular',
  },
  selectedFoodText: {
    color: 'white',
  },
});

export default SelectCategory;
