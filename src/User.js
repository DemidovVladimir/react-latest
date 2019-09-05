import React from 'react'
import { UserConsumer } from './UserContext'

export default class User extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {}

  render() {
    return (
      <UserConsumer>
        {({ user, changeUser }) => (
          <>
            <h2>Loged in User: {user}</h2>
            <button onClick={() => changeUser('Fedor')}>Change name</button>
          </>
        )}
      </UserConsumer>
    )
  }
}
