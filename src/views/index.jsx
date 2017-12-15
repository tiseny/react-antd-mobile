import React from 'react'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions as userActionCreators } from '../redux/modules/user';

import { Footer } from './layout'
import { Button, Icon } from 'antd-mobile'

import 'antd-mobile/dist/antd-mobile.css'; 
// 引入common样式
import '../static/css/common.less';


class Main extends React.PureComponent {
  componentDidMount() {
    
    this.refs.footer.tab = this.props.location.pathname
  }

  componentWillReceiveProps(nextProps) {
    this.refs.footer.tab = nextProps.location.pathname
  }

  render() {
    console.log(this.props.children)
    return <div id="root">
      {this.props.children}
      <Footer ref="footer" />
    </div>
  }
}

const stateToProps = state => ({
  ...state.user
})

const dispatchToProps = dispatch => ({
  actions: bindActionCreators(userActionCreators, dispatch)
})

export default connect(stateToProps, dispatchToProps)(Main);
