import React, {useState, useEffect, useRef} from 'react';
import {
  ScrollView,
  View,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Filter, SearchNormal, Star1} from 'iconsax-react-native';
import {images, color, fontsize, icons} from '../constant';
import {UIHeader} from '../components/index';
function Settings(props) {
  return (
    <View style={{flex: 1}}>
      <UIHeader title={'Settings'} />
      <ScrollView>
        <View
          style={{
            height: 40,
            borderRadius: 2,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 17,
              color: color.primary,
              fontWeight: 'bold',
              marginLeft: 10,
            }}>
            Common
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Star1 size={18} color={color.active} marginRight={1} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
export default Settings;
