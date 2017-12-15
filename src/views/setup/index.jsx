import React from 'react'
import { NavBar, Icon } from 'antd-mobile'

class Setup extends React.PureComponent {
  render() {
    return <div>
      <header>
        <NavBar iconName="home" rightContent={[<Icon key="1" type="search" />]}>
          设置
        </NavBar>
      </header>
      <section>
        我
      </section>
    </div>
  }
}

export default Setup
