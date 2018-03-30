import React, { Component } from 'react';
import {
    Platform,
    View,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    Dimensions
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
      'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
  });
  
export default class Login extends Component {
  constructor(props){
    super(props)

  state ={
    pin:'****'
  }
}
  On_Press =(item)=>{
  // this.setState({pin:item})

alert("OK")
  }

    render(){
      const keys= [1,2,3,4,5,6,7,8,9,0,'S2','<--']
      const keyList = keys.map((item,index) => { 
              return <TouchableOpacity key={index} onPress={this.On_Press()}>
              <Text style={styles.item}>
                    {item}
              </Text></TouchableOpacity>
              })
        return(
            <View style={styles.container}>
              <View>
                <TextInput style={styles.pin} value={state.pin} disabled />
              </View>
              <View style={styles.subcontainer}>{keyList}</View>
            </View>
       );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:35,
    backgroundColor: '#000',
  },
  subcontainer:{
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 25,
  },
  pin:{
     borderColor: '#1843B1',
     fontSize: 30,
     padding: 5,
     textAlign: 'center',
     color: '#fff',
     borderWidth: 1,
  },
  item: {
      margin: 10,
      textAlign: 'center',
      color: '#fff',
      padding: 30,
      fontSize: 30,
      borderRadius:50,
      borderColor: '#1843B1',
      borderWidth: 1,
      height:100,
      width: Dimensions.get('window').width /4 -6
      
    },
  });
  