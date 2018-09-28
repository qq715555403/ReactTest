
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  string,
  boolean,
  Dimensions,
  Button,
  FlatList,
  Image,
} from 'react-native'

const {width,height}=Dimensions.get('window')
export default class Main extends Component{
    // 构造
    constructor(props) {
        super(props);
    }
    refreshing(){
        let timer =  setTimeout(()=>{
                    clearTimeout(timer)
                    alert('刷新成功')
                },1500)
    }
    _onload(){
        let timer =  setTimeout(()=>{
            clearTimeout(timer)
            alert('加载成功')
        },1500)
    }

    // 滚动到指定为事件
    _scrollToPoint(){
      console.log('我点击了滚动到指定位置按钮');
      this._flatList.scrollToOffset({animated: true, offset: 2000});
    }

    render() {
        var data = [];
        for (var i = 0; i < 16; i++) {
            data.push({key: i, title: i + ''});
        }

        return (
            <View style={{flex:1}}>
                <Button title='滚动到指定位置' onPress={()=>this._scrollToPoint()}/>
                {/* <Button title='滚动到指定位置' onPress={()=>{
                    this._flatList.scrollToOffset({animated: true, offset: 2000});
                }}/> */}
                <View style={{flex:1}}>
                    <FlatList
                        ref={(flatList)=>this._flatList = flatList}
                        ListHeaderComponent={this._header}
                        ListFooterComponent={this._footer}
                        ItemSeparatorComponent={this._separator}
                        renderItem={this._renderItem}
                        onRefresh={this.refreshing}
                        refreshing={false}
                        onEndReachedThreshold={0}
                        onEndReached={
                            this._onload
                        }
                        // numColumns ={2}
                        // columnWrapperStyle={{borderWidth:2,borderColor:'black',paddingLeft:20}}

                        //horizontal={true}

                        getItemLayout={(data,index)=>(
                        {length: 100, offset: (100+2) * index, index}
                        )}

                        data={data}>
                    </FlatList>
                </View>

            </View>
        );
    }


    _renderItem = (item) => {
        var txt = '第' + item.index + '个' + ' title=' + item.item.title;
        var bgColor = item.index % 2 == 0 ? 'red' : 'blue';
        bgColor = 'while';
        var txtVin = '车架号：HSJ06999999999999';
        var txtCity = '城市：北京';
        var txtPrice = '成交价：5 万元';
        var txtStatus = '已确认';
        var txtDes = '暂无估值';
        var txtTime = '2018年04月24日17:24:53';

        return <View style = {{flex: 1,flexDirection:'row',alignItems:'center'}}>
          <View style={[{flex:1,height:130,backgroundColor:bgColor},styles.viewLeft]}>
            {/* <Image
              style={styles.logo}
              source={{uri: 'http://h.hiphotos.baidu.com/image/pic/item/21a4462309f790525fe7185100f3d7ca7acbd5e1.jpg'}}
            /> */}
            <Image style={styles.logo} source={require('./test.jpg')}/>
            {/* <Text style={[{flex:1,height:100,width:60,backgroundColor:bgColor},styles.txtLeft]}>{txt}</Text> */}
          </View>
          <View style = {{flex:3,height:80}}>
            {/* VIN码 */}
            <Text style={[{flex:1,height:30,backgroundColor:bgColor},styles.txtRight]}>{txtVin}</Text>
            {/* 城市 */}
            <Text style={[{flex:1,height:30,backgroundColor:bgColor},styles.txtRight]}>{txtCity}</Text>
            {/* 成交价和状态 */}
            <View style={[{flex:1,flexDirection:'row'}]}> 
              <Text style={[{flex:3,height:30,backgroundColor:bgColor},styles.txtRight]}>{txtPrice}</Text>
              <Text style={[{flex:1,height:30,backgroundColor:bgColor},styles.txtRightStatus]}>{txtStatus}</Text>
            </View>
            {/* 描述和时间 */}
            <View style={[{flex:1,flexDirection:'row'}]}> 
              <Text style={[{flex:1,height:30,width:60,backgroundColor:bgColor},styles.txtRight]}>{txtDes}</Text>
              <Text style={[{flex:1,height:30,backgroundColor:bgColor},styles.txtRightStatus]}>{txtTime}</Text>
            </View>
          </View>
        </View>
    }

    _header = () => {
        return <Text style={[styles.txt,{backgroundColor:'white'}]}>这是头部</Text>;
    }

    _footer = () => {
        return <Text style={[styles.txt,{backgroundColor:'white'}]}>这是尾部</Text>;
    }

    _separator = () => {
        return <View style={{height:0.5,backgroundColor:'black'}}/>;
    }
}
const styles=StyleSheet.create({
    container:{

    },
    content:{
        width:width,
        height:height,
        backgroundColor:'yellow',
        justifyContent:'center',
        alignItems:'center'
    },
    cell:{
        height:100,
        backgroundColor:'purple',
        alignItems:'center',
        justifyContent:'center',
        borderBottomColor:'#ececec',
        borderBottomWidth:1

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
    logo: {
      width:80,
      height:80,
      paddingLeft:10,
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
    
})
