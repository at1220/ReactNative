import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import {ArchiveTick} from 'iconsax-react-native';
import React from 'react';
import {color, fontsize} from '../constant';
function UIHeader(props) {
  const {title} = props;
  return (
    <View
      style={{
        height: 60,
        backgroundColor: color.primary,
      }}>
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
    </View>
  );
}
export default UIHeader;
