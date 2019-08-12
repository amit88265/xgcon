import React, { Component, Fragment } from 'react';
import Header from '../../components/HeaderFooter/Header';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/authActions';
import './Layout.css';
 
class Layout extends Component {

    constructor(props){
        super(props);
        props.authenticate();
    }

    redirectUser = (redirectTo = this.props.redirectTo)=>{
        this.props.history.replace(redirectTo);
    }

    logoutUser = ()=>{
        console.log("logging Out"+this.props.redirectTo);
        this.props.onLogoutUser();
        this.redirectUser('/');
    } 

    render() {

        const {isSigned, children} = this.props;
        return (
            <Fragment>
                <Header isSigned={isSigned} 
                onLogout={this.logoutUser}
                history={this.props.history}/>
                <main>
                    {children}
                </main>
            </Fragment>
        );
    }
}

const mapStateToProps = state =>{
    return {
        isSigned: !!state.auth.user,
        userId: state.auth.user,
        redirectTo: state.auth.redirectTo
    }
}

const mapDispatchToProps = dispatch=>{
    return {
        authenticate: ()=>dispatch(actions.authStart()),
        onLogoutUser: ()=>dispatch(actions.authLogout())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Layout);