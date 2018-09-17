import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Router, Scene, Actions, Stack } from 'react-native-router-flux';
import Rotas from './src/Rotas';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Pega na giromba e puxa,\n' +
//     'Shake or press menu button for dev menu',
// });

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Rotas/>
    );
  }
}

const styles = StyleSheet.create({

});
