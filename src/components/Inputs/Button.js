import React from 'react';

const Button = () => {
    return (
        <div className='Button'>
           <button className={props.styleClass} 
                   onClick={props.clickHandler}>
                   {props.label}
            </button> 
        </div>
    );
};

export default Button;