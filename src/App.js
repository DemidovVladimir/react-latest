import React from 'react'
import { hot } from 'react-hot-loader'
import User from './User';
import UserContext from './UserContext';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Vladimir'
    }
  }

  render() {
    return (
      <div>
        <h1>Hello World.</h1>
          <UserContext.Provider value={this.state}>
              <User></User>
          </UserContext.Provider>
      </div>
    )
  }
}

export default hot(module)(App)
