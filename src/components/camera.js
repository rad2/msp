import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { List, ListItem } from 'react-native-elements';
import {
    View,
    StyleSheet,
    Text,
    FlatList,
    ActivityIndicator
} from 'react-native';


export default class Camera extends Component {
    //constructor(props){
    //    super(props)

        state={
            data:[],
            page: 0

        };
   // }
        
       /*  componentWillMount(){
            this.getCameras();
        }
        getCameras = async() =>{
            const response = await fetch(`https://randomuser.me/api?results=10&seed=hi&page=${this.state.page}`);
           //const response = await fetch("src/data.json");
           const json = await response.json();
            this.setState(state =>({ data: [...state.data, ...json.results] }));
        };
        getDetail = (cam) => {
            this.props.navigation.navigate('CameraDetail',cam);
        };
        handleEnd =() =>{
            this.setState(state => ({page: state.page +1}), () => this.getCameras());
        } */
    
    render() {
        return(
            <View>
                <Text>Cameras</Text>
            {/* <List>
              <FlatList
                data={this.state.data}
                keyExtractor={(x, i) => i}
                onEndReached={() => this.handleEnd()}
                onEndReachedThreshold={0.5}
                ListFooterComponent={()=> <ActivityIndicator size='large' animating />}
                renderItem={({ item }) =>
                  <ListItem
                
                    avatar={{ uri: item.picture.thumbnail }}
                    title={`${item.name.first} ${item.name.last}`}
                    onPress={() => this.getDetail(item)}
                  />}
              />
            </List> */}
          </View>
        )  
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems:'center',
      justifyContent:"center"
    },
    text: {
     color:'#000'
    }
  });