import React from 'react'

class Setup extends React.PureComponent {

  componentWillMount() {
    const { onInitHeader } = this.props

    onInitHeader({
      title: '设置',
      iconName: 'home'
    })
  }

  render() {
    return <section>
      设置
    </section>
  }
}

export default Setup
