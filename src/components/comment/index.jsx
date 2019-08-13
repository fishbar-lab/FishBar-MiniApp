import Taro, { Component } from '@tarojs/taro'
import { View, RichText } from '@tarojs/components'
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
      <View className='comment-item'>
        <View className='userinfo'>
          <AtAvatar size='small' image={this.props.reply.author.avatar_url} circle/>
          <View className='username'>
            {this.props.reply.author.loginname}
          </View>
        </View>
        <View className='comment'>
          <RichText nodes={this.props.reply.content} class="rich-text"/>
        </View>
      </View>
    )
  }
}
