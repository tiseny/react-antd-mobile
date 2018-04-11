import React from 'react'
import { WhiteSpace, List, Button } from 'antd-mobile'
import './index.less'

class Dashboard extends React.PureComponent {

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  } 

  componentWillMount() {
    const { onInit } = this.props

    onInit({
      title: '首页',
      hasHeader: false
    })
  }

  render() {
    
    return <section style={this.STYLE_SHEET.page}>
      <Button type="primary" style={{width: '90%'}} onClick={this.handleGo.bind(this, 'shop')}>样品商城</Button><WhiteSpace />
      <Button type="primary" style={{width: '90%'}} onClick={this.handleGo.bind(this, 'info')}>个人中心</Button><WhiteSpace />
      
    </section>
  }

  handleGo(type) {
    let url = ''
    switch(type) {
      case 'shop' : url = '/shop'; break;
      case 'info' : url = '/info'; break;
    }
    // 跳转
    this.context.router.push(url)
  }

  STYLE_SHEET = {
    page: {
      display: "flex",
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }
  }

}

export default Dashboard