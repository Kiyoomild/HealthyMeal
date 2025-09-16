import React from 'react'; // นำเข้า React
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'; // นำเข้า component ที่จำเป็นจาก React Native
import { AntDesign } from '@expo/vector-icons'; // นำเข้าไอคอนจาก AntDesign

// ฟังก์ชัน OrderCard ใช้สำหรับแสดงข้อมูลการสั่งซื้อของผู้ใช้
export default function OrderCard({ 
  name, 
  price, 
  time, 
  itemCount = "1 item", // ค่าเริ่มต้นของจำนวนไอเท็มคือ 1 ชิ้น
  status, 
  imageUrl,
  onTrackDriver,
  onCancelOrder,
  onOrderAgain,
  onLeaveReview
}) {
  // การกำหนดว่าแสดงปุ่มอะไรขึ้นอยู่กับสถานะของคำสั่งซื้อ
  const showCancelOrder = status === 'Order Placed';
  const showTrackDriver = status === 'Order Placed';
  const showOrderAgain = status !== 'Order Placed';
  const showLeaveReview = status === 'Order delivered';
  const showOrderCancelled = status === 'Order Cancelled';

  return (
    // Container หลักสำหรับแต่ละคำสั่งซื้อ
    <View style={styles.container}>
      {/* รายละเอียดคำสั่งซื้อ */}
      <View style={styles.content}>
        {/* แสดงรูปภาพของอาหาร */}
        <Image 
          source={imageUrl} 
          style={styles.image} 
        />
        {/* รายละเอียดของคำสั่งซื้อ */}
        <View style={styles.details}>
          <View style={styles.header}>
            <Text style={styles.name}>{name}</Text> {/* ชื่อของอาหาร */}
            <Text style={styles.price}>{price}</Text> {/* ราคา */}
          </View>

          <View style={styles.header}>
            <Text style={styles.time}>{time}</Text> {/* เวลาที่สั่งซื้อ */}
            <Text style={styles.items}>{itemCount}</Text> {/* จำนวนไอเท็ม */}
          </View>
          
          {showOrderCancelled && (
            // ถ้าสถานะคำสั่งซื้อคือ 'Order Cancelled'
            <View style={styles.statusContainer}>
              <AntDesign name="clockcircleo" size={14} color="#FF3B30" /> {/* ไอคอนเวลาที่แสดงสถานะยกเลิก */}
              <Text style={styles.cancelledText}>Order Cancelled</Text> {/* ข้อความแสดงสถานะคำสั่งซื้อถูกยกเลิก */}
            </View>
          )}
          
          {/* แสดงสถานะคำสั่งซื้อถ้ายังไม่ถูกยกเลิก */}
          {!showOrderCancelled && status && (
            <Text style={[styles.status, { color: '#FF9500' }]}>{status}</Text>
          )}
        </View>
      </View>
      
      {/* ส่วนของปุ่มต่างๆ ที่สามารถกดได้ */}
      <View style={styles.actions}>
        {/* ปุ่มยกเลิกคำสั่งซื้อ */}
        {showCancelOrder && (
          <TouchableOpacity style={styles.cancelButton} onPress={onCancelOrder}>
            <Text style={styles.cancelButtonText}>Cancel Order</Text>
          </TouchableOpacity>
        )}
        
        {/* ปุ่มติดตามคนขับ */}
        {showTrackDriver && (
          <TouchableOpacity style={styles.trackButton} onPress={onTrackDriver}>
            <Text style={styles.trackButtonText}>Track Driver</Text>
          </TouchableOpacity>
        )}
        
        {/* ปุ่มสำหรับให้รีวิวคำสั่งซื้อ */}
        {showLeaveReview && (
          <TouchableOpacity style={styles.reviewButton} onPress={onLeaveReview}>
            <Text style={styles.reviewButtonText}>Leave a review</Text>
          </TouchableOpacity>
        )}
        
        {/* ปุ่มสั่งซ้ำ */}
        {showOrderAgain && (
          <TouchableOpacity style={styles.orderAgainButton} onPress={onOrderAgain}>
            <Text style={styles.orderAgainButtonText}>Order again</Text>
          </TouchableOpacity>
        )}
        
      </View>
      <View style={styles.divider} /> {/* เส้นแบ่งระหว่างคำสั่งซื้อ */}
    </View>
  );
}

