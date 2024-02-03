
import {Settings,ProductGridView,CarList,Profile,Chat} from '../screens'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {colors,fontsize} from '../constant'
import {Category,Car,Setting5} from 'iconsax-react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
const Tab = createBottomTabNavigator()
const screenOptions =({route})=>({
    headerShown: false,
    tabBarActiveTintColor: 'white',
    tabBarInactiveTintColor: colors.textcolor,
    tabBarActiveBackgroundColor:colors.tabcolor,
    tabBarInactiveBackgroundColor:colors.tabcolor,
    tabBarIcon:({focused,color,size})=>{
        // let screenName = route.name
        // let iconName = 'cog'
        // if(screenName == 'Product'){
        //     iconName = 'product-hunt'
        // }
        // else if( screenName == 'Car'){
        //     iconName = 'car'
        // }
        return <Icon
        name={route.name == 'ProductGridView' ? 'product-hunt' : 
        (route.name == 'CarList' ? 'car' :
        ( route.name == 'Settings' ? 'cogs' : (route.name == 'Profile' ? 'user' : 
        (route.name == 'Chat' ? 'comment' : '')) )) }
         size={23}
        color={focused ? 'white' : colors.textcolor}/>
    },
    
})
function UITab(props) {
    return <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name='ProductGridView' component={ProductGridView} options={{
            tabBarLabel: 'Products'
        }}/>
        <Tab.Screen name='CarList' component={CarList} options={{
            tabBarLabel: 'Cars'
        }}/>
         <Tab.Screen name='Chat' component={Chat} options={{
            tabBarLabel: 'Chat'
        }}/>
        <Tab.Screen name='Settings' component={Settings} options={{
            tabBarLabel: 'Setting'
        }}/>
        
        <Tab.Screen name='Profile' component={Profile} options={{
            tabBarLabel: 'Profile'
        }}/>
    </Tab.Navigator>
}
export default UITab