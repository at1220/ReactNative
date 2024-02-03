import React, {useState, useEffect, useRef} from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import {images, colors, fontsize, icons} from '../../constant';

function ChatItem(props) {
  let {name, url, message, numberOfUnreadMessage} = props.user;
  const {onPress} = props;
  return (
    <TouchableOpacity
      style={{
        paddingStart: 20,
        paddingTop: 10,
        flexDirection: 'row',
       
      }} onPress={onPress} >
      <View >
        <Image
          style={{
            width: 60,
            height: 60,
            resizeMode: 'cover',
            borderRadius: 350,
            marginRight: 15,
          }}
          source={{
            uri: url,
          }}
        />
        {numberOfUnreadMessage > 0 && (
          <Text
            style={{
              position: 'absolute',
              right: numberOfUnreadMessage > 9 ? 12 : 18,
              fontSize: 12,
              backgroundColor: colors.sold,
              fontWeight: 'bold',
              color: 'white',
              borderRadius: 8,
              paddingHorizontal: 4,
            }}>
            {numberOfUnreadMessage > 9 ? '9+' : numberOfUnreadMessage}
          </Text>
        )}
      </View>
      <View style={{flexDirection: 'column'}}>
        <Text
          style={{color: 'black', fontSize: fontsize.h4, fontWeight: 'bold'}}>
          {name}
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 13,
            color: numberOfUnreadMessage > 0 ? 'black' : colors.disable,
            fontWeight: numberOfUnreadMessage > 0 ? 'bold' : 500,
          }}>
          {message}
        </Text>
      </View >
      <View style={{flexDirection: 'column',flex:1,alignItems:'flex-end',marginRight:10 }}>
        <Text>4 min ago</Text>
      </View>
    </TouchableOpacity>
  );
}
export default ChatItem;
