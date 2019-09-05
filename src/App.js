import React from 'react'
import { hot } from 'react-hot-loader'
import User from './User'
import { UserProvider } from './UserContext'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Vladimir'
    }
  }

  changeName(newName) {
    this.setState({
      name: newName
    })
  }

  render() {
    return (
      <UserProvider>
        <h1>Hello World.</h1>
        <User></User>
      </UserProvider>
    )
  }
}

export default hot(module)(App)
