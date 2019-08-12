import React, { Component } from 'react';
import Inputs from '../../components/Inputs/Inputs';
import Button from '../../components/Inputs/Button';
import {auth} from '../../store/actions/authActions'; 
import {connect} from 'react-redux';
import './Auth.css';

class Auth extends Component {

    constructor(props) {
        super(props);
        this.state={
            userId: '',
            password: ''
        }
    }
    
    authHandler = (e, uniqueID) => {
        
        switch (uniqueID) {
            case 'userID':
                this.setState({userId: e.target.value});
                break;
            case 'password':
                this.setState({password: e.target.value});
                break;
            default: break;
        }
    }

    componentDidMount(){
        if(this.props.isSigned){
            this.props.history.push('/');
        }
    }

    componentDidUpdate(){
        if(this.props.isSigned){
            this.props.history.push('/');
        }
    }

    render() {
        const {userId, password} = this.state;

        return (
            <div className="authRoot">
                <div className="authBody">
                    <div className="authTag">
                        {this.props.message}
                    </div>
                    <Inputs styleClassName="authInputBox" 
                            elementType="input" 
                            type="text" 
                            placeholder="Enter your username"
                            changeHandler={this.authHandler} 
                            uniqueId="userID" 
                            label="User Id"
                            value={userId} />
                    <Inputs styleClassName="authInputBox" 
                            elementType="input" 
                            type="password" 
                            placeholder="Enter Password"
                            changeHandler={this.authHandler} 
                            uniqueId="password" 
                            label="Password"
                            value={password} />
                    <Button styleClassName="authButton" 
                            clickHandler={()=> this.props.onLogin(userId, password)}
                            label="SignIn" />
                </div>
            </div>

        );
    }
}

const mapStateToProps = state =>{
    return {
        message: state.auth.message,
        isSigned: !!state.auth.user,
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onLogin: (userId, password)=> dispatch(auth(userId, password)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);