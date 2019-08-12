import React, { Component } from 'react';
import { tournament } from '../../../store/utility/tournamentData';
import FormElements from '../../../components/FormElements/FormElements';
import Button from '@material-ui/core/Button';
import { inputChangedHandler, addSelectOptionsHandler, submitFormData } from '../../../store/actions/formDataAddActions';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/tournamentActions';
import '../FormContainers.css';

class Tournaments extends Component {
    constructor() {
        super();
        this.state = tournament;
    }

    static getDerivedStateFromProps(props, state) {
        const newState = { ...state };
        const newTourData = { ...newState.tournamentData };
        switch (props.change) {
            case 'sports':  newTourData.sportsSelector.elementConfig.options = [
                { value: '', label: '--SPORTS--' },
                ...props.sports
            ];
                break;
            case 'tournaments': newTourData.tournamentSelector.elementConfig.options = [
                { value: '', label: '--TOURNAMENT--' },
                ...props.tournaments
            ];
                break;
            case 'tourData': Object.keys(props.tournamentData).map(dataKey => {
                const val = props.tournamentData[dataKey];
                if(typeof(val)==="object"){
                    newTourData[dataKey].elementConfig.options = val.map( key=> ({value: key, label: key}));
                }else{
                    newTourData[dataKey].value = val; 
                }
                return 0;
            });
                break;
            default: return null;
        }
        newState.tournamentData = newTourData;
        return newState;
    }

formInputHandler = (event, inputIdentifier) => {
    if (inputIdentifier === 'sportSelector') {
        this.props.onSportSelected(event.target.value);
    } else if (inputIdentifier === 'tournamentSelector') {
        this.props.onTournamentSelected(this.state.tournamentData.sportSelector.value, event.target.value);
    }
    const { updatedForm, formIsValid } = inputChangedHandler(event, this.state.tournamentData, inputIdentifier);
    this.setState({ tournamentData: updatedForm, formIsValid });
}

addOptionsHandler = (inputIdentifier) => {
    const { updatedForm, formIsValid } = addSelectOptionsHandler(this.state.tournamentData, inputIdentifier);
    this.setState({ tournamentData: updatedForm, formIsValid });
}

submitForm = (event) => {
    event.preventDefault();
    const { sportSelector, tournamentSelector, tournament, ...data } = this.state.tournamentData;
    submitFormData(sportSelector.value, 'tournaments', tournament.value, data);
}

render() {
    return (
        <div className='formContainer'>
            <form onSubmit={this.submitForm}>
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

const mapStateToProps = state => {
    return {
        sports: state.tour.sports,
        tournaments: state.tour.tournaments,
        tournamentData: state.tour.tournamentData,
        change: state.tour.change,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSportSelected: (sport) => dispatch(actions.fetchTournaments(sport)),
        onTournamentSelected: (sport, tournament) => dispatch(actions.fetchTournamentInfo(sport, tournament)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tournaments);