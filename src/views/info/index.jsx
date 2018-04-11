import React from 'react'
import { Card, WingBlank, WhiteSpace, List, Grid, Button } from 'antd-mobile'
import './index.less';

class Info extends React.PureComponent {

  componentWillMount() {
    const { onInit } = this.props

    onInit({
      title: '个人中心',
      hasHeader: false,
    })
  }

  render() {
    const data = [{
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
      text: '我的报价',
    },{
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
      text: '我的订单',
    },{
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
      text: '地址管理',
    },{
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
      text: '发票管理',
    }];

    return <section className="inner-page info-page">
      <div className="avator">
        <div className="bg"></div>
        <div className="avator-main">
          <div className="image"></div>
          <Button type="ghost" inline size="small">点击登录</Button>
        </div>
      </div>
      <WingBlank size="md">
        <WhiteSpace/>
        <Grid data={data} hasLine={false} />
        <WhiteSpace/>
        <List className="my-list">
          <List.Item>
            <i className="iconfont icon-custom-phone"/>客服热线: <b>138 0088 8800</b>
          </List.Item>
        </List>
        <WhiteSpace/>
        <List className="my-list">
          <List.Item>
            <i className="iconfont icon-yijianfankui"/>意见反馈 
          </List.Item>
        </List>
      </WingBlank>
    </section>
  }
}

export default Info
