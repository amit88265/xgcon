import React, { Component } from 'react';
import Inputs from '../../components/Inputs/Inputs';
import Button from '../../components/Inputs/Button';
import firebase from 'firebase';


class Auth_ extends Component {

    constructor(props) {
        super(props);
        this.authHandler = this.authHandler.bind(this);
        this.btnAuthHandler = this.btnAuthHandler.bind(this);
        this.userId = "";
        this.password = ""
    }
    authHandler(e, uniqueID) {
        switch (uniqueID) {
            case 'userID':
                this.userId = e.target.value;
                break;
            case 'password':
                this.password = e.target.value;
                break;
            default: return undefined;
        }
    }

    btnAuthHandler() {
        firebase.firestore().collection("admins").get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                if (this.userId === doc.data().userId && this.password === doc.data().password) {
                    console.log("hurraty");
                }
            })
        });
    }
    render() {
        return (
            <div className="authRoot">
                <div className="authTag">Enter details to access your page</div>
                <div className="authBody">
                    <Inputs styleClassName="authInputBox" elementType="input" type="text" placeholder="user Id"
                        changeHandler={this.authHandler} uniqueId="userID" label="UserId" />
                    <Inputs styleClassName="authInputBox" elementType="input" type="password" placeholder="password"
                        changeHandler={this.authHandler} uniqueId="password" label="Password" />
                    <Button styleClassName="authButton" clickHandler={this.btnAuthHandler}
                        label="SignIn" />
                </div>
            </div>

        );
    }
}

export default Auth_;