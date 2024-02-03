import React, {useState, useEffect, useRef} from 'react';
import {
  Image,
  ScrollView,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import {images, colors, fontsize, icons} from '../constant';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  user as UserRepository,
  population as PopulationRespository,
} from '../Repositories';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
function Profile(props) {
  const [user, setUser] = useState([]);
  const [populations, setPopulations] = useState([]);
  // const getAPI = () =>{
  //     return fetch('https://65ae2d791dfbae409a7425a8.mockapi.io/user').then((respone))
  // }

  //call when componet loaded => componentDimount
  useEffect(() => {
    UserRepository.getUserDeatail().then(reponseUser => setUser(reponseUser));
    PopulationRespository.getPopulation({
      drilldowns: 'Nation',
      measures: 'Population',
    }).then(responsePopulation => {
      setPopulations(responsePopulation);
    });
  }, []);
  // //UserRepository.getUserDeatail()
  const {
    email,
    dateOfBirth,
    gender,
    userId,
    address,
    username,
    url,
    phone,
    registerDate,
  } = user;
  const formattedDateOfBirth = dateOfBirth ? dateOfBirth.toString() : '';
  const formattedRegisterDate = registerDate ? registerDate.toString() : '';
  const screenWidth = Dimensions.get("window").width;
  const screenHeight= Dimensions.get("window").height;
  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: colors.backgray,
    backgroundGradientToOpacity: 1,
    //color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    color: () => colors.primary,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white', paddingStart: 20}}>
      <View style={{alignItems: 'center', paddingVertical: 10}}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: 'cover',
            borderRadius: 50,
          }}
          source={{
            uri: url,
          }}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{color: 'black', fontSize: fontsize.h4, fontWeight: 'bold'}}>
          User name:{' '}
        </Text>
        <Text>{username}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{color: 'black', fontSize: fontsize.h4, fontWeight: 'bold'}}>
          User ID:{' '}
        </Text>
        <Text>{userId}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{color: 'black', fontSize: fontsize.h4, fontWeight: 'bold'}}>
          DoB:{' '}
        </Text>
        <Text>{formattedDateOfBirth}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{color: 'black', fontSize: fontsize.h4, fontWeight: 'bold'}}>
          Gender:{' '}
        </Text>
        <Text>{gender}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{color: 'black', fontSize: fontsize.h4, fontWeight: 'bold'}}>
          Address:{' '}
        </Text>
        <Text>{address}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{color: 'black', fontSize: fontsize.h4, fontWeight: 'bold'}}>
          phone:{' '}
        </Text>
        <Text>{phone}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{color: 'black', fontSize: fontsize.h4, fontWeight: 'bold'}}>
          Email:{' '}
        </Text>
        <Text>{email}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{color: 'black', fontSize: fontsize.h4, fontWeight: 'bold'}}>
          Register Date:{' '}
        </Text>
        <Text>{formattedRegisterDate}</Text>
      </View>
      {/* listAPI */}
      <View style={{marginTop:20}}>
        <FlatList
          data={populations}
          keyExtractor={index => index.toString()}
          renderItem={({item}) => (
            <View>
            <View style={{flexDirection:'row'}}>
              <Text
                style={{
                  color: 'black',
                  fontSize: fontsize.h4,
                  fontWeight: 'bold',
                }}>
                Nation:{' '}
              </Text>
              <Text>{item.nation}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <Text
                style={{
                  color: 'black',
                  fontSize: fontsize.h4,
                  fontWeight: 'bold',
                }}>
                Nation ID:{' '}
              </Text>
              <Text>{item.nationId}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <Text
                style={{
                  color: 'black',
                  fontSize: fontsize.h4,
                  fontWeight: 'bold',
                }}>
                Year ID:{' '}
              </Text>
              <Text>{item.yearId}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <Text
                style={{
                  color: 'black',
                  fontSize: fontsize.h4,
                  fontWeight: 'bold',
                }}>
                Population:{' '}
              </Text>
              <Text>{item.population}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <Text
                style={{
                  color: 'black',
                  fontSize: fontsize.h4,
                  fontWeight: 'bold',
                }}>
                slug Nation:{' '}
              </Text>
              <Text>{item.slugNation}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <Text
                style={{
                  color: 'black',
                  fontSize: fontsize.h4,
                  fontWeight: 'bold',
                }}>
                Year:{' '}
              </Text>
              <Text>{item.year}</Text>
            </View>
            </View> 
          )}
        />
      </View>
      <View>
        {/* <Text>{JSON.stringify(populations)}</Text> */}
        {/* <LineChart
          data={{
            labels: populations.sort((a, b) => parseInt(a.year)-parseInt(b.year)).map(item => item.year),
  datasets: [
    {
      data: populations.sort((a, b) => parseInt(a.year)-parseInt(b.year)).map(item => Math.floor(item.population/1000_00, 0)),
      color: (opacity = 1) => colors.love, // optional
      strokeWidth: 2 // optional
    }
  ],
  legend: ["Population/year"] // optional
          }}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
        /> */}
      </View>
      
    </SafeAreaView>
  );
}
export default Profile;
