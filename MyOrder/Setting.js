import React, { useState } from 'react'; // นำเข้า React และ hook useState
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native'; // นำเข้า component ที่จำเป็นจาก React Native
import Header from './Header'; // นำเข้า Header component
import OrderTabs from './OrderTabs'; // นำเข้า OrderTabs component
import ActiveOrdersScreen from './screens/ActiveOrdersScreen'; // นำเข้า ActiveOrdersScreen
import CompletedOrdersScreen from './screens/CompletedOrdersScreen'; // นำเข้า CompletedOrdersScreen
import CancelledOrdersScreen from './screens/CancelledOrdersScreen'; // นำเข้า CancelledOrdersScreen
import ReviewScreen from './screens/ReviewScreen'; // นำเข้า ReviewScreen

// ฟังก์ชันหลักของแอป
export default function Setting() {
  const [activeTab, setActiveTab] = useState('active'); // ตั้งค่าตัวแปร state activeTab เริ่มต้นเป็น 'active'
  const [activeScreen, setActiveScreen] = useState('orders'); // ตั้งค่าตัวแปร state activeScreen เริ่มต้นเป็น 'orders'
  const [selectedFood, setSelectedFood] = useState(null); // ตั้งค่าตัวแปร state selectedFood เริ่มต้นเป็น null

  // ฟังก์ชันสำหรับการเลือกอาหารเพื่อไปที่หน้ารีวิว
  const handleReviewFood = (food) => {
    setSelectedFood(food); // เก็บข้อมูลอาหารที่เลือก
    setActiveScreen('review'); // เปลี่ยนหน้าไปที่ 'review'
  };

  // ฟังก์ชัน renderContent ใช้ในการแสดงเนื้อหาภายในแอป
  const renderContent = () => {
    if (activeScreen === 'review') {
      // ถ้า activeScreen เป็น 'review' ให้แสดงหน้ารีวิว
      return <ReviewScreen onBack={() => setActiveScreen('orders')} foodData={selectedFood} />;
    }

    return (
      <>
        <Header title="My Orders" /> {/* แสดง Header Component */}
        <OrderTabs activeTab={activeTab} setActiveTab={setActiveTab} /> {/* แสดง OrderTabs Component */}
        {activeTab === 'active' && <ActiveOrdersScreen />} {/* ถ้า activeTab เป็น 'active' ให้แสดง ActiveOrdersScreen */}
        {activeTab === 'completed' && <CompletedOrdersScreen onReview={handleReviewFood} />} {/* ถ้า activeTab เป็น 'completed' ให้แสดง CompletedOrdersScreen */}
        {activeTab === 'cancelled' && <CancelledOrdersScreen />} {/* ถ้า activeTab เป็น 'cancelled' ให้แสดง CancelledOrdersScreen */}
      </>
    );
  };

  return (
    <>
      <StatusBar 
        barStyle="dark-content" // กำหนดสีของ status bar เป็น dark-content
        backgroundColor="#FFFFFF" // กำหนดสีพื้นหลังของ status bar
        translucent={false} // ปิดการใช้งาน translucent
      />
      <SafeAreaView style={styles.safeAreaTop} /> {/* สร้าง SafeAreaView สำหรับพื้นที่ของ status bar */}
      <SafeAreaView style={styles.safeAreaContainer}> {/* SafeAreaView สำหรับแสดงเนื้อหาหลัก */}
        {renderContent()} {/* เรียกใช้ฟังก์ชัน renderContent เพื่อแสดงเนื้อหาตามที่กำหนด */}
      </SafeAreaView>
    </>
  );
}

// กำหนดสไตล์ของคอมโพเนนต์
const styles = StyleSheet.create({
  safeAreaTop: {
    flex: 0, 
    backgroundColor: '#FFCC33', // สีพื้นหลังสำหรับ status bar
  },
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF', // พื้นหลังของแอป
  }
});