/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import React from 'react';
// import {
//   Welcome,
//   Login,
//   Register,
//   CarList,
//   ProductGridView,
//   Settings,
// } from './screens';
// import UITab from './navigation/UITab';
import App from './navigation/App';
let fakedProducts = [
  {
    productName: 'ip 13',
    year: 2022,
  },
  {
    productName: 'ip 14',
    year: 2023,
  },
  {
    productName: 'ip 15',
    year: 2023,
  },
  {
    productName: 'ip 11',
    year: 2018,
  },
];
AppRegistry.registerComponent(appName, () => () => <App />);
