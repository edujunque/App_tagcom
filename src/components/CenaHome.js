import React, { Component } from 'react';
import { View, Image, ImageBackground, Text, StyleSheet, TouchableHighlight, Button, TextInput, ScrollView, Dimensions } from 'react-native';
// import { Actions } from 'react-native-router-flux';
import LottieView from 'lottie-react-native';
import { navigate } from 'react-navigation';
import SwitchToggle from 'react-native-switch-toggle';

const imgBackground = require('../imgs/bg.png');
var window = Dimensions.get('window');

export default class CenaFeed extends Component {
  constructor(props){
    super(props);
    this.state = { switchOn2 : false}
    this.onPress2 = this.onPress2.bind(this);
   }
getRightText() {
  return this.state.switchOn2 ? '' : 'LIVRE';
}

getLeftText() {
  return this.state.switchOn2 ? 'OCUPADO' : '';
}
onPress2(){
  this.setState({switchOn2: !this.state.switchOn2});
}
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
              <View style={{justifyContent:'center', alignItems:'center', flex: 1}}>
                  <Image source={require('../imgs/ico_reuniao.png')}/>
              </View>
              <View style={{borderLeftWidth: 0.5, borderColor: 'rgb(200,200,200)', width: 1, marginLeft: 5, marginTop: 15, marginBottom: 15}}></View>
              <View style={{flexDirection:'column', flex:3}}>
                  <View style={{flex:1, marginTop: 5, marginLeft: 10}}>
                      <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Image style={{width: 15, height: 15}} source={require('../imgs/RedBall.png')}/>
                        <Text style={styles.Title}>SALA DE REUNIÃO 1</Text>
                      </View>
                      <View style={{flexDirection:'row'}}>
                        <Text style={styles.Text}>STATUS: </Text>
                        <Text style={styles.Text}>Ocupado</Text>
                      </View>
                      <View style={{flexDirection:'row'}}>
                        <Text style={styles.Text}>RESPONSÁVEL: </Text>
                        <Text style={styles.Text}>Patricia</Text>
                      </View>
                  </View>
                  <View style={{borderBottomWidth: 0.5, borderColor: 'rgb(200,200,200)', height: 1, marginRight: 55}}></View>
                  <View style={{flexDirection:'column', flex:1, marginLeft: 10}}>
                      <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Image style={{width: 15, height: 15}} source={require('../imgs/circle_green.png')}/>
                        <Text style={styles.Title}>SALA DE REUNIÃO 2</Text>
                      </View>
                      <View style={{flexDirection:'row'}}>
                        <Text style={styles.Text}>STATUS: </Text>
                        <Text style={styles.Text}>Livre</Text>
                      </View>
                  </View>
              </View>
              <View style={{justifyContent:'center', alignItems:'center', flex: 1, marginRight: 15}}>
                  <Image  source={require('../imgs/ico_mais.png')}/>
              </View>
          </View>
          <View style={[styles.classificados, styles.blocosMenores]}>
              <View style={{justifyContent:'center', alignItems:'center', flex: 1}}>
                  <Image source={require('../imgs/ico_classifitag.png')}/>
              </View>
              <View style={{borderLeftWidth: 0.5, borderColor: 'rgb(200,200,200)', width: 1, marginLeft: 5, marginTop: 5, marginBottom: 5}}></View>
              <View style={{flexDirection:'column', flex:3}}>
                  <View style={{flex:1, marginTop: 5, marginLeft: 10, justifyContent: 'center'}}>
                      <Text style={styles.Title}>CLASSIFICADOS</Text>
                  </View>
              </View>
              <View style={{justifyContent:'center', alignItems:'center', flex: 1, marginRight: 15}}>
                  <Image style={styles.icoMais} source={require('../imgs/ico_mais.png')}/>
              </View>

