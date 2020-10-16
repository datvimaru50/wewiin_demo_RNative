import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import LoginScreen from "./components/LoginScreen"
import Dashboard from "./components/Dashboard"
import CourseInfoDetail from "./components/CourseInfoDetail"
import CourseLearning from "./components/CourseLearning"
import Profile from "./components/Profile"

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={LoginScreen}
        />
        <Stack.Screen name="Dashboard" options={{ title: 'Dashboard' }}  component={Dashboard} />
        <Stack.Screen name="CourseInfoDetail" options={{ title: 'Course Info' }}  component={CourseInfoDetail} />
        <Stack.Screen name="CourseLearning" options={{ title: 'Course Info' }}  component={CourseLearning} />
        <Stack.Screen name="Profile" options={{ title: 'Profile' }}  component={Profile} />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}


