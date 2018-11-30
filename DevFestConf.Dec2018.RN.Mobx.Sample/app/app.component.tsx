import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Images } from './core/images';

interface AppComponentProps {}

export class AppComponent extends Component<AppComponentProps> {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Image source={Images.NPM_OUTLINE}/>
      </View>
    );
  }

}

const styles: any = StyleSheet.create({
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
  },
});