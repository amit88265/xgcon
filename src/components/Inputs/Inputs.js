import React from 'react';

const Inputs = (props) => {
    
    const input = null;

    switch(props.type){
        case 'select': input = (
                <select>
                    {props.options.map( option => (
                                <option value={option.value}>
                                    {option.label}
                                </option>
                                )
                            )
                    }
                </select>
        );
        case 'number': input = (<input type={props.type} />) ;
        case 'text': input = (<input type={props.type} className=''/>) ;
        case 'textArea': input = (<input type={props.type}/>) ;
        case 'list':  input = (<input onKeyUp={}/>) ; 
        case 'calendar': ;     
    }
    
    return (
        <div>
            <label></label>
            {input}            
        </div>
    );
};

export default Inputs;