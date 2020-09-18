import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Logout extends Component {
    state = {
        isLoggedOut: false
    };

    logOut = () => {
        localStorage.clear();
        this.setState({isLoggedOut: true});
    };

    render() {
        const { isLoggedOut } = this.state;

        if (isLoggedOut) {
            return <Redirect to="/signup" push={true} />
        }
        return (
            <div>
                <button type='button' onClick={this.logOut}>Log Out</button>
            </div>
        );
    }
}

export default Logout;