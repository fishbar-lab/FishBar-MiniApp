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

  onGoDetailsPage () {
    const id = this.props.topicId
    if (id) {
      Taro.navigateTo({
        url: `/pages/details/index?id=${id}`
      })
    }
  }

  render () {
    return (
      <View className='card'>
        <View className='header at-row at-row__align--center'>
          <AtAvatar size='small' image={this.props.avatar} circle/>
          <View className='at-col username'>{this.props.username}</View>
        </View>
        <View className='content' onClick={this.onGoDetailsPage.bind(this, 'card')}>
          {this.props.content}
        </View>
        <View className='action at-row at-row__align--center'>
          <View className='action-right at-col'>
            <AtIcon value='heart' size='15'></AtIcon>
            <Text className='action-count'>{this.props.likeCount}</Text>
            <Text className='action-spacer'></Text>
            <AtIcon value='message' size='15'></AtIcon>
            <Text className='action-count'>{this.props.commentCount}</Text>
          </View>
        </View>
      </View>
    )
  }
}
