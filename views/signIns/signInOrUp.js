import React,{Component} from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default class SignInOrUpScreen extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <View style={[global.styles.screen]}>
                <Text style={[global.styles.text]}>SignInOrUpScreen</Text>
            </View>
        )
    }
}