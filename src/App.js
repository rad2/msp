import React, { Component } from 'react';
import {Tabs} from './components/router';
import {
  View,
  StyleSheet
} from 'react-native';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Tabs />
      </View>
    );
  }
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  }
}); 
