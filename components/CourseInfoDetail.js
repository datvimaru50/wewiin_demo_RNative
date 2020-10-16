import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const GUTTER = 15;

export default function CourseInfoDetail({navigation}) {
  return (
    <View style={{flex: 1}}>
        <View style={{width: "100%", height: 300, backgroundColor: "green"}} />
        <View style={{padding: 15}}>
            <Text style={{fontSize: 18, fontWeight: "bold"}}>Tiếng Anh cơ bản cho người mất gốc</Text>
            <Text style={{marginVertical: 10}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                <Button 
                    title="Vào khóa học"
                    onPress={() => {
                        navigation.navigate('CourseLearning');
                    }}
                />
                <Button title="Download" color="grey" />
            </View>
        </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  });