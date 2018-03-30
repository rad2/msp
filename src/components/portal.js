import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';


export default class Portal extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return(
            <View style={styles.container}>
             <Text>Portal</Text>
            </View> 
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
    }
  });