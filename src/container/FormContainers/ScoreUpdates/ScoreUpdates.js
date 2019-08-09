import React, { Component } from 'react';
import { score } from '../../../store/utility/scoresData';
import FormElements from '../../../components/FormElements/FormElements';
import Button from '@material-ui/core/Button';
import { inputChangedHandler, addSelectOptionsHandler, formSubmitHandler } from '../../../store/actions/formDataAddActions';
import '../FormContainers.css';

class ScoreUpdate extends Component {
    constructor() {
        super();
        this.state = score;
    }

    formInputHandler = (event, inputIdentifier) => {
        const { updatedForm, formIsValid } = inputChangedHandler(event, this.state.scoreData, inputIdentifier);
        this.setState({ scoreData: updatedForm, formIsValid });
    }

    addOptionsHandler = (inputIdentifier) => {
        const { updatedForm, formIsValid } = addSelectOptionsHandler(this.state.scoreData, inputIdentifier);
        this.setState({ scoreData: updatedForm, formIsValid });
    }

    render() {
        return (
            <div className='formContainer'>
                <form onSubmit={formSubmitHandler}>
                    <FormElements
                        inputs={this.state.scoreData}
                        changeHandler={this.formInputHandler}
                        addSelectHandler={this.addOptionsHandler}
                    />
                    <Button type='submit'
                        value='Submit'
                        color='primary'
                        variant='outlined'>
                        SEND SCORE
                    </Button>
                </form>
            </div>

        );
    }
}

export default ScoreUpdate;