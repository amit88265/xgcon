import React from 'react';
import Inputs from '../Inputs/Inputs';

const FormElements = (props) => {
    const { inputs } = props;
    return (
        Object.keys(inputs).map(input => (
            <Inputs {...inputs[input].elementConfig}
                key={input}
                uniqueId={input}
                label={inputs[input].label}
                value={inputs[input].value}
                elementType={inputs[input].elementType}
                changeHandler={props.changeHandler}
                addSelectHandler={props.addSelectHandler}
            />
        ))
    );
}

export default FormElements;