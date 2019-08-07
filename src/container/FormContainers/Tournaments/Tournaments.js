import React, { Component } from 'react';
// import { connect } from 'react-redux';
import {tournament} from '../../../store/utility/stateData';
import FormElements from '../../../components/FormElements/FormElements';
import Button from '@material-ui/core/Button';
import '../FormContainers.css';

class Tournaments extends Component {
    constructor(){
        super();
        this.state = tournament;
    }

    addSelectOptionsHandler=(inputIdentifier)=>{
        const updatedForm = {
            ...this.state.tournamentData
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
        this.setState({tournamentData: updatedForm, formIsValid: formIsValid});
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedForm = {
            ...this.state.tournamentData
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
        this.setState({tournamentData: updatedForm, formIsValid: formIsValid});
    }

    formSubmitHandler = (event)=>{
        event.preventDefault();
        const {tournamentData} = this.state;
        const formData = {};
        for(const element in tournamentData){
            const elementType = tournamentData[element].elementType;
            if(elementType!=='select' && elementType!=='list')
                formData[element] = tournamentData[element].value; 
            else
                formData[element] = tournamentData[element].elementConfig.options;
        }
        console.log(formData);
    }

    render() {
        return (
            <div className='formContainer'>
                <form onSubmit={this.formSubmitHandler}>
                    <FormElements 
                        inputs = {this.state.tournamentData} 
                        changeHandler={this.inputChangedHandler}
                        addSelectHandler={this.addSelectOptionsHandler}
                    />
                    <Button type='submit' 
                            value='Submit' 
                            color='primary'
                            variant='outlined'>
                                ADD TOURNAMENT
                    </Button>
                </form>
            </div>

        );
    }
}

// const mapDispatchToProps = dispatch => {
//     return {

//     }   
// }

export default Tournaments;
// connect(
//     mapStateToProps, mapDispatchToProps
// )(Tournaments);