          </View>
          <View style={[styles.avisos, styles.blocosMenores]}>
              <View style={{justifyContent:'center', alignItems:'center', flex: 1}}>
                  <Image source={require('../imgs/ico_avisos.png')}/>
              </View>
              <View style={{borderLeftWidth: 0.5, borderColor: 'rgb(200,200,200)', width: 1, marginLeft: 5, marginTop: 5, marginBottom: 5}}></View>
              <View style={{flexDirection:'column', flex:3}}>
                  <View style={{flex:1, marginTop: 5, marginLeft: 10, justifyContent: 'center'}}>
                      <Text style={styles.Title}>AVISOS</Text>
                  </View>
              </View>
              <View style={{justifyContent:'center', alignItems:'center', flex: 1, marginRight: 15}}>
                  <Image style={styles.icoMais} source={require('../imgs/ico_mais.png')}/>
              </View>
          </View>
          <View style={[styles.blocosMenores ,styles.cafe]}>
              <View style={{justifyContent:'center', alignItems:'center', flex: 1}}>
                  <Image source={require('../imgs/ico_cafe.png')}/>
              </View>
              <View style={{borderLeftWidth: 0.5, borderColor: 'rgb(200,200,200)', width: 1, marginLeft: 5, marginTop: 5, marginBottom: 5}}></View>
              <View style={{flexDirection:'column', flex:3}}>
                  <View style={{flex:1, marginTop: 5, marginLeft: 10}}>
                      <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Text style={styles.Title}>CAFÉ</Text>
                      </View>
                      <View style={{flexDirection:'row'}}>
                        <Text style={styles.Text}>STATUS: </Text>
                        <Text style={styles.Text}>Feito há</Text>
                      </View>
                      <View style={{flexDirection:'row'}}>
                        <Text style={styles.Text}>45 </Text>
                        <Text style={styles.Text}>Minutos</Text>
                      </View>
                  </View>
              </View>
              <View style={{justifyContent:'center', alignItems:'center', flex: 1, marginRight: 15}}>
                  <Image style={styles.icoMais} source={require('../imgs/ico_mais.png')}/>
              </View>
          </View>
          <View style={[styles.blocosMenores, styles.tremeTerra]}>
              <View style={{justifyContent:'center', alignItems:'center', flex: 1}}>
                  <Image source={require('../imgs/ico_trono.png')}/>
              </View>
              <View style={{borderLeftWidth: 0.5, borderColor: 'rgb(200,200,200)', width: 1, marginLeft: 5, marginTop: 5, marginBottom: 5}}></View>
              <View style={{flexDirection:'column', flex:2}}>
                  <View style={{flex:1, marginTop: 5, marginLeft: 10}}>
                      <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Text style={styles.Title}>TREME-TERRA</Text>
                      </View>
                      <View style={{flexDirection:'row'}}>
                        <Text style={styles.Text}>STATUS: </Text>
                        <Text style={styles.Text}>Livre há</Text>
                      </View>
                      <View style={{flexDirection:'row'}}>
                        <Text style={styles.Text}>10 </Text>
                        <Text style={styles.Text}>Minutos</Text>
                      </View>
                  </View>
              </View>
              <View style={{justifyContent:'center', alignItems:'center', marginRight: 15, flex: 2}}>
                    <SwitchToggle
                        containerStyle={{
                          // marginTop: 16,
                          width: 118,
                          height: 38,
                          borderRadius: 25,
                          backgroundColor: '#ccc',
                          padding: 5,
                          
                        }}
                        leftContainerStyle={{
                          backgroundColor: 'blue'
                        }}
                        backTextRight={this.getRightText()}
                        textRightStyle={{
                          paddingLeft: 5,
                          fontWeight: 'bold',
                          color: 'rgb(4,112,21)'
                        }}
                        backTextLeft={this.getLeftText()}
                        textLeftStyle={{
                          paddingLeft: 5,
                          fontWeight: 'bold',
                          color: 'rgb(255,0,0)',
                        }}
                        rightContainerStyle={{flex:1, justifyContent: 'center'}}
                        leftContainerStyle={{flex:1, justifyContent: 'center', position:'absolute', float: 'left'}}
                        circleStyle={{
                          width: 28,
                          height: 28,
                          borderRadius: 19,
                          backgroundColor: 'white', // rgb(102,134,205)
                        }}
                        switchOn={this.state.switchOn2}
                        onPress={this.onPress2}
                        circleColorOff='rgb(4,112,21)'
                        circleColorOn='red'
                        duration={500}
                />
            </View>
          </View>
          <View style={[styles.logo]}>
              <Image style={{width: 130, height: 25}} source={require('../imgs/logo.png')}/>
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
  flexDirection:'row',
  backgroundColor: 'rgba(133, 133, 133, 0.4)',
  justifyContent: 'center',
},
cafe: {
  flexDirection:'row',
  backgroundColor: 'rgba(133, 133, 133, 0.4)',
  justifyContent: 'center',
},
reuniao: {
  flexDirection:'row',
  backgroundColor: 'rgba(133, 133, 133, 0.4)',
  // justifyContent: 'center',
  flex: 2,
  borderRadius: 20,
  margin: 5,
  marginRight: 10,
  marginLeft: 10,
},
classificados: {
  flexDirection:'row',
  backgroundColor: 'rgba(133, 133, 133, 0.4)',
  justifyContent: 'center',
},
avisos: {
  flexDirection:'row',
  backgroundColor: 'rgba(133, 133, 133, 0.4)',
  justifyContent: 'center',
},
logo: {
  flexDirection:'row',
  // backgroundColor: 'yellow',
  justifyContent: 'center',
  borderRadius: 20,
  margin: 5,
  marginRight: 10,
  marginLeft: 10,
  flex: 0.5
},
Text:{
  color:'#fff',
  fontSize: 12
},
Title:{
  color:'#fff',
  fontWeight: 'bold'
},
icoMais:{
  width: 40,
  height: 40
},
});
