import React from 'react'
import { Card, WingBlank, WhiteSpace } from 'antd-mobile'

class Shop extends React.PureComponent {

  componentWillMount() {
    const { onInit } = this.props

    onInit({
      title: '买塑网',
      hasHeader: true,
      searchProps: {
        placeholder: '请输入塑料型号、型号、厂家',
        onSearch: this.handleSearch
      }
    })
  }

  render() {
    return <section className="inner-page">
      <WingBlank size="md">
        <WhiteSpace />
        <Card>
          <Card.Header
            title="到十堂打饭"
            extra={<span>¥2</span>}
          />
          <Card.Body>
            <div>哪位顺路的兄弟，帮我到八堂打下饭，米饭一盒+回锅肉一份+清汤一份，速度要快，快饿死了，快快快快！谢谢！</div>
          </Card.Body>
          <Card.Footer content="这是卡尾" extra={<div>这是尾部介绍</div>} />
        </Card>
        <WhiteSpace />
        <Card>
          <Card.Header
            title="到十堂打饭"
            extra={<span>¥2</span>}
          />
          <Card.Body>
            <div>哪位顺路的兄弟，帮我到八堂打下饭，米饭一盒+回锅肉一份+清汤一份，速度要快，快饿死了，快快快快！谢谢！</div>
          </Card.Body>
          <Card.Footer content="南区四号楼 235 宿舍" extra={<div>这是尾部介绍</div>} />
        </Card>
        <WhiteSpace />
        <Card>
          <Card.Header
            title="到十堂打饭"
            extra={<span>¥2</span>}
          />
          <Card.Body>
            <div>哪位顺路的兄弟，帮我到八堂打下饭，米饭一盒+回锅肉一份+清汤一份，速度要快，快饿死了，快快快快！谢谢！</div>
          </Card.Body>
          <Card.Footer content="这是卡尾" extra={<div>这是尾部介绍</div>} />
        </Card>
        <WhiteSpace />
      </WingBlank>
    </section>
  }

  handleSearch(value) {
    console.log(value)
  }
}

export default Shop