// สไตล์ของ OrderCard
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF', // พื้นหลังของคำสั่งซื้อเป็นสีขาว
    borderRadius: 0, // ไม่มีการทำมุมโค้ง
    marginBottom: 1, // เว้นระยะห่างด้านล่าง 1px
  },
  content: {
    flexDirection: 'row', // จัดเนื้อหาภายในเป็นแถว
    padding: 10, // เว้นพื้นที่รอบๆ เนื้อหาภายใน 10px
  },
  image: {
    width: 70, // ขนาดรูปภาพ 70px
    height: 70, // ขนาดรูปภาพ 70px
    borderRadius: 8, // มุมโค้งของรูปภาพ
  },
  details: {
    flex: 1, // ให้เนื้อหาภายในขยายเต็มพื้นที่
    marginLeft: 10, // เว้นระยะห่างทางซ้าย 10px
    justifyContent: 'space-between', // จัดเนื้อหาให้มีระยะห่างระหว่างกัน
  },
  header: {
    flexDirection: 'row', // จัดเนื้อหาเป็นแถว
    justifyContent: 'space-between', // จัดเนื้อหาซ้ายขวา
    alignItems: 'center', // จัดเนื้อหาให้อยู่ในแนวตั้ง
  },
  name: {
    fontSize: 14, // ขนาดฟอนต์ชื่ออาหาร
    fontWeight: '500', // น้ำหนักฟอนต์กลาง
  },
  price: {
    fontSize: 14, // ขนาดฟอนต์ราคา
    fontWeight: '500', // น้ำหนักฟอนต์กลาง
  },
  time: {
    fontSize: 12, // ขนาดฟอนต์เวลา
    color: '#8E8E93', // สีเทาอ่อน
  },
  items: {
    fontSize: 12, // ขนาดฟอนต์จำนวนไอเท็ม
    color: '#8E8E93', // สีเทาอ่อน
  },
  status: {
    fontSize: 12, // ขนาดฟอนต์ของสถานะ
    marginTop: 4, // เว้นระยะห่างจากข้อความด้านบน 4px
  },
  statusContainer: {
    flexDirection: 'row', // จัดเนื้อหาในแถว
    alignItems: 'center', // จัดเนื้อหาให้ตรงกลางแนวตั้ง
    marginTop: 4, // เว้นระยะห่างด้านบน 4px
  },
  cancelledText: {
    fontSize: 12, // ขนาดฟอนต์ของข้อความ "Order Cancelled"
    color: '#FF3B30', // สีแดง
    marginLeft: 4, // เว้นระยะห่างทางซ้าย 4px
  },
  divider: {
    height: 1, // ความสูงของเส้นแบ่ง 1px
    backgroundColor: '#E5E5EA', // สีของเส้นแบ่งเป็นสีเทาอ่อน
    marginHorizontal: 10, // เว้นระยะห่างทางซ้ายและขวา 10px
  },
  actions: {
    flexDirection: 'row', // จัดปุ่มในแนวนอน
    justifyContent: 'flex-end', // จัดให้ปุ่มอยู่ทางขวา
    padding: 10, // เว้นพื้นที่รอบๆ ปุ่ม 10px
    gap: 90, // เว้นระยะห่างระหว่างปุ่ม
  },
  cancelButton: {
    backgroundColor: '#FF5722', // สีพื้นหลังปุ่มยกเลิก
    paddingVertical: 6, // เว้นระยะห่างด้านบนและด้านล่าง 6px
    paddingHorizontal: 15, // เว้นระยะห่างด้านซ้ายและขวา 15px
    borderRadius: 15, // ทำให้มุมปุ่มโค้ง
  },
  cancelButtonText: {
    color: '#FFFFFF', // สีของข้อความในปุ่มเป็นสีขาว
    fontSize: 12, // ขนาดฟอนต์ 12px
  },
  trackButton: {
    backgroundColor: '#FFE0D6', // สีพื้นหลังของปุ่มติดตามคนขับ
    paddingVertical: 6, // เว้นระยะห่างด้านบนและด้านล่าง 6px
    paddingHorizontal: 15, // เว้นระยะห่างด้านซ้ายและขวา 15px
    borderRadius: 15, // ทำมุมให้โค้ง
  },
  trackButtonText: {
    color: '#FF5722', // สีของข้อความในปุ่ม
    fontSize: 12, // ขนาดฟอนต์ 12px
  },
  reviewButton: {
    backgroundColor: '#FFE0D6', // สีพื้นหลังของปุ่มรีวิว
    paddingVertical: 6, // เว้นระยะห่างด้านบนและด้านล่าง 6px
    paddingHorizontal: 15, // เว้นระยะห่างด้านซ้ายและขวา 15px
    borderRadius: 15, // ทำมุมให้โค้ง
  },
  reviewButtonText: {
    color: '#FF5722', // สีของข้อความในปุ่ม
    fontSize: 12, // ขนาดฟอนต์ 12px
  },
  orderAgainButton: {
    backgroundColor: '#FFE0D6', // สีพื้นหลังของปุ่มสั่งซ้ำ
    paddingVertical: 6, // เว้นระยะห่างด้านบนและด้านล่าง 6px
    paddingHorizontal: 15, // เว้นระยะห่างด้านซ้ายและขวา 15px
    borderRadius: 15, // ทำมุมให้โค้ง
  },
  orderAgainButtonText: {
    color: '#FF5722', // สีของข้อความในปุ่ม
    fontSize: 12, // ขนาดฟอนต์ 12px
  },
});

