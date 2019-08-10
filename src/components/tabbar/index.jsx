import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import 'taro-ui/dist/style/components/flex.scss'
import './index.styl'

import { AtAvatar, AtIcon } from 'taro-ui'

export default class Card extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='cus-tabbar at-row'>
        <View className='at-col'>赞同</View>
        <View className='at-col'>收藏</View>
        <View className='at-col'>评论</View>
      </View>
    )
  }
}
