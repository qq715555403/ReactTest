// 修改名字界面：一个textinput组件

import React from 'react';
import {
    View,
    StyleSheet,
    Button,
    Text,
    TextInput,
} from 'react-native';

export default class HomeScreen extends React.Component {
    constructor(props) {
      super(props)
      this.navigation = props.navigation
      const { navigate, state } = this.navigation
      this.navigate = navigate
      const { params } = state;
      const { name, callBackName } = params;
      this.callBackName = callBackName
      this.xxxwww = params//this后面的变量名可以任意定义
      this.state = {
          contentTitle: name,
      }
    }
    render() {
        console.log('this.props xxx', this.props.navigation)
        return (
            // <View style = {{flex:1,height=100,backgroundColor = 'white'}}>
            <View style = {{flex:1}}>
                <TextInput
                    style = {styles.textInput}
                    onChangeText={(text) => this.setState({contentTitle:text})}
                    value={this.state.contentTitle}
                />
            </View>
        );
    }

    componentDidMount() {
        this.navigation.setParams({ onGoHomeFromName: this.onGoHome })
    }
    
    onGoHome = ()=>{
        console.log('修改姓名导航按钮点击，跳转到首页')
        var item = {name:this.state.contentTitle}
        this.callBackName(item)

        this.navigation.goBack()
        
        // navigate('Home', {user:'首页传的'})
    }

    static navigationOptions = ({navigation, screenProps}) => {
        return {
            title: '修改姓名',
            // header: //导航栏设置对象
            // headerTitle: 'TEST',//导航栏的标题, 可以是字符串也可以是个组件
            headerBackTitle: '返回首页',//左上角的返回键文字, 默认是上一个页面的title，设置这个属性会覆盖掉title的值
            headerRight: (
                <View>
                    <Button
                        title='保存' 
                        onPress={()=> navigation.state.params.onGoHomeFromName()}
                    />
                </View>
            )//导航栏右按钮
        }
    };
}


//定义text的风格
const styles = StyleSheet.create({
    textInput: {
        marginTop:10,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor:'white',
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1,
    },
});