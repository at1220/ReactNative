import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import {ArchiveTick} from 'iconsax-react-native';
import React from 'react';
import {colors, fontsize} from '../constant';
import Icon from 'react-native-vector-icons/FontAwesome5';
function UIHeader(props) {
  const {title, leftIcon, rightIcon, onPressLeftIcon, onPressRightIcon} = props;
  return (
    <View
      style={{
        height: 60,
        backgroundColor: colors.primary,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      {leftIcon != undefined ? (
        <Icon
          name={leftIcon}
          size={25}
          color={'white'}
          style={{marginLeft: 10}}
          onPress={onPressLeftIcon}
        />
      ) : (
        <View style={{width: 50, height: 50}} />
      )}
      <Text
        style={{
          fontSize: fontsize.h3,
          alignSelf: 'center',
          color: 'white',
          fontWeight: 'bold',
          lineHeight: 52,
        }}>
        {title}
      </Text>
      {rightIcon != undefined ?<Icon
        name={rightIcon}
        size={20}
        color={'white'}
        style={{marginRight: 10}}
        onPress={onPressRightIcon}
      /> : <View style={{width:50,height:50}}/>}
    </View>
  );
}
export default UIHeader;
