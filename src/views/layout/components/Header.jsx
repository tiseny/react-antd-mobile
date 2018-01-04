import React from 'react'
import PropTypes from 'prop-types'
import { NavBar } from 'antd-mobile'

class Header extends React.PureComponent {

  static PropTypes = {
    title: PropTypes.string,    // 标题
    iconName: PropTypes.string  // icon 名字
  }

  render() {
    const { title, iconName } = this.props
    return <header>
      <NavBar>
        {title}
      </NavBar>
    </header>
  }
}

export default Header