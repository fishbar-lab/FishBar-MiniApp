import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtSearchBar, AtTabs, AtTabsPane, AtActivityIndicator } from 'taro-ui'
import './index.styl'

import Card from '../../components/card'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  constructor () {
    super(...arguments)
    this.state = {
      loading: false,
      searchVal: '',
      cards: {
        all: [],
        good: [],
        share: [],
        ask: [],
        job: [],
        dev: []
      },
      tabList: [
        { id: 0, title: '全部', type: 'all' },
        { id: 1, title: '精华', type: 'good' },
        { id: 2, title: '分享', type: 'share' },
        { id: 3, title: '问答', type: 'ask' },
        { id: 4, title: '招聘', type: 'job' },
        { id: 5, title: '客户端测试', type: 'dev' }
      ],
      current: 0
    }
  }

  componentWillMount () {
    this.fetchTopicList('all')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  fetchTopicList = (type = '') => {
    this.setState({ loading: true })
    Taro.request({
      url: `https://cnodejs.org/api/v1/topics?tab=${type}`,
      header: {
        'content-type': 'application/json'
      }
    }).then(res => {
      const data = res.data
      const topics = data.success ? data.data : []
      this.setState({
        cards: {
          ...this.state.cards,
          [type]: topics
        }
      })
      this.setState({ loading: false })
    })
  }

  onChange (value) {
    this.setState({
      value: value
    })
  }
  
  handleClick (value) {
    this.setState({
      current: value
    })
    const { type } = this.state.tabList[value]
    this.fetchTopicList(type)
  }

  render () {
    return (
      <View className='index'>
        <AtSearchBar
          value={this.state.value}
          onChange={this.onChange.bind(this)}
          />
        <AtTabs
          current={this.state.current}
          scroll
          tabList={this.state.tabList}
          onClick={this.handleClick.bind(this)}>
          {
            this.state.loading ? 
              <AtActivityIndicator></AtActivityIndicator>
            : this.state.tabList.map((tab, i) => {
              return (
                <AtTabsPane current={this.state.current} index={i} key={String(i)}>
                  {
                    this.state.cards[tab.type].map(card => {
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
                  }
                </AtTabsPane>
              )
            })
          }
        </AtTabs>
      </View>
    )
  }
}
