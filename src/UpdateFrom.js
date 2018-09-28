// 修改籍贯界面，显示一个省份列表：默认选中，需要传省份id

import React from 'react';
import {
    View,
    StyleSheet,
    Button,
    Text,
    FlatList,
    TouchableOpacity
} from 'react-native';

import { UpdateStyle } from './Styles'

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props)
        this.navigation = props.navigation
        const { navigate, state } = this.navigation
        this.navigate = navigate
        const { params } = state;
        const { name, callBackName } = params;
        this.callBackName = callBackName
        this.fromCity = params.fromCity
        console.log(`我是修改籍贯界面,constructor,城市：${this.fromCity}`)
        this.state = {
            selectCity:this.fromCity,
            contentTitle: name,
            arrayData:[{key: '重庆'}, {key: '北京'}, {key: '上海'},
                        {key: '天津'}, {key: '成都'}, {key: '广州'}, 
                        {key: '深圳'}, {key: '西安'}, {key: '香港'}]
        }
      }

    render() {
        const { navigate } = this.props.navigation;
        const { params } = this.props.navigation.state;
        return (
            <View style ={styles.container}>
                <FlatList
                    data={this.state.arrayData}
                    renderItem={({item}) => 
                        <TouchableOpacity onPress={()=>this.cellSelected({item})} style = {styles.cell}>
                            <Text style = {styles.item}>{item.key}</Text>
                        </TouchableOpacity>
                    }
                />
            </View>
        );
    }

    cellSelected = ({item}) =>{
        console.log(`我是修改籍贯界面,城市：${item.key}`)
        this.setState({selectCity:item.key})
        this.selectCity = item.key
        console.log(`我是修改籍贯界面,cellSelected,城市：${this.selectCity}`)
    }

    componentDidMount = () =>{
        this.navigation.setParams({ onGoHomeFromCity: this.onGoHome })
    }

    onGoHome = ()=>{
        console.log(`我是修改籍贯界面,onGoHome,城市：${this.selectCity}`)
        var item = {fromCity:this.selectCity}
        this.callBackName(item)

        this.navigation.goBack()
    }


    static navigationOptions = ({navigation,screenProps}) => {
        return {
            title: '修改籍贯',
            headerBackTitle: '返回首页',//左上角的返回键文字, 默认是上一个页面的title，设置这个属性会覆盖掉title的值
            headerRight: (
                <View>
                    <Button
                        title='保存' 
                        onPress = {()=>navigation.state.params.onGoHomeFromCity()}
                    />
                </View>

            )//导航栏右按钮
        }
    };
}

const styles = StyleSheet.create({
  container: {
        flex: 1,
        paddingTop: 0
  },
  item: {
        padding: 10,
        fontSize: 18,
        height: 44,
  },
  cell:{
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#EEEEEE',
  }
});