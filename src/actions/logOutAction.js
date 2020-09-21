import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { GITHUB_LOGOUT } from "./actionTypes";

class Logout extends Component {
    render() {
        const isLoggingIn = window.location.href.indexOf('/login') > -1;
        const { isLoggedIn } = this.props;

        if (!isLoggedIn) {
            if (isLoggingIn) {
                return <div> </div>
            }
            return <Redirect to="/signup" push={true} />
        }
        return (
            <div>
                <button type='button' onClick={this.props.logout}>Log Out</button>
            </div>
        );
    }
}

const mapStateToProps = ({ githubAuth: { isLoggedIn } }) => {
    return { isLoggedIn };
};

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch((cb) => {
        cb({ type: GITHUB_LOGOUT });
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
