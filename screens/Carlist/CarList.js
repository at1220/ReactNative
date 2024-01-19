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
import {Filter, SearchNormal} from 'iconsax-react-native';
import CarItem from './CarItem';
import {color, fontsize} from '../../constant';
function CarList(props) {
  //list of car = state
  const [cars, setCars] = useState([
    {
      name: '50H-097.98112',
      status: 'đang chạy',
      price: 123.4,
      payload: 2.5,
      url: 'https://thegioixetai.com/storage/anh-dai-dien/ISUZU/QKR230/xe-tai-Isuzu-QKR230-thung-bat-bung-nhom.jpg',
    },
    {
      name: '50H-097.98',
      status: 'đang chạy',
      price: 123.4,
      payload: 2.5,
      url: 'https://thegioixetai.com/storage/anh-dai-dien/ISUZU/QKR230/xe-tai-Isuzu-QKR230-thung-bat-bung-nhom.jpg',
    },
    {
      name: '51H-022.33',
      status: 'đang chạy',
      price: 453.0,
      payload: 8.0,
      url: 'https://product.hstatic.net/1000259555/product/img_1515_05e7e2ed55c74c4486ba14c750d61130_master.png',
    },
    {
      name: '51H-097.23',
      status: 'nghỉ',
      price: 234.3,
      payload: 5.5,
      url: 'https://airportcargo.vn/wp-content/uploads/2018/05/cho-thue-xe-tai.jpg',
    },
    {
      name: '50H-321.98',
      status: 'đã bán',
      price: 1256.9,
      payload: 10.0,
      url: 'https://xetaitot.com/wp-content/uploads/2022/08/JAC-N200S-thung-kin-mau-xanh.jpg',
    },
    {
      name: '50H-124.62',
      status: 'nghỉ',
      price: 6579.3,
      payload: 12.5,
      url: 'https://xetaisaigon.com/wp-content/uploads/2020/03/xe-tai-IZ65-thung-kin.jpg',
    },
    {
      name: '50H-124.622',
      status: 'abc',
      price: 6579.3,
      payload: 12.5,
      url: 'https://xetaisaigon.com/wp-content/uploads/2020/03/xe-tai-IZ65-thung-kin.jpg',
    },
  ]);
  const [categories, setCategories] = useState([
    {
      name: 'tai lon ',
      url: 'https://img.lovepik.com/free-png/20211209/lovepik-container-truck-png-image_401445646_wh1200.png',
    },
    {
      name: 'container',
      url: 'https://img.pikbest.com/png-images/truck-icon-vector-graphic-element_1532195.png!sw800',
    },
    {
      name: 'tai nho',
      url: 'https://img.lovepik.com/element/45004/5416.png_860.png',
    },
    {
      name: 'xe cau',
      url: 'https://png.pngtree.com/png-vector/20230228/ourmid/pngtree-crane-trucks-vector-png-image_6622229.png',
    },
    {
      name: 'xe nang',
      url: 'https://png.pngtree.com/png-vector/20190521/ourlarge/pngtree-forklift-icon-png-image_1053766.jpg',
    },
    {
      name: 'tai xe',
      url: 'https://e7.pngegg.com/pngimages/193/72/png-clipart-taxi-driver-driver-driving-logo-thumbnail.png',
    },
    {
      name: 'phu xe',
      url: 'https://cdn-icons-png.flaticon.com/512/93/93375.png',
    },
    {
      name: 'hoa don',
      url: 'https://banner2.cleanpng.com/20180407/laq/kisspng-paper-computer-icons-clip-art-papers-5ac92c3b1cde04.2784471615231334991183.jpg',
    },
  ]);
  const [searchText, setSearchText] = useState('');
  //hien xe search
  const fillteredCar = () =>
    cars.filter(eachCar =>
      eachCar.name.toLowerCase().includes(searchText.toLowerCase()),
    );
  return (
    <View style={{flex: 1}}>
      {/* search */}
      <View
        style={{
          marginHorizontal: 10,
          marginVertical: 10,
          flexDirection: 'row',
          opacity: 0.6,
          alignItems: 'center',
        }}>
        <SearchNormal
          size={30}
          color={'black'}
          style={{
            position: 'absolute',
            top: 5,
            left: 5,
          }}
        />
        <TextInput
          autoCorrect={false}
          onChangeText={text => {
            setSearchText(text);
          }}
          style={{
            backgroundColor: color.color1,
            borderRadius: 15,
            height: 40,
            flex: 1,
            marginEnd: 5,
            paddingStart: 40,
            fontSize: 18,
            color: 'black',
          }}
        />
        <Filter size={30} color={color.disable} />
      </View>

      <View style={{height: 100}}>
        <View
          style={{
            height: 1,
            backgroundColor: 'gray',
            width: '100%',
            marginTop: 3,
          }}
        />
        {/* category ngang */}
        <FlatList
          data={categories}
          horizontal={true}
          keyExtractor={item => item.name}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  alert(`you pres category: ${item.name}`);
                }}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{
                    width: 50,
                    height: 50,
                    resizeMode: 'cover',
                    borderRadius: 25,
                    margin: 10,
                  }}
                  source={{
                    uri: item.url,
                  }}
                />
                <Text
                  style={{
                    color: color.primary,
                    fontSize: fontsize.h4,
                  }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          }}
          style={{flex: 1}}></FlatList>

        <View
          style={{
            height: 1,
            backgroundColor: 'gray',
            width: '100%',
            marginTop: 3,
          }}
        />
      </View>
      {/* <ScrollView>
        {cars.map(eachCar => (
          <CarItem car={eachCar} key={eachCar.name} />
        ))}
      </ScrollView> */}
      {/* carlist doc va hien car khi tim kiem */}
      {fillteredCar().length > 0 ? (
        <FlatList
          data={fillteredCar()}
          renderItem={({item}) => (
            <CarItem
              onPress={() => {
                alert(`press item: ${item.name}`);
              }}
              car={item}
            />
          )}
          keyExtractor={eachCar => eachCar.name}
        />
      ) : (
        <View
          style={{
            flex: 1,
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: fontsize.h3, color: color.disable}}>
            Không tìm thấy xe
          </Text>
          <SearchNormal size={20} color="gray" marginTop={3} />
        </View>
      )}
    </View>
  );
}
export default CarList;
