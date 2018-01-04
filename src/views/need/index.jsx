import React from 'react'

class Need extends React.PureComponent {

  componentWillMount() {
    const { onInitHeader } = this.props

    onInitHeader({
      title: '我要求助',
      iconName: 'home'
    })
  }

  render() {
    return <section>
      我要求助
    </section>
  }
}

export default Need