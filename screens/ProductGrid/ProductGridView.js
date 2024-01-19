import React, {useState, useEffect, useRef} from 'react';
import {View, FlatList} from 'react-native';
import ProductItem from './ProductItem';
function ProductGridView(props) {
  const [products, setProducts] = useState([
    {
      url: 'http://eni-florence.com/wp-content/uploads/2023/05/CMF-DIN80L-LN4.png',
      price: 75,
      productName: 'Enimac CMF-DIN80L-LN4 (12V-80Ah)',
      decription: ['mien bao duong', 'khong can cham axit', 'manh me'],
      review: 19,
      stars: 5,
    },
    {
      url: 'http://eni-florence.com/wp-content/uploads/2022/08/CMF-DIN75L-LBN-1.png',
      price: 85,
      productName: 'Enimac DIN75L-LBN(12V-75Ah)',
      decription: ['mien bao duong', 'khong can cham axit', 'manh me'],
      review: 9,
      stars: 3,
    },
    {
      url: 'http://eni-florence.com/wp-content/uploads/2020/10/CMF-DIN100L.png',
      price: '1.055.00',
      productName: 'Enimac CMF-DIN100L',
      decription: ['mien bao duong', 'khong can cham axit', 'manh me'],
      review: 72,
      stars: 4,
    },
    {
      url: 'http://eni-florence.com/wp-content/uploads/2020/10/CMF-DIN90L.png',
      price: 65,
      productName: 'Enimac CMF-DIN80L',
      decription: ['mien bao duong', 'khong can cham axit', 'manh me'],
      review: 30,
      stars: 5,
    },
    {
      url: 'http://eni-florence.com/wp-content/uploads/2020/10/CMF-DIN80L-LBN-1.png',
      price: 125,
      productName: 'Enimac CMF-DIN90L',
      decription: ['mien bao duong', 'khong can cham axit', 'manh me'],
      review: 32,
      stars: 5,
    },
    {
      url: 'http://eni-florence.com/wp-content/uploads/2020/10/CMF-DIN71L-LBN-1.png',
      price: 57,
      productName: 'Enimac DIN80L-LBN',
      decription: ['mien bao duong', 'khong can cham axit', 'manh me'],
      review: 12,
      stars: 2,
    },
    {
      url: 'http://eni-florence.com/wp-content/uploads/2020/10/CMF-DIN71L-LBN-1.png',
      price: 57,
      productName: 'Enimac DIN80L-BN',
      decription: ['mien bao duong', 'khong can cham axit', 'manh me'],
      review: 12,
      stars: 2,
    },
  ]);
  return (
    <View style={{flex: 1}}>
      <FlatList
        style={{marginTop: 5}}
        data={products}
        numColumns={2}
        keyExtractor={item => item.productName}
        renderItem={({item, index}) => (
          <ProductItem
            index={index}
            item={item}
            onPress={() => {
              let clonedProduct = products.map(eachProduct => {
                if (item.productName == eachProduct.productName) {
                  return {
                    ...eachProduct,
                    isSaved:
                      eachProduct.isSaved == false ||
                      eachProduct.isSaved == undefined
                        ? true
                        : false,
                  };
                }
                return eachProduct;
              });
              setProducts(clonedProduct);
            }}
          />
        )}
      />
    </View>
  );
}
export default ProductGridView;
