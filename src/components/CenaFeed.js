import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, TouchableHighlight, Button, TextInput, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class CenaFeed extends Component {
  static navigationOptions =
     {
        title: 'Titulo do Feed',
        headerStyle: {
        backgroundColor: '#FFC107'
      },
      headerTintColor: '#fff',
     };
 render() {
    return (
        <Text style={{height: 100, width: 120}}>
          cena 2 pra testar
        </Text>
    );
  }
}

const styles = StyleSheet.create({

});
