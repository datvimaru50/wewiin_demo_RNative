import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


import { RNCamera } from 'react-native-camera';

const GUTTER = 15;

export default function Profile() {
  // let camera;

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
            <Text>Họ và tên: Vu quoc Dat</Text>
            <Text>Ngày sinh: 11-11-1991</Text>
            <Text>Giới tính: Nam</Text>
        </View>

        <RNCamera 
          ref={ref => {this.camera = ref}}
          captureAudio={false}
          style={{height: 200, width: '100%'}}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    alignItems: "center",
    marginBottom: 10
  }
});