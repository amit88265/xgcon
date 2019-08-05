import React from 'react';
import {NavLink} from 'react-router-dom';

const DrawerTab = (props) => {
    return (
        <NavLink to={'/' + props.route} className='tabLabel'>
        <div className={props.isActive?'drawerTab activeDrawerTab':'drawerTab'} 
            onClick={props.clickHandler}>
            {props.label}
        </div>
        </NavLink>
    );
};

export default DrawerTab;