import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

// Signup/Login
import LoginScreen from "./Singup/LoginScreen";

// Onboarding
import AgeScreen from "./Singup/AgeScreen";
import WeightScreen from "./Singup/WeightScreen";
import HeightScreen from "./Singup/HeightScreen";
import GenderScreen from "./Singup/GenderScreen";
import DiseaseScreen from "./Singup/DiseaseScreen";
import FoodAllergyScreen from "./Singup/FoodAllergyScreen";

// Main Pages
import MainPage from "./Main/MainPage";
import MealPage from "./Category/MealPage";
import AppetizersPage from "./Category/AppetizersPage";
import DessertPage from "./Category/DessertPage";
import DrinksPage from "./Category/DrinksPage";
import SaladPage from "./Category/SaladPage";

// Detail Pages
import MealDetailPage from "./Category/Detail/MealDetailPage";
import AppetizersDetailPage from "./Category/Detail/AppetizersDetailPage";

// Filter Page
import FilterScreen from "../component/Filter/FilterScreen";

// Setting Page
import SettingsScreen from "./Setting/Setting";

// Order
import Setting from "./MyOrder/Setting";


const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        {/* Auth */}
        <Stack.Screen name="Login" component={LoginScreen} />

        {/* Onboarding */}
        <Stack.Screen name="Age" component={AgeScreen} />
        <Stack.Screen name="Weight" component={WeightScreen} />
        <Stack.Screen name="Height" component={HeightScreen} />
        <Stack.Screen name="Gender" component={GenderScreen} />
        <Stack.Screen name="Disease" component={DiseaseScreen} />
        <Stack.Screen name="FoodAllergy" component={FoodAllergyScreen} />

        {/* Main Pages */}
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="MealPage" component={MealPage} />
        <Stack.Screen name="AppetizersPage" component={AppetizersPage} />
        <Stack.Screen name="DessertPage" component={DessertPage} />
        <Stack.Screen name="DrinksPage" component={DrinksPage} />
        <Stack.Screen name="SaladPage" component={SaladPage} /> 

        {/* Detail Pages */}
        <Stack.Screen name="MealDetail" component={MealDetailPage} />
        <Stack.Screen name="AppetizersDetail" component={AppetizersDetailPage} />

        {/* Filter Pages */}
        <Stack.Screen name="Filter" component={FilterScreen} />

        {/* Setting Pages */}
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />

       {/* Setting Pages */}
       <Stack.Screen name="OrderScreen" component={Setting} />


        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
