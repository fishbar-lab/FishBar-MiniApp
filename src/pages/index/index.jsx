import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtSearchBar } from 'taro-ui'
import './index.styl'

import Card from '../../components/card'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  constructor () {
    super(...arguments)
    this.state = {
      searchVal: '',
      cardList: []
    }
  }

  componentWillMount () {
    Taro.request({
      url: 'https://cnodejs.org/api/v1/topics',
      header: {
        'content-type': 'application/json'
      }
    }).then(res => {
      const { data } = res.data
      this.setState({
        cardList: data
      })
    })
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onChange (value) {
    this.setState({
      value: value
    })
  }

  render () {
    const cardGroup = this.state.cardList.map(card => {
      return (
        <Card
          key={card.id}
          username={card.author.loginname}
          avatar={card.author.avatar_url}
          content={card.title}
          commentCount={card.reply_count}
          likeCount={card.visit_count}
        />
      )
    })
    return (
      <View className='index'>
        <AtSearchBar
          value={this.state.value}
          onChange={this.onChange.bind(this)}
          />
          { cardGroup }
      </View>
    )
  }
}
