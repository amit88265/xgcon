import React, { Component } from 'react';
import { match } from '../../../store/utility/matchData';
import FormElements from '../../../components/FormElements/FormElements';
import Button from '@material-ui/core/Button';
import { inputChangedHandler, addSelectOptionsHandler, submitFormData } from '../../../store/actions/formDataAddActions';
import '../FormContainers.css';

class Matches extends Component {
    constructor() {
        super();
        this.state = match;
    }

    formInputHandler = (event, inputIdentifier) => {
        const { updatedForm, formIsValid } = inputChangedHandler(event, this.state.matchData, inputIdentifier);
        this.setState({ matchData: updatedForm, formIsValid });
    }

    addOptionsHandler = (inputIdentifier) => {
        const { updatedForm, formIsValid } = addSelectOptionsHandler(this.state.matchData, inputIdentifier);
        this.setState({ matchData: updatedForm, formIsValid });
    }

    submitForm = (event)=>{
        event.preventDefault();
        const {sportSelector, matchSelector, ...data} = this.state.matchData;
        const uniqueId = new Date(data.date.value).toDateString() + data.time.value; 
        submitFormData(sportSelector.value, 'matches', uniqueId ,data);
    }    

    render() {
        return (
            <div className='formContainer'>
                <form onSubmit={this.submitForm}>
                    <FormElements
                        inputs={this.state.matchData}
                        changeHandler={this.formInputHandler}
                        addSelectHandler={this.addOptionsHandler}
                    />
                    <Button type='submit'
                        value='Submit'
                        color='primary'
                        variant='outlined'>
                        ADD MATCH
                    </Button>
                </form>
            </div>

        );
    }
}

export default Matches;