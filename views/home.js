import React,{Component} from 'react';
import {StyleSheet, View, Text,} from 'react-native';

export default class HomeTabScreen extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return (
            //global.style.screen和text是全局样式变量，可以在App.js里面定义
            <View style={[global.styles.screen]}>
                <Text style={[global.styles.text]}>这是首页</Text>
            </View>

        )
    }
}
