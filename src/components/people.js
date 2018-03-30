import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { List, ListItem } from 'react-native-elements';
import {
    View,
    StyleSheet,
    Text,
    FlatList,
    Image,
    ActivityIndicator
} from 'react-native';


export default class People extends Component {
    constructor(props){
       super(props)

        this.state={
            data:[],
            page: 0

        };
   }
        
        componentWillMount(){
            this.getPeopleData();
        }
        getPeopleData = async() =>{
            const response = await fetch(`https://randomuser.me/api?results=10&seed=hi&page=${this.state.page}`);
           //const response = await fetch("src/data.json");
           const json = await response.json();
            this.setState(state =>({ data: [...state.data, ...json.results] }));
        };
        getDetail = (person) => {
            this.props.navigation.navigate('PersonDetail',{...person});
        };
        handleEnd =() =>{
            this.setState(state => ({page: state.page +1}), () => this.getPeopleData());
        }
    
    render() {
        return(
            <View>
            <List>
              <FlatList
                data={this.state.data}
                keyExtractor={(x, i) => i}
                onEndReached={() => this.handleEnd()}
                onEndReachedThreshold={0.5}
                ListFooterComponent={()=> <ActivityIndicator size='large' animating />}
                renderItem={({ item }) =>
                 <View style={styles.items}>
                   <Image style={styles.img}
                     source={{uri:'item.picture.thumbnail'}}
                     />
                    <Text style={styles.item}>{item.name.first} {item.name.last}</Text>
                    
                  </View>
                  /*<ListItem
                    roundAvatar
                    avatar={{ uri: item.picture.thumbnail }}
                    title={`${item.name.first} ${item.name.last}`}
                    badge={{value:3 ,textStyle:{color:'orange'},containerStyle:{marginTop: -10, marginRight:60}}}
                    onPress={() => this.getDetail(item)}
                    style={styles.item}
                  />*/
                  }
              />
            </List>
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
    },
    items:{
        backgroundColor:'black'
    },
    item:{
        color:'white',
        fontSize:20,
        borderBottomWidth: 3,
        borderBottomColor: '#fff',
    },
    img:{
        width:60,
        height:60,
        borderRadius: 50,
    }
  });