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
import {Heart, Message, Star1} from 'iconsax-react-native';
import {colors, fontsize} from '../../constant';
import { UIHeader } from '../../components';
import Icon from 'react-native-vector-icons/FontAwesome5'
import MessengerItem from './MessengerItem';
function Messenger(props) { 
  const [chatHistory,setChatHistory]= useState([
    {
      url:'https://randomuser.me/api/portraits/men/71.jpg',
      isSender: true,
      showUrl:false,
      messenger:'hello',
      timestamp: 1706240413000,
    },
    {
      url:'https://randomuser.me/api/portraits/men/71.jpg',
      isSender: true,
      showUrl:false,
      messenger:'are u ok?',
      timestamp: 1706240653000,
    },
    {
      url:'https://randomuser.me/api/portraits/men/71.jpg',
      isSender: true,
      showUrl:true,
      messenger:'Nam embarked on a career as a gaming content creator on YouTube and TikTok four years prior. Within a few months, he witnessed a steady rise in his income, eventually earning between VND60-80 million each month.Nam embarked on a career as a gaming content creator on YouTube and TikTok four years prior. Within a few months, he witnessed a steady rise in his income, eventually earning between VND60-80 million each month.Nam embarked on a career as a gaming content creator on YouTube and TikTok four years prior. Within a few months, he witnessed a steady rise in his income, eventually earning between VND60-80 million each month. ',
      timestamp: 1706240533000,
    },
    {
      url:'https://randomuser.me/api/portraits/men/73.jpg',
      isSender: false,
      showUrl:false,
      messenger:'Nam embarked on a career as a gaming content creator on YouTube and TikTok four years prior. Within a few months, he witnessed a steady rise in his income, eventually earning between VND60-80 million each month.Nam embarked on a career as a gaming content creator on YouTube and TikTok four years prior. Within a few months, he witnessed a steady rise in his income, eventually earning between VND60-80 million each month.Nam embarked on a career as a gaming content creator on YouTube and TikTok four years prior. Within a few months, he witnessed a steady rise in his income, eventually earning between VND60-80 million each month. ',
      timestamp: 1706240833000,
    },
    {
      url:'https://randomuser.me/api/portraits/men/73.jpg',
      isSender: false,
      showUrl:true,
      messenger:'Nam embarked on a career as a gaming content creator on YouTube and TikTok four years prior. Within a few months, he witnessed a steady rise in his income, eventually earning between VND60-80 million each month.Nam embarked on a career as a gaming content creator on YouTube and TikTok four years prior. Within a few months, he witnessed a steady rise in his income, eventually earning between VND60-80 million each month.Nam embarked on a career as a gaming content creator on YouTube and TikTok four years prior. Within a few months, he witnessed a steady rise in his income, eventually earning between VND60-80 million each month. ',
      timestamp: 1706240850000,
    },
    { 
      url:'https://randomuser.me/api/portraits/men/71.jpg',
      isSender: true,
      showUrl:true,
      messenger:'hang out?',
      timestamp: 1706240860000,
    },
    
  ])
  const {name,url} = props.route.params.user
  const {navigate, goBack} = props.navigation
  return (
    <View style={{flexDirection:'column',backgroundColor:colors.backgray, flex:1}}>
        <UIHeader title={name}
          leftIcon={'arrow-circle-left'}
          rightIcon={'ellipsis-v'}
          onPressLeftIcon={() =>{
            goBack()
          }}
          onPressRightIcon={() =>{
            alert('press right icon')
          }}
          />
          
      <FlatList 
        data={chatHistory}
        renderItem={({item}) => <MessengerItem
        onPress={() => {
            alert(`you press ${item.messenger} and ${item.timestamp}`)
        }}
        item = {item} key={`${item.timestamp}`}
        keyExtractor={item=>item.timestamp}
       
        />}
        style={{marginBottom:20}}
      />
    </View>
  );
}
export default Messenger;
