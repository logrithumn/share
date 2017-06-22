/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


// import * as sss from './biketap-logo-tm-fix.svg';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


import SvgUri from 'react-native-svg-uri';

const svg_string = '<svg xmlns="http://www.w3.org/2000/svg" width="49.243" height="49.244" viewBox="0 0 49.243 49.244">  <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="49.243" y1="24.622" x2="0" y2="24.622">    <stop offset="0" stop-color="#009EDB"/>    <stop offset="1" stop-color="#A3238E"/>  </linearGradient>  <path d="M39.16 24.622a23.506 23.506 0 0 0 1.876-9.233c0-5.88-2.15-11.26-5.71-15.39h-5.922c4.58 3.566 7.528 9.132 7.528 15.39 0 3.34-.84 6.483-2.322 9.23a19.414 19.414 0 0 1 2.322 9.234c0 6.254-2.947 11.82-7.528 15.388h5.923a23.5 23.5 0 0 0 5.71-15.388c0-3.277-.67-6.397-1.876-9.233zm10.083-9.233c0-5.585-1.44-10.83-3.966-15.39h-4.803a27.563 27.563 0 0 1 4.666 15.39c0 3.236-.557 6.343-1.578 9.23a27.68 27.68 0 0 1 1.578 9.234c0 5.693-1.72 10.987-4.666 15.388h4.803a31.65 31.65 0 0 0 3.966-15.388c0-3.212-.478-6.312-1.363-9.233a31.772 31.772 0 0 0 1.363-9.232zM29.75 24.62a15.318 15.318 0 0 0 3.08-9.233C32.83 6.89 25.94 0 17.44 0H0v49.244h17.44c8.5 0 15.388-6.89 15.388-15.388a15.32 15.32 0 0 0-3.077-9.234zm-1.025 9.233c0 6.232-5.052 11.284-11.285 11.284H4.104V4.103H17.44c6.232 0 11.285 5.053 11.285 11.285 0 3.734-1.785 7.068-4.795 9.232 3.002 2.136 4.795 5.512 4.795 9.233z" fill-rule="evenodd" clip-rule="evenodd" fill="url(#a)"/></svg>';

const TestSvgUri = () => (
  <View style={styles.container}>
    <SvgUri
      width="200"
      height="200"
      source={require('./biketap-logo-tm-fix.svg')}/>
    <SvgUri
      width="200"
      height="200"
      svgXmlData={svg_string} />
  </View>
);

// const TestSvgUri = () => (
//   <SvgUri width="200" height="200" source={require('./biketap-logo-tm-fix.svg')} />
// );

/* BOTH TestSvgUri work */


export default class Shit extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TestSvgUri />
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});

AppRegistry.registerComponent('shit', () => Shit);
