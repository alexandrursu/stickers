import React, { Component } from 'react';

class Menu extends Component {
    state = {users: []}

    componentDidMount() {
        fetch('/users')
            .then(res => res.json())
            .then(users => this.setState({ users }));
    }

    _noUsers(usersLength){
        if(usersLength === 0) {
            return "No users"
        } else if (usersLength === 1) {
            return "No users"
        } else {
            return `${usersLength} users`
        }

    }

    render() {
        return (
            <div>
            <h1>{this._noUsers(this.state.users.length)}</h1>
            <ul className="Menu">
                {this.state.users.map(user =>
                    <li key={user.id}>{user.username}</li>
                )}
            </ul>
            </div>
        );
    }
}

export default Menu;