import React from 'react'

class Login extends React.PureComponent {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  render() {
    return <section className="login">
      login
    </section>
  }
}

export default Login