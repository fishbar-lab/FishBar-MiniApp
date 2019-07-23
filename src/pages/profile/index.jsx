import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton, AtSearchBar } from 'taro-ui'
import './index.styl'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '我的'
  }

  constructor () {
    super(...arguments)
    this.state = {
      searchVal: ''
    }
  }

  componentWillMount () {}

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
    return (
      <View className='index'>
        <AtSearchBar
          value={this.state.value}
          onChange={this.onChange.bind(this)}
          />
      </View>
    )
  }
}
