import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SettingsScreen = ({ navigation }) => {
  const [age, setAge] = useState('20');
  const [weight, setWeight] = useState('175');
  const [height, setHeight] = useState('65');
  const [gender, setGender] = useState('Male');
  const [chronicConditions, setChronicConditions] = useState('โรคหัวใจ');
  const [allergicFoods, setAllergicFoods] = useState('-');

  const [genderDropdownVisible, setGenderDropdownVisible] = useState(false);
  const [conditionDropdownVisible, setConditionDropdownVisible] = useState(false);

  const genderOptions = ['Male', 'Female', 'Other'];
  const conditionOptions = ['โรคหัวใจ', 'เบาหวาน', 'ความดันโลหิตสูง', 'ไม่มีโรคประจำตัว'];

  const renderDropdown = (options, onSelect) => (
    <View style={styles.dropdownList}>
      {options.map((option, index) => (
        <TouchableOpacity key={index} onPress={() => { onSelect(option); }}>
          <Text style={styles.dropdownItem}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Age</Text>
          <TextInput
            style={styles.input}
            value={age}
            onChangeText={setAge}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Weight</Text>
          <TextInput
            style={styles.input}
            value={weight}
            onChangeText={setWeight}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Height</Text>
          <TextInput
            style={styles.input}
            value={height}
            onChangeText={setHeight}
            keyboardType="numeric"
          />
        </View>

        {/* Gender Dropdown */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Gender</Text>
          <TouchableOpacity
            style={styles.dropdown}
            onPress={() => setGenderDropdownVisible(!genderDropdownVisible)}
          >
            <Text style={styles.dropdownText}>{gender}</Text>
            <Ionicons name={genderDropdownVisible ? "chevron-up" : "chevron-down"} size={20} color="#000" />
          </TouchableOpacity>
          {genderDropdownVisible && renderDropdown(genderOptions, (option) => {
            setGender(option);
            setGenderDropdownVisible(false);
          })}
        </View>

        {/* Chronic conditions Dropdown */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Chronic conditions</Text>
          <TouchableOpacity
            style={styles.dropdown}
            onPress={() => setConditionDropdownVisible(!conditionDropdownVisible)}
          >
            <Text style={styles.dropdownText}>{chronicConditions}</Text>
            <Ionicons name={conditionDropdownVisible ? "chevron-up" : "chevron-down"} size={20} color="#000" />
          </TouchableOpacity>
          {conditionDropdownVisible && renderDropdown(conditionOptions, (option) => {
            setChronicConditions(option);
            setConditionDropdownVisible(false);
          })}
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Allergic foods</Text>
          <TextInput
            style={styles.input}
            value={allergicFoods}
            onChangeText={setAllergicFoods}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFC757',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333333',
  },
  input: {
    backgroundColor: '#FFF8E1',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
  },
  dropdown: {
    backgroundColor: '#FFF8E1',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownText: {
    fontSize: 16,
    color: '#000',
  },
  dropdownList: {
    backgroundColor: '#FFF8E1',
    borderRadius: 10,
    marginTop: 5,
    overflow: 'hidden',
  },
  dropdownItem: {
    padding: 12,
    fontSize: 16,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
});

export default SettingsScreen;