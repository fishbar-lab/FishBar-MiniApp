import Taro, { Component } from '@tarojs/taro'
import { View, Text, ScrollView } from '@tarojs/components'
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
      scrollHeight: 470,
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
      currentType: 'all',
      current: 0,
      pagination: {
        limit: 10,
        page: 1
      }
    }
  }

  componentWillMount () {
    this.fetchTopicList('all')
  }

  componentDidMount () {
    // const query = Taro.createSelectorQuery()
    // const that = this
    // query.select('.index').boundingClientRect(rect => {
    //   that.setState({
    //     scrollHeight: rect.height - 70
    //   })
    // }).exec()
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  fetchTopicList = (type = '', limit = 10, page = 1) => {
    this.setState({ loading: true })
    Taro.request({
      url: `https://cnodejs.org/api/v1/topics?tab=${type}&limit=${limit}&page=${page}`,
      header: {
        'content-type': 'application/json'
      }
    }).then(res => {
      const data = res.data
      const topics = data.success ? data.data : []
      this.setState({
        cards: {
          ...this.state.cards,
          [type]: [
            ...this.state.cards[type],
            ...topics
          ]
        },
        loading: false
      })
    })
  }

  onChange (value) {
    this.setState({
      value: value
    })
  }
  
  handleClick (value) {
    const { type } = this.state.tabList[value]
    this.setState({
      current: value,
      currentType: type
    })
    this.fetchTopicList(type)
  }

  onScrollToLower(e){
    const { direction } = e.detail
    if (direction) {
      const type = this.state.currentType
      const limit = 10
      const page = this.state.pagination.page + 1
      this.setState({
        pagination: { limit, page }
      })
      this.fetchTopicList(type, limit, page)
    }
  }

  render () {
    const scrollStyle = {
      height: `${this.state.scrollHeight}px`
    }
    const scrollTop = 0
    const Threshold = 20

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
            this.state.tabList.map((tab, i) => {
              return (
                <AtTabsPane current={this.state.current} index={i} key={String(i)}>
                  <ScrollView
                    className='scrollview'
                    scrollY
                    scrollWithAnimation
                    scrollTop={scrollTop}
                    style={scrollStyle}
                    lowerThreshold={Threshold}
                    upperThreshold={Threshold}
                    onScrollToLower={this.onScrollToLower}
                  >
                    {
                      this.state.cards[tab.type].map(card => {
                        return (
                          <Card
                            key={card.id}
                            topicId={card.id}
                            username={card.author.loginname}
                            avatar={card.author.avatar_url}
                            content={card.title}
                            commentCount={card.reply_count}
                            likeCount={card.visit_count}
                          />
                        )
                      })
                    }
                  </ScrollView>
                </AtTabsPane>
              )
            })
          }
        </AtTabs>
      </View>
    )
  }
}
