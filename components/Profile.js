import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const GUTTER = 15;

export default function Profile() {
  return (
    <View style={{flex: 1, padding: GUTTER}}>
        <View style={styles.avatar}>
          <Image 
            source={require("../doremon.jpg")} 
            // resizeMode="center" 
            // resizeMethod="scale"
          />
        </View>

        <View style={{flexDirection: "row", marginBottom: 10, justifyContent: "space-between"}}>
            <Button 
                title="Upload"
                onPress={() => {
                    navigation.navigate('CourseLearning');
                }}
            />
            <Button title="Take photo" color="grey" />
        </View>

        <View>
            <Text>Họ và tên: Vũ Quốc Đạt</Text>
            <Text>Ngày sinh: 11-11-1991</Text>
            <Text>Giới tính: Nam</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    alignItems: "center",
    marginBottom: 10
  }
});