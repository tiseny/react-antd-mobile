import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actions as userActionCreators } from '../redux/modules/user'

import { Header } from './layout'

import 'antd-mobile/dist/antd-mobile.css'
// 引入common样式
import '../static/css/common.less'

class Main extends React.PureComponent {

  state = {
    title: '',  
    hasHeader: true,
    searchProps: null
  }

  render() {
    const { searchProps, hasHeader } = this.state

    return <div className="page-wrap">
      {hasHeader && <Header searchProps={searchProps} />}
      <div className="page-main">{React.cloneElement(this.props.children, {
        onInit: this.handleInit.bind(this)
      })}</div>
    </div>
  }

  // 设置头部内容
  handleInit(config) {
    this.setState({
      ...config
    })

    // 设置头部
    if (config.title) {
      document.title = config.title
    }
  }

}

const stateToProps = state => ({
  ...state.user
})

const dispatchToProps = dispatch => ({
  actions: bindActionCreators(userActionCreators, dispatch)
})

export default connect(stateToProps, dispatchToProps)(Main);
