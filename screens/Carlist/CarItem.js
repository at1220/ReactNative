import React, {useState, useEffect, useRef} from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import {images, colors, fontsize, icons} from '../../constant';

function _getColorFromStatus(status) {
  //   if (status.toLowerCase().trim() == 'đang chạy') {
  //     return color.active;
  //   } else if (status.toLowerCase().trim() == 'nghỉ') {
  //     return color.rest;
  //   } else if (<status className="toLower"></status>Case().trim() == 'đã bán') {
  //     return color.sold;
  //   }
  return status.toLowerCase().trim() == 'đang chạy'
    ? colors.active
    : status.toLowerCase().trim() == 'nghỉ'
    ? colors.rest
    : status.toLowerCase().trim() == 'đã bán'
    ? colors.sold
    : colors.primary;
}
function CarItem(props) {
  let {name, status, price, payload, url} = props.car;
  const {onPress} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: 150,
        paddingStart: 20,
        paddingTop: 10,
        flexDirection: 'row',
      }}>
      <Image
        style={{
          width: 120,
          height: 120,
          resizeMode: 'cover',
          borderRadius: 20,
          marginRight: 15,
        }}
        source={{
          uri: url,
        }}
      />
      <View style={{flex: 1, marginRight: 10}}>
        <Text
          style={{
            color: 'black',
            fontSize: fontsize.h4,
            fontWeight: 'bold',
          }}>
          {name}
        </Text>
        <View
          style={{
            height: 0.8,
            backgroundColor: 'black',
            width: '100%',
          }}
        />
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              color: 'gray',
              fontSize: fontsize.h4,
              marginRight: 15,
            }}>
            Trạng thái:
          </Text>
          <Text
            style={{
              color: _getColorFromStatus(status),
              fontSize: fontsize.h4,
            }}>
            {status}
          </Text>
        </View>
        <Text
          style={{
            color: 'gray',
            fontSize: fontsize.h4,
            marginRight: 15,
          }}>
          Giá: {price}
        </Text>
        <Text
          style={{
            color: 'gray',
            fontSize: fontsize.h4,
            marginRight: 15,
          }}>
          trọng tải: {payload}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
export default CarItem;
