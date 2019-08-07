import React from 'react';
import './Inputs.css';

const Inputs = (props) => {

    let input = null;
    switch (props.elementType) {
        case 'select': input = (
            <select className='selectInput'
                    onChange={(event)=>props.changeHandler(event, props.uniqueId)}>
                {props.options.map(option => (
                    <option key={option.value}
                            value={option.value}>
                        {option.label}
                    </option>
                ))
                }
            </select>
        );
            break;

        case 'input': input = (
            <input type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                onChange={(event)=>props.changeHandler(event, props.uniqueId)} />
        );
            break;

        case 'textArea': input = (
            <textarea  
                placeholder={props.placeholder}
                value={props.value}
                onChange={(event)=>props.changeHandler(event, props.uniqueId)}/>
        );
            break;
        
        case 'list': input = (
                <>
                    <input 
                        value={props.value}
                        placeholder={props.placeholder}
                        onChange={(event)=>props.changeHandler(event, props.uniqueId)}
                    />
                    <button type="button" 
                            onClick={()=> props.addSelectHandler(props.uniqueId)} 
                            className='addItemButton'>
                        Add 
                    </button>
                    <select>
                    {   props.options.map(option => (
                            <option key={option.value}
                                    value={option.value}>
                                {option.label}
                            </option>
                        ))
                    }        
                    </select>
                </>
                );
            break;
        case 'calendar': input = (<input 
                    type={props.type}
                    value={props.value}
                    onChange={(event)=>props.changeHandler(event, props.uniqueId)}
        />);
            break;
        default: input = undefined;
    }

    return (
        <div className='inputBox'>
            <label className='inputLabel'>
                {props.label}:
            </label>
            {input}
        </div>
    );
};

export default Inputs;