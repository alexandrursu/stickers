import React, { Component } from 'react';

class Menu extends Component {
    state = {users: []}

    componentDidMount() {
        fetch('/users')
            .then(res => res.json())
            .then(users => this.setState({ users }));
    }

    //_noUsers(usersLength){
    //    if(usersLength === 0) {
    //        return "No users"
    //    } else if (usersLength === 1) {
    //        return "No users"
    //    } else {
    //        return `${usersLength} users`
    //    }
    //
    //}

    render() {
        return (
            <div>
            <ul className="menu">
                {this.state.users.map(user =>
                    <li key={user.id}><a href={user.name}>{user.name}</a></li>
                )}
            </ul>
            </div>
        );
    }
}

export default Menu;