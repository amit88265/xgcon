import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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
        <NavLink to='/auth' className='navLink'>
            <Button variant='outlined'
                    color='inherit'
                    onClick={props.onLogout}>
                Logout
            </Button>
        </NavLink>
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