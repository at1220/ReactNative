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
import Rating from './Rating';
function ProductItem(props) {
  const {item, index, onPress} = props;

  return (
    <TouchableOpacity
      onPress={() => {
        alert(`you press: ${item.productName}`);
      }}
      style={{
        flex: 0.5,
        height: 350,
        borderRadius: 30,
        marginLeft: index % 2 == 0 ? 10 : 0,
        marginTop: 5,
        marginRight: 10,
        marginBottom: 5,
        borderWidth: 1,
        borderColor: colors.disable,
      }}>
      <View style={{flexDirection: 'row', marginTop: 15}}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: 'cover',
            borderRadius: 20,
            marginRight: 15,
          }}
          source={{
            uri: item.url,
          }}
        />
        <Text
          style={{
            color: 'gray',
            fontSize: fontsize.h3,
            flex: 1,
            textAlign: 'right',
            marginRight: 5,
          }}>
          {item.price}$
        </Text>
      </View>
      <Text
        style={{
          marginTop: 8,
          color: colors.primary,
          fontSize: fontsize.h4,
          textAlign: 'center',
          fontWeight: 'bold',
        }}>
        {item.productName}
      </Text>
      {item.decription.map(decription => (
        <Text
          key={decription}
          style={{
            color: 'black',
            fontSize: fontsize.h4,
            fontWeight: 'bold',
            paddingHorizontal: 10,
            paddingBottom: 10,
          }}>
          . {decription}
        </Text>
      ))}
      <View style={{flexDirection: 'row', padding: 10}}>
        <TouchableOpacity onPress={onPress}>
          <Heart
            size={20}
            color={
              item.isSaved == undefined || item.isSaved == false
                ? colors.disable
                : colors.love
            }
            marginLeft={3}
            variant={
              item.isSaved == undefined || item.isSaved == false
                ? 'Linear'
                : 'Bold'
            }
          />
          <Text
            style={{
              fontSize: 15,
              color:
                item.isSaved == undefined || item.isSaved == false
                  ? colors.disable
                  : colors.love,
              textAlign: 'center',
            }}>
            {' '}
            Thêm
          </Text>
        </TouchableOpacity>
        <View style={{flex: 1}}>
          <Rating numberOfRating={item.stars} />
          <Text style={{marginBottom: 10, textAlign: 'right'}}>
            {item.review} Review
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
export default ProductItem;
