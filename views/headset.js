import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Text
} from 'react-native';

export default class HeadSetTabScreen extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <View style={[global.styles.screen]}>
                <Text style={[global.styles.text]}>这是headSet导航页面</Text>
            </View>
        )
    }

}