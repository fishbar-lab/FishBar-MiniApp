import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtAvatar, AtList, AtListItem } from 'taro-ui'
import './index.styl'
import 'taro-ui/dist/style/components/flex.scss'
import myPost from '../../assets/images/mypost.jpg'
import collection from '../../assets/images/collection.jpg'
import complaints from '../../assets/images/complaints.jpg'
import arrow from '../../assets/images/arrow.jpg'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '我的',
  }

  constructor() {
    super(...arguments)
    this.state = {
      searchVal: ''
    }
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  onChange(value) {
    this.setState({
      value: value
    })
  }

  render() {
    return (
      <View className='at-col'>
        <View className='at-row top'>
          <View className='at-col at-col-3 top-height'>
            <AtAvatar circle image='https://pic.qqtn.com/up/2019-4/2019040917510740548.jpg' className='avatar'></AtAvatar>
          </View>
          <View className='at-col at-col-6'>
            <span id='username'>云深不知处</span>
          </View>
          <View className='at-col at-col-3'>
            <button className='switch'>切换账号</button>
          </View>
        </View>
        <View className='at-row center'>
          <ul>
            <li>
              <img src={myPost} className='icon'></img>
              <span className='myspan'>我的帖子</span>
              <a href='#' className='arrow'></a>
            </li>
            <li>
              <img src={collection} className='icon'></img>
              <span className='myspan'>我的收藏</span>
              <a href='#' className='arrow'></a>
            </li>
            <li>
              <img src={complaints} className='icon'></img>
              <span className='myspan'>投诉反馈</span>
              <a href='#' className='arrow'></a>
            </li>
          </ul>
        </View>
      </View>
    )
  }
}
