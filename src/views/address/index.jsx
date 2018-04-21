import React from 'react'
import { Card, WingBlank, WhiteSpace, Checkbox, List, Grid, Button } from 'antd-mobile'
import './index.less';

class Address extends React.PureComponent {

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  componentWillMount() {
    const { onInit } = this.props

    onInit({
      title: '地址管理',
      hasHeader: false,
    })
  }

  render() {

    return <section className="inner-page address-page">
      <WingBlank size="md">
        <WhiteSpace/>
        <Button type="primary" id="add-btn" onClick={this.handleAdd.bind(this)}><i className="iconfont icon-add-copy"/>添加</Button>
        <WhiteSpace/>
        <Card>
          <Card.Header
            title="林青"
            extra={<span>13901054155</span>}
          />
          <Card.Body>
            <div>深圳市宝安区灵芝街道198栋311室</div>
          </Card.Body>
          <Card.Footer 
            content={<Button type="primary" inline size="small">默认地址</Button>} 
            extra={<div><span className="icon-btn"><i className="iconfont icon-yijianfankui"/>编辑</span><span className="icon-btn"><i className="iconfont icon-shanchu"/>删除</span></div>} 
          />
        </Card>
        <WhiteSpace/>
        <Card>
          <Card.Header
            title="林青"
            extra={<span>13901054155</span>}
          />
          <Card.Body>
            <div>深圳市宝安区灵芝街道198栋311室</div>
          </Card.Body>
          <Card.Footer 
            content={<Button type="default" inline size="small">设为默认</Button>} 
            extra={<div><span className="icon-btn"><i className="iconfont icon-yijianfankui"/>编辑</span><span className="icon-btn"><i className="iconfont icon-shanchu"/>删除</span></div>} 
          />
        </Card>
        <WhiteSpace/>
      </WingBlank>
    </section>
  }

  handleAdd() {
    this.context.router.push('/address/add')
  }
}

export default Address
