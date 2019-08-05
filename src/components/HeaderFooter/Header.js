import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Avatar } from '@material-ui/core';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import {NavLink} from 'react-router-dom';
import './HeaderFooter.css';

const Header = (props) => {

    const loginButton = (
                        <NavLink to='/auth' className='navLink'>
                        <Button color="inherit"
                                 variant="outlined">
                            LogIn
                        </Button>
                        </NavLink>
    );

    const avatar = (
            <HeaderMenu onLogout={props.onLogout}>
                <Avatar src={props.userImage} />
            </HeaderMenu>
    );

    return (
        <div className="navbar">
            <Typography variant="h6" className='logo'>
                    XGCON
            </Typography>
            
            <div className='navLinks'>
                {
                    props.isSigned ? avatar : loginButton
                }
            </div>
        </div>
    );

}

export default Header;