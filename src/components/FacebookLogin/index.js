/**
 * Created by Joseph on 27/02/2018.
 */
import React, {Component} from 'react';
import sdkLoader from './sdkLoader';

export default class FacebookLogin extends Component {

    events = {
         FACEBOOK_SDK_READY_EVENT: "FacebookSDKReady"
    };

    state = {
        username: null
    };

    constructor() {
        super();
        document.addEventListener(this.events.FACEBOOK_SDK_READY_EVENT, this.initializeFBComponent);
        sdkLoader(this.events.FACEBOOK_SDK_READY_EVENT);
    }

    initializeFBComponent = () => {
        this.FB = window.FB;
        document.removeEventListener(this.FACEBOOK_SDK_READY_EVENT, this.initializeFBComponent);
    };

    /**
     * Check login status
     */
    checkLoginStatus = () => {
        if (!this.FB) return;
        this.FB.getLoginStatus(this.loginHandler);
    };

    /**
     * Check login status and call login api is user is not logged in
     */
    login = () => {
        if(process.env.NODE_ENV === "development") {
            this.setState({username: "Jose"})
            return;
        }

        if (!this.FB) return;

        this.FB.getLoginStatus(response => {
            if (response.status === 'connected') {
                this.loginHandler(response);
            } else {
                this.FB.login(this.loginHandler, {scope: 'public_profile'});
            }
        }, );
    };

    /**
     * Handle login response
     */
    loginHandler = response => {
        if (response.status === 'connected') {
            this.FB.api('/me', userData => {
                let result = {
                    ...response,
                    user: userData
                };
                this.props.onLogin(true, result);
                this.setState({
                    username: result.user.name
                });
            });
        } else {
            console.log("ups can't login joe!")
            this.props.onLogin(false);
        }
    };

    renderButton = () => {
        if(process.env.NODE_ENV === "development") {
            return(
                <div>
                    <button className="" onClick={this.login}>Login with Facebook</button>
                </div>
            );
        } else {
            return(
                <div
                    onClick={this.login}
                    className="fb-login-button"
                    data-max-rows="1"
                    data-size="large"
                    data-button-type="continue_with"
                    data-show-faces="false"
                    data-auto-logout-link="false"
                    data-use-continue-as="false" />
            );
        }

    };

    render() {
        if(this.state.username){
            return (<div>
                <h2>{this.state.username}</h2>
            </div>);
        } else {
            return this.renderButton();
        }

    }
}