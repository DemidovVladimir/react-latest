import React from 'react'
import propTypes from 'prop-types'

let UserContext
const { Provider, Consumer } = (UserContext = React.createContext('user'))

class UserProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: 'Vladimir'
    }
  }

  static propTypes = {
    children: propTypes.node.isRequired
  }

  changeUser = newUser => {
    this.setState({ currentUser: newUser })
  }

  render() {
    return (
      <Provider
        value={{
          user: this.state.currentUser,
          changeUser: this.changeUser
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export { UserProvider, Consumer as UserConsumer, UserContext }
