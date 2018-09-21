import React, { Component } from 'react';
import { View, Image, ImageBackground, Text, StyleSheet, TouchableHighlight, Button, TextInput, ScrollView, Dimensions } from 'react-native';
// import { Actions } from 'react-native-router-flux';
import LottieView from 'lottie-react-native';
import { navigate } from 'react-navigation';

const imgBackground = require('../imgs/bg.png');
var window = Dimensions.get('window');

export default class CenaFeed extends Component {
  // static navigationOptions = {
  //   headerStyle: {
  //     height: 100,
  //     borderRadiusLeft: 30
  //   },
  //   headerTitle: null
  //   ,
  //   headerRight: (
  //     <Image source={require('../imgs/dots_ico.png')}/>
  //   ),
  // headerLeft: (
  // 			<TouchableHighlight underlayColor={'#444444'}
  // 				style={{paddingLeft: 20, width: 70, height: 70}}>
  // 					<Image style={{width: 70, height: 70}} source={require('../imgs/avatar.jpg')}/>
  // 			</TouchableHighlight>
  // 		),
  // };
  static navigationOptions =
     {
        title: 'Home',
        headerStyle: {
        // backgroundColor: '#FFC107'
      },
      // headerTintColor: '#fff',
      header : null
     };

 render() {
    return (
      <View styles={{flex:1, justifyContent:'space-between'}}>
<ImageBackground source={imgBackground} style={{width: '100%', height: '100%'}}>
          <View style={styles.oval}></View>
          <View style={styles.testeEsquerda}>
            <LottieView style={styles.avatar} source={require('../imgs/dino_dance.json')} autoPlay loop/>
            <View style={styles.Perfil}>
            <Text style={{fontWeight:'bold', fontSize:15}}>CAIO</Text>
            <Text>EDITAR</Text>
            </View>
          </View>
          <View style={styles.testeDireita}>
            <Image source={require('../imgs/ico_envelope.png')}/>
          </View>
          <View style={styles.reuniao}>

          </View>
          <View style={[styles.blocosMenores, styles.tremeTerra]}>

          </View>
          <View style={[styles.blocosMenores ,styles.cafe]}>

          </View>

          <View style={[styles.classificados, styles.blocosMenores]}>

          </View>
          <View style={[styles.avisos, styles.blocosMenores]}>

          </View>
          <View style={[styles.logo]}>

          </View>

</ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
oval: {
  alignSelf: 'center',
  // width: 200,
  // height: 100,
  width: window.width / 16,
  height: window.width / 3.5,
  borderBottomLeftRadius: 30,
  borderBottomRightRadius: 30,
  backgroundColor: '#fff',
  transform: [
    {scaleX: 16}
  ]
},
avatar: {
  // position: 'absolute',
  height: window.width / 4,
  marginTop: 2,
},
testeDireita: {
  flex: 1,
  // backgroundColor: 'blue',
  // alignItems:'flex-end',
  paddingTop: 20,
  paddingRight: 20,
  right: 0,
  position: 'absolute'
},
testeEsquerda: {
  flex: 1,
  flexDirection:'row',
  // backgroundColor: 'yellow',
  position: 'absolute'
},
Perfil: {
  flexDirection:'column',
  // backgroundColor: 'pink',
  justifyContent: 'center'
},
blocosMenores: {
  flex:1,
  borderRadius: 20,
  margin: 5,
  marginRight: 10,
  marginLeft: 10,
},
tremeTerra: {
  flexDirection:'column',
  backgroundColor: 'pink',
  justifyContent: 'center',
},
cafe: {
  flexDirection:'column',
  backgroundColor: 'blue',
  justifyContent: 'center',
},
reuniao: {
  flexDirection:'column',
  backgroundColor: 'green',
  justifyContent: 'center',
  flex: 2,
  borderRadius: 20,
  margin: 5,
  marginRight: 10,
  marginLeft: 10,
},
classificados: {
  flexDirection:'column',
  backgroundColor: 'gray',
  justifyContent: 'center',
},
avisos: {
  flexDirection:'column',
  backgroundColor: 'red',
  justifyContent: 'center',
},
logo: {
  flexDirection:'column',
  backgroundColor: 'yellow',
  justifyContent: 'center',
  borderRadius: 20,
  margin: 5,
  marginRight: 10,
  marginLeft: 10,
  flex: 0.5
}
});
