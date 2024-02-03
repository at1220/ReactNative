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
import { UIHeader } from '../../components';
import Icon from 'react-native-vector-icons/FontAwesome5'
import ChatItem from './ChatItem';
function Chat(props) {
  const {numberOfRating} = props;
  const [users,setUsers]= useState([
    {
        url:'https://randomuser.me/api/portraits/men/71.jpg',
        name:'anh tuan',
        message:'chao fen',
        numberOfUnreadMessage:3
    },
    {
        url:'https://randomuser.me/api/portraits/men/31.jpg',
        name:'thi di',
        message:'haiiiiiii',
        numberOfUnreadMessage:13
    },
    {
        url:'https://randomuser.me/api/portraits/men/51.jpg',
        name:'anh tua112n',
        message:'chao fen',
        numberOfUnreadMessage:99
    },
    {
        url:'https://randomuser.me/api/portraits/men/56.jpg',
        name:'anh tuaqeq',
        message:'chao fen',
        numberOfUnreadMessage:''
    },
    {
        url:'https://randomuser.me/api/portraits/men/42.jpg',
        name:'anh tuanqwe',
        message:'chao fen',
        numberOfUnreadMessage:100
    },
  ])
  //navigation
  const {navigation, route} = props
  //function od navigate to/back
  const {navigate, goBack} = navigation
  return (
    <View style={{flexDirection:'column'}}>
        <UIHeader title={'Chat'}
          leftIcon={'arrow-circle-left'}
          rightIcon={'search'}
          onPressLeftIcon={() =>{
            alert('press left icon')
          }}
          onPressRightIcon={() =>{
            alert('press right icon')
          }}
          />
          
      <View style={{flexDirection:'row', alignItems:'center',justifyContent:'space-between',backgroundColor:colors.space}}>
        <Text style={{color:colors.rest , fontSize:14, padding:12}}><Icon name={'list-ul'}/> Unread Message </Text>
        <Icon name={'trash-alt' } size={15} style={{padding:12,color:'black'}} onPress={() => {
            alert('press delete')
        }}/>
      </View>
      <FlatList 
        data={users}
        renderItem={({item}) => <ChatItem
        onPress = {() => {
          navigate('Messenger',{user: item})
        }}
       
        user = {item} key={item.url}
        keyExtractor={item=>item.url}
        />}
      />
    </View>
  );
}
export default Chat;
