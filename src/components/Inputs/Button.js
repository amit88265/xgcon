import React from 'react';
import '../../container/Auth/Auth.css';

const Button = (props) => {
    return (
        <div className='Button'>
           <button className={props.styleClassName} 
                   onClick={props.clickHandler}>
                   {props.label}
            </button> 
        </div>
    );
};

export default Button;