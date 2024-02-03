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
  ScrollView,
} from 'react-native';
import {images, colors, fontsize, icons} from '../constant';
import {isValidUserName, isValidPassword} from '../utilies/Validations';
import {auth,firebaseDatabase,createUserWithEmailAndPassword} from '../firebase/firebase'
function Register(props) {
  const [keyboardIsShown, setKeyboardIsShown] = useState(false);
  //state form valydating
  const [errorUserName, setErrorUserName] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorRePassword, setErrorRePassword] = useState('');
  //state to store email/password
  const [userName, setUserName] = useState('tuan22ee');
  const [password, setPassword] = useState('tuan123');
  const [repassword, setRePassword] = useState('tuan123');
  const isValidation = () =>
    userName.length > 0 &&
    password.length > 0 &&
    isValidUserName(userName) == true &&
    isValidPassword(password) == true &&
    repassword == password
  useEffect(() => {
    //const xx = auth
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
        //logo
        <View
          style={{
            flex: 30,
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
            Đăng ký nhân viên mới
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
      <View
        style={{
          flex: 50,
          backgroundColor: colors.background,
          borderRadius: 20,
          marginHorizontal: 10,
          padding: 10,
        }}>
        {/* input username */}
        <View style={{marginHorizontal: 5}}>
          <Text
            style={{
              color: colors.primary,
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
            value={userName}
            placeholder="nhập tài khoản *"
            style={{backgroundColor: 'white', borderRadius: 15}}
          />

          <View
            style={{
              height: 1,
              backgroundColor: colors.primary,
              width: '100%',
            }}
          />
          <Text style={{color: 'red', fontSize: fontsize.h4}}>
            {errorUserName}
          </Text>
        </View>
        {/* input password */}
        <View style={{marginHorizontal: 5}}>
          <Text
            style={{
              color: colors.primary,
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
            value={password}
            placeholder="nhập mật khẩu *"
            style={{backgroundColor: 'white', borderRadius: 15}}
          />
        <Text style={{color: 'red', fontSize: fontsize.h4}}>
            {errorPassword}
          </Text>
          <View
            style={{
              height: 1,
              backgroundColor: colors.primary,
              width: '100%',
            }}
          />
        </View>
        {/* input Re-password */}
        <View style={{marginHorizontal: 5}}>
          <Text
            style={{
              color: colors.primary,
              fontSize: fontsize.h3,
            }}>
            Xác nhận mật khẩu:
          </Text>
          <Text style={{color: 'red', fontSize: fontsize.h4}}>
            {errorRePassword}
          </Text>
          <TextInput
            onChangeText={text => {
              setRePassword(text)
            }}
            onBlur={() => setErrorRePassword( password === repassword ? '' : 'mật khẩu không trùng')}
            value={repassword}
            secureTextEntry={true}
            placeholder="Xác nhận mật khẩu *"
            style={{backgroundColor: 'white', borderRadius: 15}}
          />

          <View
            style={{
              height: 1,
              backgroundColor: colors.primary,
              width: '100%',
              marginBottom: 5,
            }}
          />
        </View>
      </View>
      {/* Register btn */}
      <View style={{flex: 20, marginTop: 20}}>
        <TouchableOpacity
          disabled={isValidation() == false}
          onPress={() => alert(`username = ${userName} pass = ${password}`)}
          style={{
            backgroundColor:
              isValidation() == true ? colors.color1 : colors.disable,
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
            Tạo nhân viên mới
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
export default Register;
