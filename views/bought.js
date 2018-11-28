import React, {Component} from 'React';
import {
    Platform,
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default  class BoughtTabScreen extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <View style={[global.styles.screen]}>
                <Text style={[global.styles.text]}>这是Bought导航页面</Text>
            </View>
        )

    }

}