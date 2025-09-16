// screens/ReviewScreen.js
import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Header from '../Header';
import RatingStars from '../RatingStars';

export default function ReviewScreen({ onBack, foodData }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  
  const foodName = foodData ? foodData.name : 'เมนูอาหาร';
  const foodImage = foodData ? foodData.imageUrl : require('../../../assets/logo/แซนวิชแฮมชีส.png');
  
  return (
    <View style={styles.container}>
      <Header title="Leave a review" onBack={onBack} />
      
      {/* ส่วนเนื้อหาด้านล่าง Header ที่มีพื้นหลังขาวโค้งมน */}
      <View style={styles.whiteCardContainer}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.content}>
            <View style={styles.imageContainer}>
              <Image
                source={foodImage}
                style={styles.foodImage}
                resizeMode="cover"
              />w
            </View>
            <Text style={styles.dishName}>{foodName}</Text>
            <Text style={styles.ratingPrompt}>We'd love to know what you think of your dish</Text>
            <RatingStars rating={rating} setRating={setRating} />
            <Text style={styles.commentPrompt}>Leave us your comment!</Text>
            <View style={styles.commentBox}>
              <TextInput
                style={styles.commentInput}
                placeholder="Write Review"
                placeholderTextColor="#999"
                multiline
                value={comment}
                onChangeText={setComment}
              />
            </View>
            <View style={styles.actions}>
              <TouchableOpacity style={styles.cancelButton} onPress={onBack}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.submitButton}>
                <Text style={styles.submitButtonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFCC33', // สีพื้นหลังส่วน header
  },
  whiteCardContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -10, // เพื่อให้ขอบโค้งทับซ้อนกับ header เล็กน้อย
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  content: {
    padding: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  foodImage: {
    width: 120,
    height: 100,
    borderRadius: 8,
  },
  dishName: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 15,
  },
  ratingPrompt: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 25,
    marginBottom: 15,
  },
  commentPrompt: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 25,
  },
  commentBox: {
    backgroundColor: '#FFF9E6',
    borderRadius: 10,
    padding: 15,
    marginTop: 15,
    height: 100,
  },
  commentInput: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  cancelButton: {
    backgroundColor: '#FFE0D6',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
  },
  cancelButtonText: {
    fontSize: 14,
    color: '#FF5722',
  },
  submitButton: {
    backgroundColor: '#FF5722',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
  },
  submitButtonText: {
    fontSize: 14,
    color: '#FFFFFF',
  },
});