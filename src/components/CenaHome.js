import React, { Component } from 'react';
import { View, Image, ImageBackground, Text, StyleSheet, TouchableHighlight, Button, TextInput, ScrollView } from 'react-native';
// import { Actions } from 'react-native-router-flux';
import LottieView from 'lottie-react-native';
import { navigate } from 'react-navigation';

const imgBackground = require('../imgs/bg.png');

export default class CenaFeed extends Component {
  static navigationOptions = {
    headerStyle: {
      height: 100
    },
    headerTitle: null
    ,
    headerRight: (
      <Image source={require('../imgs/dots_ico.png')}/>
    ),
  headerLeft: (
  			<TouchableHighlight underlayColor={'#444444'}
  				style={{paddingLeft: 20, width: 70, height: 70}}>
  					<Image style={{width: 70, height: 70}} source={require('../imgs/avatar.jpg')}/>
  			</TouchableHighlight>
  		),
  };
 render() {
    return (
      <ImageBackground source={imgBackground} style={{width: '100%', height: '100%'}}>
        <LottieView source={require('../imgs/emoji_wink.json')} autoPlay loop />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({

});
