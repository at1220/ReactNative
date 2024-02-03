import React, {useState, useEffect, useRef} from 'react';
import {
  ScrollView,
  View,
  Switch,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {ArrowRight2, Global, Cloud,Call,Message,Logout,Lock1,FingerScan,PasswordCheck,MessageText,Document} from 'iconsax-react-native';
import {images, colors, fontsize, icons} from '../constant';
import {UIHeader} from '../components/index';
import { Colors } from 'react-native/Libraries/NewAppScreen';
function Settings(props) {
  const [isEnabledLockApp,setIsEnabledLockApp] =useState(true)
  const [isEnabledFinger,setIsEnabledFinger] =useState(false)
  const [isEnabledChangePass,setIsEnabledChangePass] =useState(true)
  return (
    <View style={{flex: 1,}}>
      <UIHeader title={'Settings'} />
      <ScrollView  >
        <View
          style={{
            height: 45,
            borderRadius: 2,
            justifyContent: 'center',
            backgroundColor:colors.backgray
            
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 17,
              color: colors.primary,
              fontWeight: 'bold',
              marginLeft: 10,
            }}>
            Common
          </Text>
        </View>
        <TouchableOpacity
        onPress={()=>{
          alert('touch language')
        }}
         style={{flexDirection: 'row',alignItems:'center',marginHorizontal:5,paddingVertical:7}}>
            <Global size={19} color={colors.rest} marginRight={1} />
            <Text
            style={{
              color: 'black',
              fontSize: 15,
              color: 'black',
              marginLeft: 10,
            }}>
            Language
          </Text>
          <View style={{flex:1}}/>
          <Text
            style={{
              color: colors.disable,
              fontSize: 12,
              marginLeft: 10,
            }}>
            English
          </Text>
          <ArrowRight2 size={18} color={colors.disable} marginRight={1} marginTop={2}/>
          </TouchableOpacity>
          <TouchableOpacity
        onPress={()=>{
          alert('touch enviroment')
        }}
         style={{flexDirection: 'row',alignItems:'center',marginHorizontal:5,paddingVertical:7}}>
            <Cloud size={19} color={colors.rest} marginRight={1} />
            <Text
            style={{
              color: 'black',
              fontSize: 15,
              color: 'black',
              marginLeft: 10,
            }}>
            Enviroment
          </Text>
          <View style={{flex:1}}/>
          <Text
            style={{
              color: colors.disable,
              fontSize: 12,
              marginLeft: 10,
            }}>
            Prodution
          </Text>
          <ArrowRight2 size={18} color={colors.disable} marginRight={1} marginTop={2}/>
          </TouchableOpacity>
          <View
          style={{
            height: 45,
            borderRadius: 2,
            justifyContent: 'center',
            backgroundColor:colors.backgray
            
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 17,
              color: colors.primary,
              fontWeight: 'bold',
              marginLeft: 10,
            }}>
            Account
          </Text>
        </View>
        <TouchableOpacity
        onPress={()=>{
          alert('touch Phone number')
        }}
         style={{flexDirection: 'row',alignItems:'center',marginHorizontal:5,paddingVertical:7}}>
            <Call size={19} color={colors.rest} marginRight={1} />
            <Text
            style={{
              color: 'black',
              fontSize: 15,
              color: 'black',
              marginLeft: 10,
            }}>
            Phone number
          </Text>
          <View style={{flex:1}}/>
          <ArrowRight2 size={18} color={colors.disable} marginRight={1} marginTop={2}/>
          </TouchableOpacity>
          <TouchableOpacity
        onPress={()=>{
          alert('touch email')
        }}
         style={{flexDirection: 'row',alignItems:'center',marginHorizontal:5,paddingVertical:7}}>
            <Message size={19} color={colors.rest} marginRight={1} />
            <Text
            style={{
              color: 'black',
              fontSize: 15,
              color: 'black',
              marginLeft: 10,
            }}>
            Email
          </Text>
          <View style={{flex:1}}/>
          <ArrowRight2 size={18} color={colors.disable} marginRight={1} marginTop={2}/>
          </TouchableOpacity>
          <TouchableOpacity
        onPress={()=>{
          alert('touch sign out')
        }}
         style={{flexDirection: 'row',alignItems:'center',marginHorizontal:5,paddingVertical:7}}>
            <Logout size={19} color={colors.rest} marginRight={1} />
            <Text
            style={{
              color: 'black',
              fontSize: 15,
              color: 'black',
              marginLeft: 10,
            }}>
            Sign out
          </Text>
          <View style={{flex:1}}/>
          <ArrowRight2 size={18} color={colors.disable} marginRight={1} marginTop={2}/>
          </TouchableOpacity>
          <View
          style={{
            height: 45,
            borderRadius: 2,
            justifyContent: 'center',
            backgroundColor:colors.backgray
            
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 17,
              color: colors.primary,
              fontWeight: 'bold',
              marginLeft: 10,
            }}>
            Security
          </Text>
        </View>
        <View
         style={{flexDirection: 'row',alignItems:'center',marginHorizontal:5,paddingVertical:7}}>
            <Lock1 size={19} color={colors.rest} marginRight={1} />
            <Text
            style={{
              color: 'black',
              fontSize: 15,
              color: 'black',
              marginLeft: 10,
            }}>
            Lock app in background 
          </Text>
          <View style={{flex:1}}/>
          <Switch
        trackColor={{false: colors.disable, true: colors.primary}}
        thumbColor={isEnabledLockApp ? colors.primary : colors.disable}
        onValueChange={()=>{
          setIsEnabledLockApp(!isEnabledLockApp)
        }}
        value={isEnabledLockApp}
      />
          </View>
          <View
         style={{flexDirection: 'row',alignItems:'center',marginHorizontal:5,paddingVertical:7}}>
            <FingerScan size={19} color={colors.rest} marginRight={1} />
            <Text
            style={{
              color: 'black',
              fontSize: 15,
              color: 'black',
              marginLeft: 10,
            }}>
            Use fingerprint
          </Text>
          <View style={{flex:1}}/>
          <Switch
        trackColor={{false: colors.disable, true: colors.primary}}
        thumbColor={isEnabledFinger ? colors.primary : colors.disable}
        onValueChange={()=>{
          setIsEnabledFinger(!isEnabledFinger)
        }}
        value={isEnabledFinger}
      />
          </View>
          <View
         style={{flexDirection: 'row',alignItems:'center',marginHorizontal:5,paddingVertical:7}}>
            <PasswordCheck size={19} color={colors.rest} marginRight={1} />
            <Text
            style={{
              color: 'black',
              fontSize: 15,
              color: 'black',
              marginLeft: 10,
            }}>
            Change password
          </Text>
          <View style={{flex:1}}/>
          <Switch
        trackColor={{false: colors.disable, true: colors.primary}}
        thumbColor={isEnabledChangePass ? colors.primary : Colors.disable}
        onValueChange={()=>{
          setIsEnabledChangePass(!isEnabledChangePass)
        }}
        value={isEnabledChangePass}
      />
          </View>
          <View
          style={{
            height: 45,
            borderRadius: 2,
            justifyContent: 'center',
            backgroundColor:colors.backgray
            
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 17,
              color: colors.primary,
              fontWeight: 'bold',
              marginLeft: 10,
            }}>
            Mics
          </Text>
        </View>
        <TouchableOpacity
        onPress={()=>{
          alert('touch service')
        }}
         style={{flexDirection: 'row',alignItems:'center',marginHorizontal:5,paddingVertical:7}}>
            <MessageText size={19} color={colors.rest} marginRight={1} />
            <Text
            style={{
              color: 'black',
              fontSize: 15,
              color: 'black',
              marginLeft: 10,
            }}>
            Term of service
          </Text>
          <View style={{flex:1}}/>
          <ArrowRight2 size={18} color={colors.disable} marginRight={1} marginTop={2}/>
          </TouchableOpacity>
          <TouchableOpacity
        onPress={()=>{
          alert('touch source')
        }}
         style={{flexDirection: 'row',alignItems:'center',marginHorizontal:5,paddingVertical:7}}>
            <Document size={19} color={colors.rest} marginRight={1} />
            <Text
            style={{
              color: 'black',
              fontSize: 15,
              color: 'black',
              marginLeft: 10,
            }}>
            Open source licenses
          </Text>
          <View style={{flex:1}}/>
          <ArrowRight2 size={18} color={colors.disable} marginRight={1} marginTop={2}/>
          </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
export default Settings;
