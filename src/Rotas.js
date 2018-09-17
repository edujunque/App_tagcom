import React, { Component } from 'react';
import {  createStackNavigator,} from 'react-navigation';

import CenaLogin from './components/CenaLogin';
import CenaFeed from './components/CenaFeed';

// const imgTemp = require('./imgs/NoPhoto_icon-user-default.png');

const Rotas = createStackNavigator({
  Login: { screen: CenaLogin },
  Feed: { screen: CenaFeed },
});

export default Rotas;
