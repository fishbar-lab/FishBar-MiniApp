import Taro, { Component } from '@tarojs/taro'
import { View, RichText } from '@tarojs/components'
import { AtCard, AtTabBar } from 'taro-ui'
import './index.styl'

import Tabbar from '../../components/tabbar'
import Comment from '../../components/comment'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '详情'
  }

  constructor () {
    super(...arguments)
    this.state = {
      loading: false,
      currentTab: 0,
      topicDetail: {}
    }
  }

  componentWillMount () {
    const { id } = this.$router.params
    this.getTopicById(id)
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleClick (value) {
    this.setState({
      currentTab: value
    })
  }

  getTopicById = (id = '') => {
    if (id) {
      this.setState({ loading: true })
      // https://cnodejs.org/api/v1/topic/5cbfd9aca86ae80ce64b3175
      Taro.request({
        url: `https://cnodejs.org/api/v1/topic/${id}`,
        header: {
          'content-type': 'application/json'
        }
      }).then(res => {
        const data = res.data
        const topic = data.success ? data.data : {}
        this.setState({
          topicDetail: topic,
          loading: false
        })
        // const article = topic.content
        // WxParse.wxParse('article', 'html', article, this.$scope, 5)
      })
    }
  }

  render () {
    return (
      <View className='details'>
        <AtCard
          className='card'
          note={this.state.topicDetail.create_at}
          title={this.state.topicDetail.title}
        >
          <RichText nodes={this.state.topicDetail.content} class="rich-text"/>
          {/* <View>
            <import src='../../components/wxParse/wxParse.wxml'/>
            <template is='wxParse' data='{{wxParseData: article.nodes}}'/>
          </View> */}
        </AtCard>
        <View className='comment-group'>
          {
            this.state.topicDetail.replies.map(reply => {
              return (
                <Comment reply={reply}/>
              )
            })
          }
        </View>
        <Tabbar />
      </View>
    )
  }
}
