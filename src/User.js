import React from 'react';
import { hot } from 'react-hot-loader';
import UserContext from './UserContext';

class User extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {}

    render() {
        return (
            <UserContext.Consumer>
                {user => (
                    <h2>Loged in User: {user.name}</h2>
                )}
            </UserContext.Consumer>
        )
    }
}

export default hot(module)(User)
