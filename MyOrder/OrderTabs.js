  import React from 'react'; // นำเข้า React
  import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'; // นำเข้า component ที่จำเป็น

  export default function OrderTabs({ activeTab, setActiveTab }) {
    return (
      <View style={styles.container}>
        {/* ปุ่มแต่ละแท็บ */}
        <TabButton 
          label="Active" 
          isActive={activeTab === 'active'} 
          onClick={() => setActiveTab('active')} 
          activeColor="#FF5722"
        />
        <TabButton 
          label="Completed" 
          isActive={activeTab === 'completed'} 
          onClick={() => setActiveTab('completed')} 
          activeColor="#FF5722"
        />
        <TabButton 
          label="Cancelled" 
          isActive={activeTab === 'cancelled'} 
          onClick={() => setActiveTab('cancelled')} 
          activeColor="#FF5722"
        />
      </View>
    );
  }

  function TabButton({ label, isActive, onClick, activeColor }) {
    const backgroundColor = isActive ? activeColor : '#FFE0D6'; // สีพื้นหลังของปุ่ม
    return (
      <TouchableOpacity
        style={[styles.tabButton, { backgroundColor }]}
        onPress={onClick}
      >
        <Text style={styles.tabButtonText}>{label}</Text> {/* แสดงชื่อแท็บ */}
      </TouchableOpacity>
    );
  }

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    paddingTop: 20,
    paddingBottom: 10,
    gap: 8,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -10,
  },
  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginRight: 8,
    flex: 1,
    alignItems: 'center',
  },
  tabButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
});
