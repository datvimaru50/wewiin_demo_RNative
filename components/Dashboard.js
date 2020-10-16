import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const GUTTER = 15;

// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// const Stack = createStackNavigator();

export default function Dashboard({navigation}) {
  return (
        <View style={{flex: 1}}>
            <ScrollView>

                <Text style={styles.courseGroupTitle}>Khóa học ngôn ngữ</Text>

                <ScrollView horizontal style={{paddingLeft: GUTTER}}>
                    <CourseItem 
                        name="Khóa học 1" 
                        desc="Khóa học nhập môn Tiếng Anh cho người mất gốc" 
                        color="red"
                        navigation={navigation}
                    />
                    <CourseItem 
                        name="Khóa học 2" 
                        color="red"
                        desc="Khóa học HSK 6"
                        navigation={navigation} 
                    />
                    <CourseItem 
                        name="Khóa học 3" 
                        color="red"
                        desc="Khóa học tiếng Nhật N3" 
                        navigation={navigation}
                    />
                </ScrollView>

                <Text style={styles.courseGroupTitle}>Chuyên ngành</Text>

                <ScrollView horizontal style={{paddingLeft: GUTTER}}>
                    <CourseItem name="Khóa học 4" color="blue" />
                    <CourseItem name="Khóa học 5" color="blue" />
                    <CourseItem name="Khóa học 6" color="blue" />
                </ScrollView>

                <Text style={styles.courseGroupTitle}>Khóa học khác</Text>

                <ScrollView horizontal style={{paddingLeft: GUTTER}}>
                    <CourseItem name="Khóa học 4" color="yellow" />
                    <CourseItem name="Khóa học 5" color="yellow" />
                    <CourseItem name="Khóa học 6" color="yellow" />
                </ScrollView>

            </ScrollView>

            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                <Button 
                    title="Me"
                    onPress={() => {
                        navigation.navigate('Profile');
                    }}
                />
                <Button title="Tất cả" />
                <Button title="Đang học" />
                <Button 
                    title="Thông báo" 
                    onPress={() => {
                        navigation.navigate('CourseInfoDetail');
                    }}
                />
            </View>


        </View>
      
    
    
  );
}

function CourseItem(props){
    return (
        <View style={styles.courseItem}>
            <View style={{...styles.courseImage, backgroundColor: props.color}} />
            <Text style={styles.courseName}>{props.name}</Text>
            <Text style={styles.courseDesc}>{props.desc}</Text>

            <Button 
                title="Học khóa này" 
                onPress={() => {
                props.navigation.navigate('CourseInfoDetail');
                }}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    courseItem: {
        width: 250, 
        height: 300, 
        marginRight: 10,
    },
    courseImage: {
        width: '100%', 
        height: 150, 
        // backgroundColor: props.color
    },
    courseGroupTitle:{
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        paddingLeft: GUTTER,
        marginVertical: 5,
    },
    courseName: {
        fontSize: 16,
        fontWeight: 'bold',
        
    }
  });