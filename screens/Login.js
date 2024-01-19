import React, {useState, useEffect, useRef} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import {images, color, fontsize, icons} from '../constant';
import {isValidUserName, isValidPassword} from '../utilies/Validations';
function Login(props) {
  const [keyboardIsShown, setKeyboardIsShown] = useState(false);
  //state form valydating
  const [errorUserName, setErrorUserName] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  //state to store email/password
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const isValidation = () =>
    userName.length > 0 &&
    password.length > 0 &&
    isValidUserName(userName) == true &&
    isValidPassword(password) == true;
  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      //alert('key boar');
      setKeyboardIsShown(true);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      //alert('hide');
      setKeyboardIsShown(false);
    });
  });
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 100, backgroundColor: 'white'}}>
      {keyboardIsShown == false && (
        //logo view
        <View
          style={{
            flex: 25,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: fontsize.h2,
              fontWeight: 'bold',
              width: '50%',
              marginLeft: 15,
            }}>
            Đăng nhập
          </Text>
          <Image
            //tintColor={color.primary}
            source={images.logoLogin}
            style={{
              width: 200,
              height: 150,
              backgroundColor: 'blue',
              alignSelf: 'center',
            }}
          />
        </View>
      )}
      <View style={{flex: 35}}>
        {/* input username */}
        <View style={{marginHorizontal: 15}}>
          <Text
            style={{
              color: color.primary,
              fontSize: fontsize.h3,
            }}>
            Tên đăng nhập:
          </Text>
          <TextInput
            onChangeText={username => {
              // if(isValidUserName(username)==false){
              //   setErrorUserName('tên người dùng sai định dạng')
              // }else{
              //   setErrorUserName('')
              // }
              setErrorUserName(
                isValidUserName(username) == true
                  ? ''
                  : 'tên người dùng sai định dạng',
              );
              setUserName(username);
            }}
            placeholder="nhập tài khoản *"
          />

          <View
            style={{
              height: 0.5,
              backgroundColor: color.primary,
              width: '100%',
              marginBottom: 5,
            }}
          />
          <Text style={{color: 'red', fontSize: fontsize.h4}}>
            {errorUserName}
          </Text>
        </View>
        {/* input password */}
        <View style={{marginHorizontal: 15}}>
          <Text
            style={{
              color: color.primary,
              fontSize: fontsize.h3,
            }}>
            Mật khẩu:
          </Text>
          <TextInput
            onChangeText={pass => {
              setErrorPassword(
                isValidPassword(pass) == true
                  ? ''
                  : 'Mật khẩu phải từ 6 trở lên',
              );
              setPassword(pass);
            }}
            secureTextEntry={true}
            placeholder="nhập mật khẩu *"
          />

          <View
            style={{
              height: 0.5,
              backgroundColor: color.primary,
              width: '100%',
              marginBottom: 5,
            }}
          />
          <Text style={{color: 'red', fontSize: fontsize.h4}}>
            {errorPassword}
          </Text>
        </View>
      </View>
      {/* Login btn */}
      <View style={{flex: 15}}>
        <TouchableOpacity
          disabled={isValidation() == false}
          onPress={() => alert(`username = ${userName} pass = ${password}`)}
          style={{
            backgroundColor:
              isValidation() == true ? color.color1 : color.disable,
            alignItems: 'center',
            justifyContent: 'center',
            width: '50%',
            alignSelf: 'center',
            borderRadius: 30,
          }}>
          <Text
            style={{
              padding: 8,
              fontSize: fontsize.h3,
              fontWeight: 'bold',
              color: 'black',
            }}>
            Đăng nhập
          </Text>
        </TouchableOpacity>
        {keyboardIsShown == false && (
          <TouchableOpacity
            onPress={() => alert('forget pass')}
            style={{padding: 20}}>
            <Text
              style={{
                padding: 8,
                fontSize: fontsize.h4,
                fontWeight: 'bold',
                color: color.textcolor,
                alignSelf: 'center',
              }}>
              Quên mật khẩu?
            </Text>
          </TouchableOpacity>
        )}
      </View>
      {keyboardIsShown == false && (
        <View style={{flex: 25}}>
          <View style={{height: 40}}>
            <View
              style={{
                height: 0.5,
                backgroundColor: 'black',
                marginTop: 30,
                marginHorizontal: 35,
              }}
            />
          </View>
        </View>
      )}
    </KeyboardAvoidingView>
  );
}
export default Login;
