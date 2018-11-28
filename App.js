import React,{Component} from 'react';
import {
    // Platform,
    StyleSheet,
    BackHandler,
    View,
} from 'react-native';
//第三方插件
import { Router, Scene } from 'react-native-router-flux';
import ScrollableTabView from 'react-native-scrollable-tab-view';
// import Toast from 'react-native-easy-toast';

//自定义组件
import CustomTabBar from './components/customTabBar'; //自定义选项卡
//选项卡Tab页
import HomeTabScreen from './views/home'; //首页
import HeadsetTabScreen from './views/headset'; //试听
import BoughtTabScreen from './views/bought'; //已购
import MineTabScreen from './views/mine'; //我的
//页面
import SignInOrUpScreen from './views/signIns/signInOrUp'; //免注册登录
import SignInScreen from './views/signIns/signIn'; //登录

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

export class Tabs extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        // Disable back button by just returning true instead of Action.pop()
        BackHandler.addEventListener('hardwareBackPress', () => {return true});
    }

    render() {
        let tabNames = ['首页', '试听', '已购', '我的'];
        return (
            <ScrollableTabView
                initialPage={0} //初始tab索引
                renderTabBar={() =>
                    <CustomTabBar
                        tabNames={tabNames} //tab名称
                        placeMiddle={false} //中间是否占位，即中间是否需要用特殊按钮样式等
                    />
                }
                tabBarPosition='bottom'
            >
                <HomeTabScreen key='homeTab' tabLabel='home' />

                <HeadsetTabScreen key='headsetTab' tabLabel='headset' />

                <BoughtTabScreen key='boughtTab' tabLabel='bought' />

                <MineTabScreen key='mineTab' tabLabel='mine' />
            </ScrollableTabView>
        );
    }
}

export default class App extends Component {
    render() {
        return (
            <View style={[{flex: 1, backgroundColor: 'red'}]}>
                <Router sceneStyle={[styles.router]}>
                    <Scene
                        key="root"
                        navigationBarStyle={[styles.root]}
                        titleStyle={[styles.title]}
                        headerMode="screen"
                    >
                        {/*首页(tab)*/}
                        <Scene
                            key="home"
                            component={Tabs}
                            title="首页"
                            initial={true}
                            hideNavBar={true} //此处以及其他页都隐藏了导航，我打算自定义组件作为头部导航栏。
                        />
                        {/*登录*/}
                        <Scene key="signInOrUp" component={SignInOrUpScreen} title="免注册登录" hideNavBar={true} />
                        <Scene key="signIn" component={SignInScreen} title="登录" hideNavBar={true} />
                    </Scene>
                </Router>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    router: {
        backgroundColor: '#e6e6e6',
    },
    root: {
        backgroundColor: '#e6e6e6',
    },
    title: {
        color: '#ffffff',
    },
});

global.styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e6e6e6',
    },
    container: {
        backgroundColor: '#e6e6e6',
    },
    text: {
        color: '#2c2c2c',
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
