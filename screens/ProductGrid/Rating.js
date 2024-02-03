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
import {Heart, Star1} from 'iconsax-react-native';
import {colors, fontsize} from '../../constant';
function Rating(props) {
  const {numberOfRating} = props;
  return (
    <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
      {[0, 1, 2, 3, 4].map(item => (
        <Star1
          key={`${item}`}
          size={18}
          color={item <= numberOfRating - 1 ? colors.rating : colors.disable}
          marginRight={1}
          variant={item <= numberOfRating - 1 ? 'Bold' : 'Outline'}
        />
      ))}
    </View>
  );
}
export default Rating;
