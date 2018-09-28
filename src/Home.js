// 首页界面：顶部圆角图片，底部姓名、性别、籍贯

import React from 'react';
import {
    View,
    StyleSheet,
    Button,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { UpdateStyle } from './Styles'

// 右边的箭头图片
const arrImg = require('../image/jiantou.png')

export default class HomeScreen extends React.Component {
    state = {
        name:'张三',
        sex:'男',
        fromCity:'重庆',
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            // <View>
            <View style = {{flex:1}}>
                <View style = {{flex: 1,flexDirection:'row',alignItems:'center'}}>
                    <View style={[{flex:1,height:200,backgroundColor:'white'},styles.viewLeft]}>
                        <TouchableOpacity onPress={this.onPressImage}>
                            <Image style={styles.logo} source={require('../image/test.jpg')}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style = {{flex:3,height:80,flexDirection:'column',backgroundColor:'white'}}>
                    <TouchableOpacity onPress={() => navigate('UpdateName', {callBackName:this.onPressNameCallBack,name:this.state.name})}>
                        <View style = {styles.viewCell}>
                            <Text style = {UpdateStyle.content}>姓名：</Text>
                            <Text style={[{ flex: 1 },UpdateStyle.content]}>{this.state.name}</Text>
                            <Image style={styles.arrow} source={arrImg}/>
                        </View>
                     </TouchableOpacity>

                    
                    <TouchableOpacity onPress={this.onPressSex}>
                        <View style = {styles.viewCell}>
                            <Text style = {UpdateStyle.content}>性别：</Text>
                            <Text style={[{ flex: 1 },UpdateStyle.content]}>{this.state.sex}</Text>
                            <Image style={styles.arrow} source={require('../image/jiantou.png')}/>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.onPressFrom}>
                        <View style = {styles.viewCell}>
                            <Text style = {UpdateStyle.content}>籍贯：</Text>
                            <Text style={[{ flex: 1 },UpdateStyle.content]}>{this.state.fromCity}</Text>
                            <Image style={styles.arrow} source={require('../image/jiantou.png')}/>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    //-------------------------------------点击方法-------------------------------------
    onPressImage = ()=>{
        console.log('图片点击。。。');
    }

    onPressName = ()=>{
        console.log('姓名点击。。。');

        navigate('UpdateName', {callBackName:this.onPressNameCallBack,name:this.state.name})
    }

    onPressSex = ()=>{
        console.log('性别点击。。。');

        const { navigate } = this.props.navigation;

        navigate('UpdateSex', {callBackName:this.onPressSexCallBack,sex:this.state.sex})
    }

    onPressFrom= ()=>{
        console.log('籍贯点击。。。');

        const { navigate } = this.props.navigation;
        navigate('UpdateFrom', {callBackName:this.onPressFromCallBack,fromCity:this.state.fromCity})
    }
     //-------------------------------------点击方法-------------------------------------

    //-------------------------------------回调方法-------------------------------------
    onPressNameCallBack = (item)=>{
        console.log('姓名点击回调。。。')
        console.log(item);
        this.setState({name:item.name})
    }

    onPressSexCallBack = (item)=>{
        console.log('性别点击回调。。。')
        console.log(item);
        this.setState({sex:item.sex})
    }

    onPressFromCallBack = (item)=>{
        console.log('籍贯点击回调。。。')
        console.log(item);
        this.setState({fromCity:item.fromCity})
    }
    //-------------------------------------回调方法-------------------------------------

    static navigationOptions = {
        title: '首页',
        // header: //导航栏设置对象
        // headerTitle: 'TEST',//导航栏的标题, 可以是字符串也可以是个组件
        headerBackTitle: '返回首页',//左上角的返回键文字, 默认是上一个页面的title，设置这个属性会覆盖掉title的值
        headerRight: (
            <View>
                <Button
                    title='右按钮' 
                    onPress={()=>alert('您好，我是右边的按钮')}
                />
            </View>
        ),//导航栏右按钮
        headerLeft: (
            <View>
                <Button
                    title='左按钮' 
                    onPress={()=>alert('您好，我是左边的按钮')}
                />
            </View>
        ),//导航栏左按钮
        headerStyle:{
            backgroundColor:'#fff'
        },//导航栏的style
        headerTitleStyle:{
            color:'red',
            textAlign:'center',
        }, //导航栏的title的style
        headerTintColor: 'red',//导航栏字体的颜色
        // headerPressColorAndroid ：//按压返回按钮显示的颜色 安卓系统 >= 5.0才有效。
        gesturesEnabled:true,//是否允许右滑返回，在iOS上默认为true，在Android上默认为false
    };
}

//定义text的风格
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    text: {
        fontSize: 18,
        backgroundColor: 'yellow',
        margin: 10,
    },
    viewLeft: {
        flexDirection:'column',//布局方向：column：垂直布局，row：水平布局
        /*指定justifyContent可以决定其【子元素】沿着主轴的排列方式。
        flex-start、center、flex-end、space-around以及space-between*/ 
        justifyContent:'center',
        /*指定alignItems可以决定其子元素沿着次轴（与主轴垂直的轴，比如若主轴方向为row，则次轴方向为column）的排列方式。
          flex-start、center、flex-end以及stretch
          注意：要使stretch选项生效的话，子元素在次轴方向上不能有固定的尺寸。*/ 
        alignItems:'center',
    },
    viewCell: {
        height:50,
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:10
    },
    logo: {
        width:80,
        height:80,
        borderRadius:40,//圆角
        resizeMode:'cover',
        /*
        当加载的图片的尺寸与设置的宽高不匹配时，决定怎样去加载图片，有三个可选值：
        cover（等比例缩放，使图片最短边占满组件）、
        contain（等比例缩放，使图片最长边占满组件）、
        stretch（拉伸铺满，可能改变图片外表比例）。
        */
    },
     arrow: {
        justifyContent:'flex-end',//只会对子view有效
        width:15,
        height:15,
        marginRight: 10,
     },
      txtRight: {
          textAlign: 'left',
          textAlignVertical: 'center',
          color: 'black',
          fontSize:14,
      },
      txtRightStatus: {
        right:10,
        textAlign: 'right',
        textAlignVertical: 'center',
        color: 'black',
        fontSize:14,
     },
      txt: {
        textAlign: 'left',
        textAlignVertical: 'center',
        color: 'black',
        fontSize: 18,
      },
});