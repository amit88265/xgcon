import React, { Component } from 'react';
import { player } from '../../../store/utility/playerData';
import FormElements from '../../../components/FormElements/FormElements';
import Button from '@material-ui/core/Button';
import { inputChangedHandler, addSelectOptionsHandler, formSubmitHandler } from '../../../store/actions/formDataAddActions';
import '../FormContainers.css';

class Players extends Component {
    constructor() {
        super();
        this.state = player;
    }

    formInputHandler = (event, inputIdentifier) => {
        const { updatedForm, formIsValid } = inputChangedHandler(event, this.state.playerData, inputIdentifier);
        this.setState({ playerData: updatedForm, formIsValid });
    }

    addOptionsHandler = (inputIdentifier) => {
        const { updatedForm, formIsValid } = addSelectOptionsHandler(this.state.playerData, inputIdentifier);
        this.setState({ playerData: updatedForm, formIsValid });
    }

    render() {
        return (
            <div className='formContainer'>
                <form onSubmit={formSubmitHandler}>
                    <FormElements
                        inputs={this.state.playerData}
                        changeHandler={this.formInputHandler}
                        addSelectHandler={this.addOptionsHandler}
                    />
                    <Button type='submit'
                        value='Submit'
                        color='primary'
                        variant='outlined'>
                        ADD PLAYER
                    </Button>
                </form>
            </div>

        );
    }
}

export default Players;