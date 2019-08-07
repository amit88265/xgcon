import React, { Component } from 'react';
import Inputs from '../../components/Inputs/Inputs';
import Button from '../../components/Inputs/Button';

class Auth_ extends Component {

    constructor(props) {
        super(props);
        this.authHandler = this.authHandler.bind(this);
    }
    authHandler(e, uniqueID) {

    }

    render() {
        return (
            <div>
                <Inputs elementType="input" type="text" placeholder="user Id"
                    changeHandler={this.authHandler} uniqueID="email" label="Email" />
                <Inputs elementType="input" type="password" placeholder="password"
                    changeHandler={this.authHandler} uniqueID="password" label="Password" />
                    <Button clickHandler={this.btnAuthHandler} label="SignIn"/>
            </div>

        );
    }
}

export default Auth_;