import React, { Component } from 'react';
import { Tile, List, ListItem } from 'react-native-elements';
import {
    View,
    StyleSheet,
    ScrollView
} from 'react-native';


export default class CameraDetail extends Component {
    /* constructor(props){
        super(props)
    } */

    render() {
        const {picture} = this.props.navigation.state.params;
        return(
            <ScrollView>
               {  <Tile
                  imageSrc={{uri:picture.large}}
                  featured
            
                  /> }

                  <List>
                      <ListItem
                        title="Camera Name"
                        hideChevron
                        />
                    </List>    
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
    },
    text: {
        color: '#fff'
    }
  });