import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';


export default class Events extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <View style={styles.container}>
             <Text>Events</Text>
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