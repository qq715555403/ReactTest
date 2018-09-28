// 修改性别界面：一个男女单选组件

import React from 'react';
import {
    View,
    StyleSheet,
    Button,
    Text,
    SegmentedControlIOS,
} from 'react-native';

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props)
        this.navigation = props.navigation
        const { params } =this.navigation.state;
        const { name, callBackName } = params;
        this.callBackName = callBackName
        this.xxxwww = params//this后面的变量名可以任意定义

        this.sex = params.sex
        let sexTemp
        if (this.sex === '男') {
            sexTemp = 0
        } else {
            sexTemp = 1
        }

        console.log(`我是修改性别界面：${sexTemp}`)
        this.state = {
            selectIndex:sexTemp,
            sex:this.sex,
        }
    }
    render() {
        const { navigate } = this.props.navigation;
        const { params } = this.props.navigation.state;
        return (
            <View style={{flex:1,flexDirection:'row',justifyContent:'center'}}>
                <SegmentedControlIOS 
                style={{marginTop:20,width:150}} 
                tintColor="red"  
                momentary={false} //如果为true，选中的段不会一直保持特效。但onValueChange回调还是会正常工作。
                values={['男', '女']} 
                // onChange={(e)=>alert(e)} //当用户点击某一段的时候调用。参数是一个事件对象。
                onValueChange={(value)=>this.onSegmentChange(value)} //当用户点击某一段的时候调用。参数是被选中段的值。
                selectedIndex={this.state.selectIndex}/> 
            </View>
        );
    }

    onSegmentChange = (value) => {
        let sexTemp
        if (value === '男') {
            sexTemp = 0
        } else {
            sexTemp = 1
        }
        this.sex = value;

        console.log(`我是修改性别界面,点击分割控件：选中索引：${sexTemp} 性别：${this.sex}`)
        console.log(value)
    }

    componentDidMount = () =>{
        this.navigation.setParams({ onGoHomeFromSex: this.onGoHome })
    }

    onGoHome = ()=>{
        console.log('修改性别导航按钮点击，跳转到首页')
        var item = {sex:this.sex}
        this.callBackName(item)

        this.navigation.goBack()
    }

    static navigationOptions = ({navigation,screenProps}) => {
        return {
            title: '修改性别',
            headerBackTitle: '返回首页',//左上角的返回键文字, 默认是上一个页面的title，设置这个属性会覆盖掉title的值
            headerRight: (
                <View>
                    <Button
                        title='保存' 
                        onPress = {()=>navigation.state.params.onGoHomeFromSex()}
                    />
                </View>

            )//导航栏右按钮
        }
    };
}
