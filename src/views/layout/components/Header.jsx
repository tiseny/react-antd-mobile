import React from 'react'
import PropTypes from 'prop-types'
import { SearchBar } from 'antd-mobile'
import './header.less';

let timer = null

class Header extends React.PureComponent {

  state = {
    value: ''
  }

  render() {
    const { searchProps } = this.props

    const searchbar = searchProps ? <SearchBar
      value={this.state.value}
      onChange={this.handleChange.bind(this)}
      {...searchProps}
    /> : null

    return <header className="page-header">
      <div className="am-navbar">
        <div className="logo">logo</div>
        <div className="searchbar">{searchbar}</div>
      </div>
    </header>
  }

  handleChange(value) {
    clearTimeout(timer);

    this.setState({
      value: value
    })

    timer = setTimeout(() => {
      this.props.searchProps.onSearch(value)
    },300)
  }

}

export default Header