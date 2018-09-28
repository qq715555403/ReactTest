/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
//导入StackNavigator这个组件
import { StackNavigator } from 'react-navigation';

import Home from './src/Home'
import UpdateName from './src/UpdateName'
import UpdateSex from './src/UpdateSex'
import UpdateFrom from './src/UpdateFrom'


const Simple = StackNavigator(
    //RouteConfigs
    {
     Home: { screen: Home },//首页
     UpdateName: { screen: UpdateName },//修改姓名
     UpdateSex: { screen: UpdateSex },//修改性别
     UpdateFrom: { screen: UpdateFrom}//修改籍贯
    },
    //StackNavigatorConfig
    {
        initialRouteName: 'Home', // 设置默认的页面组件，必须是上面已注册的页面组件
        initialRouteParams:'',//初始路由的参数
        // navigationOptions:'',// 屏幕导航的默认选项；对所有的screen的默认配置。 
        // paths: '',//RouteConfigs里面路径设置的映射；对所有路由的path属性的默认配置。 
        mode: 'card',//页面切换模式:card: 普通app常用的左右切换;modal:上下切换
                    //定义渲染风格，enum（card(IOS、Android都可以)、modal（仅IOS））。 
        headerMode: 'screen',//导航栏的显示模式:enum（float、screen、none）
                    // float: 无透明效果, 默认
                    // screen: 有渐变透明效果, 如微信QQ的一样
                    // none: 隐藏导航栏
        cardStyle: '',//样式；Use this prop to override or extend the default style for an individual card in stack. 
        // transitionConfig:''//Function to return an object that overrides default screen transitions. 
        onTransitionStart: ()=>{ console.log('导航栏切换开始'); }, //页面切换开始时的回调函数
        onTransitionEnd: ()=>{ console.log('导航栏切换结束'); }, //页面切换结束时的回调函数
    }
);

 //表示输出的意思
export default Simple; 