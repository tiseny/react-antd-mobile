import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actions as userActionCreators } from '../redux/modules/user'

import { Header, Footer } from './layout'

import 'antd-mobile/dist/antd-mobile.css'
// 引入common样式
import '../static/css/common.less'


class Main extends React.PureComponent {

  state = {
    title: '首页',
    iconName: 'home'
  }

  componentDidMount() {  
    this.refs.footer.tab = this.props.location.pathname
  }

  componentWillReceiveProps(nextProps) {
    this.refs.footer.tab = nextProps.location.pathname
  }

  render() {
    const { title, iconName } = this.state
    const result = this.checkRouter()
    const children = this.props.children
    const childProps = result.isChild ? {
      onInitHeader: this.handleSetHeader.bind(this)
    } : null

    return <div className={result.isChild ? "page-wrap" : 'page-wrap full'}>
      {result.hasHeader && <Header title={title} iconName={iconName}/>}
      <div className="page-main">{React.cloneElement(children, childProps)}</div>
      {result.hasFooter && <Footer ref="footer" />}
    </div>
  }

  // 设置头部内容
  handleSetHeader(header) {
    console.log(header)
    this.setState({
      ...header
    })
  }

  // 检查路由
  checkRouter() {
    const pathname = window.location.pathname

    let hasHeader = true
    let hasFooter = true
    let isChild = true

    // 遍历 名单
    for(let i = 0; i < this.UN_CHILD_PAGE.length; i ++) {
      if (new RegExp(this.UN_CHILD_PAGE[i]).test(pathname)) {
        hasHeader = false
        hasFooter = false
        isChild = false
        break;
      }
    }

    return {
      isChild,  // 是否是子页面，
      hasHeader,  // 是否有头部
      hasFooter  // 是否有底部
    }
  }

  UN_CHILD_PAGE = ['^/login.*', '^/register.*']

}

const stateToProps = state => ({
  ...state.user
})

const dispatchToProps = dispatch => ({
  actions: bindActionCreators(userActionCreators, dispatch)
})

export default connect(stateToProps, dispatchToProps)(Main);
