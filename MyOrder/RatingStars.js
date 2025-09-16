import React from 'react'; // นำเข้า React
import { View, TouchableOpacity, StyleSheet } from 'react-native'; // นำเข้า component ที่จำเป็น
import { AntDesign } from '@expo/vector-icons'; // นำเข้าไอคอนจาก AntDesign

export default function RatingStars({ rating, setRating }) {
  return (
    <View style={styles.container}>
      {/* แสดงดาวสำหรับให้คะแนน */}
      {[1, 2, 3, 4, 5].map((star) => (
        <TouchableOpacity 
          key={star} 
          onPress={() => setRating(star)} // เมื่อกดดาว จะเปลี่ยนค่าคะแนน
          style={styles.star}
        >
          <AntDesign 
            name={star <= rating ? "star" : "staro"} // ถ้าคะแนนมากกว่าหรือเท่ากับดาวนี้ให้แสดงดาวเต็ม
            size={24} 
            color={star <= rating ? "#FF5722" : "#D1D1D1"} // กำหนดสีของดาว
          />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  star: {
    marginHorizontal: 4,
  },
});
