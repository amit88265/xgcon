import React, { Component } from 'react';
import { team } from '../../../store/utility/teamData';
import FormElements from '../../../components/FormElements/FormElements';
import Button from '@material-ui/core/Button';
import { inputChangedHandler, addSelectOptionsHandler, submitFormData } from '../../../store/actions/formDataAddActions';
import '../FormContainers.css';

class Teams extends Component {
    constructor() {
        super();
        this.state = team;
    }

    formInputHandler = (event, inputIdentifier) => {
        const { updatedForm, formIsValid } = inputChangedHandler(event, this.state.teamData, inputIdentifier);
        this.setState({ teamData: updatedForm, formIsValid });
    }

    addOptionsHandler = (inputIdentifier) => {
        const { updatedForm, formIsValid } = addSelectOptionsHandler(this.state.teamData, inputIdentifier);
        this.setState({ teamData: updatedForm, formIsValid });
    }

    submitForm = (event)=>{
        event.preventDefault();
        const {sportSelector, matchSelector, ...data} = this.state.teamData; 
        submitFormData(sportSelector.value, 'matches', 'match'+ data.date.value ,data);
    }    

    render() {
        return (
            <div className='formContainer'>
                <form onSubmit={this.submitForm}>
                    <FormElements
                        inputs={this.state.teamData}
                        changeHandler={this.formInputHandler}
                        addSelectHandler={this.addOptionsHandler}
                    />
                    <Button type='submit'
                        value='Submit'
                        color='primary'
                        variant='outlined'>
                        ADD TEAM
                    </Button>
                </form>
            </div>

        );
    }
}

export default Teams;