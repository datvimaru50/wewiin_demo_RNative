import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function LoginScreen({ navigation }) {
  const [username, onChangeUser] = React.useState('hocvien123');
  const [password, onChangePass] = React.useState('');

  const userTxt = useState("Tên đăng nhập");
  const pwdTxt = useState("Mật khẩu");

  const GUTTER = 15;
  return (
        
      <View style={{flex: 1}}>

        {/* 
          ***************************************
                  APP LOGO
          ***************************************                  
        */}
        <View style={styles.appLogo}>
          <Image 
            source={require("../logo.png")} 
            resizeMode="center" 
            // resizeMethod="scale"
          />
        </View>

        {/* 
          ***************************************
                  APP SIGNIN
          ***************************************                  
        */}
        <View 
          style={{height: 230, padding: GUTTER}}
        >
          <Text numberOfLines={1} style={styles.marginBottom}>{userTxt}</Text>
          <TextInput
            style={{...styles.signInput, ...styles.marginBottom}}
            onChangeText={text => onChangeUser(text)}
            value={username}
            textContentType="username"
            autoCompleteType="username"
          />
          
          <Text numberOfLines={1} style={styles.marginBottom}>{pwdTxt}</Text>
          <TextInput
            style={{...styles.signInput, ...styles.marginBottom}}
            onChangeText={text => onChangePass(text)}
            value={password}
            textContentType="password"
            autoCompleteType="password"
            secureTextEntry={true}
          />
          <Text style={{textAlign: "right"}}>{"Quên mật khẩu?"}</Text>
          
        </View>
        
        {/* 
          ***************************************
                  APP SIGNIN BUTTON
          ***************************************                  
        */}
        <View style={{height: 150, padding: GUTTER}}>
          <Button
            color="#ff7f45"
            onPress={() => {
              navigation.navigate('Dashboard');
              // alert('Đăng nhập thành công!');
            }}
            title="Đăng nhập"
          />

          <Text style={{marginVertical: 10, textAlign: "center"}}>{"Hoặc đăng nhập bằng:"}</Text>

          <View style={{flexDirection: "row", justifyContent: "space-between"}}>
            <TouchableOpacity
              style={{padding: 10, backgroundColor: "#3b5a9a", width: "49%"}}
              
            >
              <Text style={{color: "#fff", textAlign: "center"}}>Facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{padding: 10, backgroundColor: "#dc4e41", width: "49%"}}
              
            >
              <Text style={{color: "#fff", textAlign: "center"}}>Google</Text>
            </TouchableOpacity>
          
          </View>
        </View>
        
        {/* 
          ***************************************
                  APP COPYRIGHT TEXT
          ***************************************                  
        */}
        <View style={{flex: 0.5, justifyContent: "flex-end"}}>
          <Text style={{textAlign: "center"}}>{"Bản quyền thuộc về GET Jsc @2020"}</Text>
        </View>
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 23,
    color: 'red'
  },
  appLogo: {
    // flex: 2,
    height: 120,
    backgroundColor: '#1caba0', 
    alignItems: "center", 
    justifyContent: "center"
  },
  signInput: { 
    borderColor: 'gray', 
    borderWidth: 1,
    // marginBottom: 10 
  },
  marginBottom: {marginBottom: 10}
});