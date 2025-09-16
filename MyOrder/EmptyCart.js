import React from 'react'; // นำเข้า React
import { View, Text, StyleSheet } from 'react-native'; // นำเข้า component ที่จำเป็น
import { Feather } from '@expo/vector-icons'; // นำเข้าไอคอน Feather

export default function EmptyCart() {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        {/* ไอคอน shopping-cart */}
        <Feather name="shopping-cart" size={70} color="#FFD8CC" />
        <Text style={styles.plusIcon}>+</Text> {/* สัญลักษณ์ + */}
      </View>
      <Text style={styles.text}>
        You don't have any{'\n'}
        active orders at this{'\n'}
        time {/* ข้อความแจ้งว่าไม่มีคำสั่งซื้อ */}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 40,
    backgroundColor: '#FFFFFF',
  },
  iconContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  plusIcon: {
    position: 'absolute',
    bottom: 10,
    left: -15,
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFD8CC',
  },
  text: {
    color: '#FF5722',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: 24,
  },
});
