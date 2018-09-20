import React, { Component } from 'react';
import {  createStackNavigator,} from 'react-navigation';

import CenaLogin from './components/CenaLogin';
import CenaHome from './components/CenaHome';

// const imgTemp = require('./imgs/NoPhoto_icon-user-default.png');

const Rotas = createStackNavigator({
  Login: { screen: CenaLogin },
  Home: { screen: CenaHome },
});

export default Rotas;
