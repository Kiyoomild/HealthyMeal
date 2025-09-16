import React from 'react'; // นำเข้า React
import { ScrollView, StyleSheet } from 'react-native'; // นำเข้า ScrollView และ StyleSheet
import OrderCard from '../OrderCard'; // นำเข้า OrderCard component
import EmptyCart from '../EmptyCart'; // นำเข้า EmptyCart component

export default function ActiveOrdersScreen() {
  const orders = [
    {
    id: '1',
    name: 'แซนวิชแฮมชีส', // ชื่ออาหาร
    price: '115฿', // ราคา
    time: '21 Apr , 23.00 pm', // เวลาที่สั่ง
    status: 'Order Placed', // สถานะคำสั่งซื้อ
    imageUrl: require('../../../assets/logo/แซนวิชแฮมชีส.png'), 
  },
  ]; // รายการคำสั่งซื้อ (ตอนนี้เป็นอาร์เรย์ว่างสำหรับการแสดงสถานะไม่มีคำสั่งซื้อ)
  
  if (orders.length === 0) {
    {/* ถ้าไม่มีคำสั่งซื้อ ให้แสดง EmptyCart */}
    return <EmptyCart />;
  }
  
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {orders.map((order, index) => (
        <OrderCard
        key={index}
        name={order.name}
        price={order.price}
        time={order.time}
        status={order.status}
        imageUrl={order.imageUrl}
        onCancelOrder={() => onReview(order)} // ส่ง props ทั้งหมดจาก order ไปที่ OrderCard
        />
      ))}
    </ScrollView>

    /*<ScrollView style={styles.container} contentContainerStyle={styles.content}>
    {orders.map((order, index) => (
      <OrderCard
        key={index}
        {...order}
      />
    ))}
  </ScrollView>*/
  

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingBottom: 70, // กำหนดระยะห่างด้านล่าง
  },
});
