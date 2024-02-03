import React, {useState, useEffect, useRef} from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import {images, colors, fontsize, icons} from '../../constant';
import { screenWidth,screenHeight } from '../../utilies/Device';
function MessengerItem(props) {
  const {url,isSender,messenger,timestamp,showUrl} =props.item
  const {onPress} = props;
  return (
    <TouchableOpacity
      style={{
        paddingStart: 20,
        paddingTop: 10,
        flexDirection: 'row',
        alignItems:'center',
      }} 
      onPress={onPress}
      >
        <View style={{
            alignItems: isSender == true ? 'flex-start' : 'flex-end',
            flex:1,
           margin:1
        }}>
      { isSender == true ? <View style = {{flexDirection:'row', }}>
       { showUrl == true ? <Image
          style={{
            width: 30,
            height: 30,
            resizeMode: 'cover',
            borderRadius: 15,
            marginRight: 10,
            alignSelf:'flex-end'
            
          }}
          source={{
            uri: url,
          }}/>: <View style ={{ width: 30,
            height: 30, marginRight: 10}}/>}
       <Text style={{color: 'black', 
        backgroundColor:'white',
        padding:5,
        borderRadius:10,
        marginBottom:5,
        maxWidth: screenWidth * 0.7
        }}>{messenger}</Text>
       </View> : <View style = {{flexDirection:'row'}}>
       <Text style={{color: 'white', 
        backgroundColor: colors.messMe,
        padding:5,
        borderRadius:10,
        marginBottom:5,
        maxWidth: screenWidth *0.7
        }}>{messenger}</Text>
       {showUrl == true ? <Image
          style={{
            width: 30,
            height: 30,
            resizeMode: 'cover',
            borderRadius: 15,
            marginLeft: 10,
           alignSelf:'flex-end'
          }}
          source={{
            uri: url,
          }}/> : <View style={{ width: 30,
            height: 30, marginLeft: 10}}/>}
       </View>}
        </View>
     
    </TouchableOpacity>
  );
}
export default MessengerItem;
