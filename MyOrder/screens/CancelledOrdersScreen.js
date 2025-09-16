import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import OrderCard from '../OrderCard';

export default function CancelledOrdersScreen() {
  const orders = [
    {
      name: 'แซนวิชแฮมชีส',
      price: '115฿',
      time: '21 Apr , 23.00 pm',
      status: 'Order Cancelled',
      imageUrl: require('../../../assets/logo/แซนวิชแฮมชีส.png'),
    },
  ];
  
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {orders.map((order, index) => (
        <OrderCard
          key={index}
          {...order}
          onOrderAgain={() => {}}
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
    paddingBottom: 70,
  },
});