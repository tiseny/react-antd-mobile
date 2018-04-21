import React from 'react'
import { Card, WingBlank, WhiteSpace, Checkbox, List, Grid, Button } from 'antd-mobile'
import './index.less';

class Payways extends React.PureComponent {

  componentWillMount() {
    const { onInit } = this.props

    onInit({
      title: '支付页',
      hasHeader: false,
    })
  }

  render() {

    return <section className="inner-page payways-page">
      <WingBlank size="md">
        <WhiteSpace/>
        <List className="top-list">
          <List.Item>
            <div className="title">订单总价：</div>
            <b>¥11000.00</b>
          </List.Item>
        </List>
        <WhiteSpace/>
        <List className="my-list">
          <List.Item>
            <i className="iconfont icon-weixin" style={{color: '#3a0'}}/> 微信支付
            <Checkbox.CheckboxItem checked/>
          </List.Item>
        </List>
        <WhiteSpace/>
        <List className="my-list">
          <List.Item>
            <i className="iconfont icon-yijianfankui"/> 对公账户（线下转账）
            <Checkbox.CheckboxItem/>
          </List.Item>
        </List>
        <WhiteSpace/>
        <Button type="primary" id="pay-btn">立即支付</Button>
      </WingBlank>
    </section>
  }
}

export default Payways
