import React from 'react'; // นำเข้า React
import { ScrollView, StyleSheet } from 'react-native'; // นำเข้า ScrollView และ StyleSheet
import OrderCard from '../OrderCard'; // นำเข้า OrderCard component

export default function CompletedOrdersScreen({ onReview }) {
  const orders = [
    {
      id: '1',
      name: 'แซนวิชแฮมชีส', // ชื่ออาหาร
      price: '115฿', // ราคา
      time: '21 Apr , 23.00 pm', // เวลาที่สั่ง
      status: 'Order delivered', // สถานะคำสั่งซื้อ
      imageUrl: require('../../../assets/logo/แซนวิชแฮมชีส.png'), // รูปภาพของอาหาร
    },
    {
      id: '2',
      name: 'นมสดมัชฉะสตอเบอรี่', // ชื่ออาหาร
      price: '60฿', // ราคา
      time: '21 Apr , 23.00 pm', // เวลาที่สั่ง
      status: 'Order delivered', // สถานะคำสั่งซื้อ
      imageUrl: require('../../../assets/logo/นมสดมัชฉะสตอเบอรี่.png'), 
    },
    {
      id: '3',
      name: 'สลัดน้ำมันงา', // ชื่ออาหาร
      price: '95฿', // ราคา
      time: '21 Apr , 23.01 pm', // เวลาที่สั่ง
      status: 'Order delivered', // สถานะคำสั่งซื้อ
      imageUrl: require('../../../assets/logo/สลัดน้ำมันงา.png'),
    },
    {
      id: '4',
      name: 'อุด้งผัดซอส', // ชื่ออาหาร
      price: '169฿', // ราคา
      time: '21 Apr , 23.01 pm', // เวลาที่สั่ง
      status: 'Order delivered', // สถานะคำสั่งซื้อ
      imageUrl: require('../../../assets/logo/สลัดน้ำมันงา.png'), // รูปภาพของอาหาร
    },
    {
      id: '5',
      name: 'ฮันนี่โทสกล้วยช็อคสตอเบอรี่', // ชื่ออาหาร
      price: '165฿', // ราคา
      time: '21 Apr , 23.03 pm', // เวลาที่สั่ง
      status: 'Order delivered', // สถานะคำสั่งซื้อ
      imageUrl: require('../../../assets/logo/สลัดน้ำมันงา.png'), // รูปภาพของอาหาร
    },
    {
      id: '6',
      name: '...........', // ชื่ออาหาร
      price: '00฿', // ราคา
      time: '21 Apr , 23.03 pm', // เวลาที่สั่ง
      status: 'Order delivered', // สถานะคำสั่งซื้อ
     // imageUrl: require('../assets/logo/แซนวิชแฮมชีส.png'), // รูปภาพของอาหาร
    },
    {
      id: '7',
      name: '.........', // ชื่ออาหาร
      price: '00฿', // ราคา
      time: '21 Apr , 23.04 pm', // เวลาที่สั่ง
      status: 'Order delivered', // สถานะคำสั่งซื้อ
     // imageUrl: require('../assets/logo/แซนวิชแฮมชีส.png'), // รูปภาพของอาหาร
    },
    {
      id: '8',
      name: '.........', // ชื่ออาหาร
      price: '00฿', // ราคา
      time: '21 Apr , 23.05 pm', // เวลาที่สั่ง
      status: 'Order delivered', // สถานะคำสั่งซื้อ
     // imageUrl: require('../assets/logo/แซนวิชแฮมชีส.png'), // รูปภาพของอาหาร
    },
  ];

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
          onLeaveReview={() => onReview(order)} // ส่งข้อมูลอาหารไปให้ฟังก์ชัน onReview
        />
      ))}
    </ScrollView>
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