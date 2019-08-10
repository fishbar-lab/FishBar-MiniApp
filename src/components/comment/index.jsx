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
      <View className='comment-item at-row'>
        <View className='at-col'>
          avatar
        </View>
        <View className='at-col'>
          <View className='username'>
            username
          </View>
          <View className='comment'>
            comment content
          </View>
        </View>
      </View>
    )
  }
}
