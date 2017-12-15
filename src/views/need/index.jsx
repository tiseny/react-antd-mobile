import React from 'react'
import { NavBar, Icon } from 'antd-mobile'

class Need extends React.PureComponent {
  render() {
    return <div>
      <header>
        <NavBar iconName="home" rightContent={[<Icon key="1" type="search" />]}>
          我要求助
        </NavBar>
      </header>
      <section>
        我要求助
      </section>
    </div>
  }
}

export default Need