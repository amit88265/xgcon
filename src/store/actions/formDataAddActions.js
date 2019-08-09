export const addSelectOptionsHandler=(data, inputIdentifier)=>{
    const updatedForm = {
        ...data
    };
    const updatedFormElement = { 
        ...updatedForm[inputIdentifier]
    };
    const val = updatedFormElement.value;
    updatedFormElement.elementConfig.options.push({value: val, label: val});
    updatedFormElement.value= '';
    updatedFormElement.touched = true;
    updatedForm[inputIdentifier] = updatedFormElement;
    
    let formIsValid = true;
    return {updatedForm, formIsValid: formIsValid};
}

export const inputChangedHandler = (event, data, inputIdentifier) => {
    const updatedForm = {
        ...data
    };
    const updatedFormElement = { 
        ...updatedForm[inputIdentifier]
    };
    updatedFormElement.value = event.target.value;
    //updatedFormElement.valid = checkValidity(updatedFormElement.value, updatedFormElement.validation);
    updatedFormElement.touched = true;
    updatedForm[inputIdentifier] = updatedFormElement;
    
    let formIsValid = true;
    // for (let inputIdentifier in updatedForm) {
    //     formIsValid = updatedForm[inputIdentifier].valid && formIsValid;
    // }
    console.log(event.target);
    console.log(updatedForm);
    return {updatedForm, formIsValid: formIsValid};
}

export const formSubmitHandler = (event, data)=>{
    event.preventDefault();
    const formData = {};
    for(const element in data){
        const elementType = data[element].elementType;
        if(elementType!=='select' && elementType!=='list')
            formData[element] = data[element].value; 
        else
            formData[element] = data[element].elementConfig.options;
    }
    console.log(formData);
    // send data to firebase.
}