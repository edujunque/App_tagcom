import React, { Component } from 'react';
import { View, ImageBackground, Image, Text, StyleSheet, TouchableHighlight, Button, TextInput, ScrollView, StatusBar } from 'react-native';
import { navigate } from 'react-navigation';
// import LoginFacebook from './CenaLoginFacebook'
// import CriarConta from './CenaCriarConta'
// import {firebaseRef, auth} from '../FirebaseConfig'

const imgLogo = require('../imgs/logo.png');
const imgBackground = require('../imgs/bg.png');

export default class CenaLogin extends Component {
  static navigationOptions =
     {
        title: 'MainActivity',
        headerStyle: {
        backgroundColor: '#FFC107'
      },
      headerTintColor: '#fff',
      header : null
     };

 render() {
    return (
      // <ScrollView style={{flex:1}}>

      // <View style={styles.container}>
        <ImageBackground source={imgBackground} style={{width: '100%', height: '100%'}}>

        <StatusBar backgroundColor="#323232"/>

        <View style={styles.viewLogo}>
          <Image source={imgLogo}/>
        </View>

        <View style={styles.viewForm}>
          <View style={{flex:2, justifyContent:'center'}}>
            <Text style={{color:'#aaaaaa', fontSize:10}}>USUARIO</Text>
            <TextInput
                style={styles.formText}
                underlineColorAndroid='#fff'
                // placeholder="Usuario"
                // placeholderTextColor='white'
                // onChangeText={(name) => this.setState({name})}
                // value={this.state.name}
            />
            <Text style={{marginTop:5, color:'#aaaaaa', fontSize:10}}>SENHA</Text>
            <TextInput
                style={styles.formText}
                underlineColorAndroid='#fff'
                // placeholder="Senha"
                // placeholderTextColor='white'
                // onChangeText={(name) => this.setState({name})}
                // value={this.state.name}
            />
          </View>
          <View style={{flex:1, alignItems:'center', paddingBottom:30}}>
            <TouchableHighlight style={styles.btnLogin}
                onPress={() => { this.props.navigation.navigate('Home') }}
                underlayColor={'#ed5747'}
                activeOpacity={0.5}
                >
                <Text style={styles.txtLogin}>LOGIN</Text>
            </TouchableHighlight>
            <Text style={{marginTop:20, color:'#aaaaaa', fontSize:12}}>ESQUECEU A SENHA?</Text>
          </View>
        </View>
        </ImageBackground>
      // </View>
      // </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#323232',
    flex: 1,
    // justifyContent:'center'
  },
  viewLogo: {
    alignItems:'center',
    justifyContent:'center',
    flex: 1.2
  },
  viewForm: {
    backgroundColor: '#505050',
    alignItems: 'center',
    flex: 2,
    margin: 10,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 50,
    justifyContent:'center',
    borderRadius: 30,
    // marginTop: 50
  },
  btnLogin: {
    backgroundColor: '#ff2d16',
    width: 225,
    alignItems: 'center',
    padding: 15,
    borderRadius: 30,
    // borderWidth: 1,
    // borderColor: 'white'
  },
  txtLogin: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 13
  },
  formText: {
    color: 'white',
    height: 45,
    width: 250,
    paddingLeft: 10,
  }
});
