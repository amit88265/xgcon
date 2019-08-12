import firebase from 'firebase/app';
import 'firebase/firestore';

export const addSelectOptionsHandler = (data, inputIdentifier) => {
    const updatedForm = {
        ...data
    };
    const updatedFormElement = {
        ...updatedForm[inputIdentifier]
    };
    const val = updatedFormElement.value;
    updatedFormElement.elementConfig.options.push({ value: val, label: val });
    updatedFormElement.value = '';
    updatedFormElement.touched = true;
    updatedForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    return { updatedForm, formIsValid: formIsValid };
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
    return { updatedForm, formIsValid: formIsValid };
}

const getOptionValues = (element) =>{
    const values = [];
    let {options} = element.elementConfig;

    options.map( option => {
        if(option.value!=='')
            values.push(option.value)
        
        return 0;
    })

    options = [options[0]];
    return values;
}

export const submitFormData = (docName, key, uniqueId, dataElements)=>{
    const formData = {};
    for(const element in dataElements){
        const elementType = dataElements[element].elementType;
        if(elementType!=='list'){
            formData[element] = dataElements[element].value; 
            dataElements[element].value='';
        }
        else{
            formData[element] = getOptionValues(dataElements[element]);
            dataElements[element].value='';
        }
    }

    const data = {[key]: {
        [uniqueId]: formData
        }
    };

    switch(key){
        case 'tournaments': formData.matches = [];
                            break;
        case 'matches': formData.teams = [];
                        //data.tournaments = {};
                        break;
        case 'teams': formData.players = [];
                      break;
        // case 'players': 
    }

    formSubmitHandler(docName, data);
}

const formSubmitHandler = (docName, data) => {
    firebase.firestore().collection('sports')
    .doc(docName)
    .set(
        data,
        { merge: true }
    ).catch(error=> console.log(error));
}