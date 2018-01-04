import React from 'react'
import { WhiteSpace, WingBlank, Flex, Carousel } from 'antd-mobile'
import './index.less'

class Dashboard extends React.PureComponent {
  state = {
    current: 0
  }

  componentWillMount() {
    const { onInitHeader } = this.props
    onInitHeader({
      title: '首页',
      iconName: 'home'
    })
  }

  render() {
    const settings = {
      dots: true,
      autoplay: true,
      infinite: true,
      selectedIndex: this.state.current,
      beforeChange: this.beforeSlide,
      afterChange: this.slideTo,
    }

    return <section>
      <WhiteSpace/>
      <WingBlank size="md">
        <Carousel {...settings}>
          <Flex
            justify="center"
            className="flex-container-justify">
            <h3>Carousel 1</h3>
          </Flex>
          <Flex
            justify="center"
            className="flex-container-justify">
            <h3>Carousel 2</h3>
          </Flex>
          <Flex
            justify="center"
            className="flex-container-justify">
            <h3>Carousel 3</h3>
          </Flex>
        </Carousel>
      </WingBlank>
    </section>
  }

  beforeSlide = (from, to) => {
    console.log(`slide from ${from} to ${to}`);
  }

  slideTo = (index) => {
    this.setState({
      current: index
    })
    console.log('slide to', index);
  }
}

export default Dashboard