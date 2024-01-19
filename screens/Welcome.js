import React, {useState, useEffect, useRef} from 'react';
import {Image, StyleSheet, Text, View, ImageBackground} from 'react-native';
import {UIButton} from '../components/index';
import {fontsize} from '../constant';
// function MainScreen(props) {
//   return <Text>this is main screen</Text>;
// }
// viet theo kieu bien
//import {sum2Number, sub2Number, PI} from '../utilies/Caculation';
import {images, icons} from '../constant';
//read objext, variable, function from other modules
// const Welcome = (props) => {
//   //destructuring an object
//   const {x, y} = props
//   const{person} = props
//   const{products} = props
//   //sextructuring an objext person
//   const {name,age,email} = person
//   const {productName, year} = products
//   // thu tu dung const -> let -> var

//   //jxs
//   return <View style={{paddingTop:30,alignItems:'center'}}>
//     <Text style= {styles.font}>value of x:{x}, value of y:{y}</Text>
//     <Text style= {styles.font}>name: {name}, age: {age}, email:{email} </Text>
//     {products.map(eachProduct =>
//     <Text style= {styles.font}>{eachProduct.productName},{eachProduct.year}</Text>
//     )}
//     <Text style={styles.font}>sum 2 and 3= {sum2Number(2,3)}</Text>
//     <Text style={styles.font}>10-2={sub2Number(10,2)}</Text>
//     <Text style={styles.font}>PI = {PI}</Text>
//   </View>

// }
function Welcome(props) {
  // state => khi state thay doi UI duoc load lai
  // like getter/setter
  const [accountTypes, setAccountTypes] = useState([
    {name: 'Tài xế', isSelectedd: true},
    {name: 'Quản lí', isSelectedd: false},
  ]);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={images.backgroundImg}
        resizeMode="cover"
        style={{flex: 100}}>
        <View style={styles.logoViewContainer}>
          <Image source={icons.iconLogo} style={styles.imageContainer} />
          <Text style={styles.font}> Công ty vận tải Hoàng Minh</Text>
        </View>
        <View style={styles.nameApp}>
          <Text
            style={{
              fontSize: fontsize.h1,
              color: '#0b5394',
              fontWeight: 'bold',
            }}>
            Đăng nhập
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <Text color={'gray'} marginStart={120}>
            Đăng nhập với chức vụ?
          </Text>
          {accountTypes.map(accountType => (
            <UIButton
              onPresss={() => {
                setAccountTypes(
                  accountTypes.map(eachAccountTypes => {
                    return {
                      ...eachAccountTypes,
                      isSelectedd: eachAccountTypes.name == accountType.name,
                    };
                  }),
                );
              }}
              title={accountType.name}
              isSelected={accountType.isSelectedd}
            />
          ))}
        </View>
        <View style={styles.btnLogin}>
          <UIButton title={'Đăng nhập'}></UIButton>
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  font: {
    fontSize: fontsize.h3,
    color: 'black',
  },
  container: {
    flex: 100,
  },
  imageContainer: {
    width: 65,
    height: 65,
    marginStart: 10,
    marginRight: 5,
    marginVertical: 10,
  },
  logoViewContainer: {
    flexDirection: 'row',
    height: 70,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 10,
  },
  nameApp: {
    flex: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flex: 55,
  },
  btnLogin: {
    flex: 15,
  },
});
export default Welcome;
