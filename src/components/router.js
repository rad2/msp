import React from 'react';
import { TabNavigator, StackNavigator ,TabBarBottom } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  View,
  StyleSheet
} from 'react-native';

import Login from './login';
import Events from './events';
import Dashboard from './dashboard';
import People from './people';
import PersonDetail from './persondetail';
import Camera from './camera';
import CameraDetail from './cameradetail';
import Portal from './portal';

export const PeopleStack = StackNavigator({
  People: {
    screen: People,
    navigationOptions: {
      title: 'People List',
      headerStyle: {
        backgroundColor: '#3B3A35',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        

      },
      
    }
  },
  PersonDetail: {
    screen: PersonDetail,    
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name.first.toUpperCase()} ${navigation.state.params.name.last.toUpperCase()}`,
    }),
   },
   
  /* The header config from HomeScreen is now here */
  /* navigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }, */
});
export const CameraStack = StackNavigator({
  Camera: {
    screen: Camera,
    navigationOptions: {
      title: 'Camera List',
    }
  },
  CameraDetail: {
  screen: CameraDetail,
  navigationOptions: ({ navigation }) => ({
    title: `${navigation.state.params.name.first.toUpperCase()} ${navigation.state.params.name.last.toUpperCase()}`,
  }),
 },
});
export const Tabs = TabNavigator({
  Events:{screen:Events},
  People:{screen:PeopleStack},
  Home:{screen:Dashboard},
  Camera:{screen:CameraStack},
  Portal:{screen:Portal}
},
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Events') {
          iconName = `ios-alarm${focused ? '' : '-outline'}`;
        } else if (routeName === 'Home') {
          iconName = `ios-speedometer${focused ? '' : '-outline'}`;
        } else if (routeName === 'People') {
          iconName = `ios-people${focused ? '' : '-outline'}`;
        } else if (routeName === 'Camera') {
          iconName = `ios-videocam${focused ? '' : '-outline'}`;
        } else if (routeName === 'Portal') {
          iconName = `ios-paw${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={35} color={tintColor} />;
      }
    }),
 tabBarOptions: {
  activeTintColor: '#325fa8',
  inactiveTintColor: '#979a9e',
  scrollEnabled:true,
  
  labelStyle:{
    fontSize:14,
    fontWeight:'bold',
    color:'#fff',
    
   },
   style:{
    backgroundColor:'#50473F',
    
   },
   tabStyle:{
     elevation: 3
     //borderTopColor:'#fff',
     //borderTopWidth:1,
   }
},
tabBarComponent: TabBarBottom,
borderTopColor:'#0f0f0f',
tabBarPosition: 'bottom',
animationEnabled: true,
swipeEnabled: true,

}
);
