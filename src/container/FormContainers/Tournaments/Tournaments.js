import React, { Component } from 'react';
import { tournament } from '../../../store/utility/tournamentData';
import FormElements from '../../../components/FormElements/FormElements';
import Button from '@material-ui/core/Button';
import { inputChangedHandler, addSelectOptionsHandler, formSubmitHandler } from '../../../store/actions/formDataAddActions';
import '../FormContainers.css';

class Tournaments extends Component {
    constructor() {
        super();
        this.state = tournament;
    }

    formInputHandler = (event, inputIdentifier) => {
        const { updatedForm, formIsValid } = inputChangedHandler(event, this.state.tournamentData, inputIdentifier);
        this.setState({ tournamentData: updatedForm, formIsValid });
    }

    addOptionsHandler = (inputIdentifier) => {
        const { updatedForm, formIsValid } = addSelectOptionsHandler(this.state.tournamentData, inputIdentifier);
        this.setState({ tournamentData: updatedForm, formIsValid });
    }

    render() {
        return (
            <div className='formContainer'>
                <form onSubmit={formSubmitHandler}>
                    <FormElements
                        inputs={this.state.tournamentData}
                        changeHandler={this.formInputHandler}
                        addSelectHandler={this.addOptionsHandler}
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

export default Tournaments;