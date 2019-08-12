// This file contains inputs required at a particular page.
import {sportSelector, tournamentSelector} from './sportsData';

const tournamentName = {
    elementType: 'input',
    elementConfig: {
        type: 'text',
        placeholder: 'Enter Tournament Name',
    },
    value: '',
    label: 'Tournament Name',
    validation: {
        required: false
    },
    valid: false,
    touched: false
};

const date = {
    elementType: 'calendar',
    elementConfig: {
        type: 'date',
    },
    value: '',
    validation: {
        required: true
    },
    valid: false,
    touched: false
};

const venues = {
    elementType: 'list',
    elementConfig: {
        options: [
            { value: '', label: '--VENUES--' },
        ],
        placeholder: 'Enter Venue'
    },
    label: 'Venue List',
    value: '',
    placeholder: 'Enter New Venue',
    validation: {
        required: false,
    },
    valid: false,
    touched: false
};

const participatingTeams = {
    elementType: 'list',
    elementConfig: {
        placeholder: 'Enter New Team',
        options: [
            { value: '', label: '--TEAMS--' },
        ]
    },
    label: 'Participating Teams',
    value: '',
    validation: {
        required: false
    },
    valid: true,
    touched: false
};

export const tournament = {

    tournamentData: {
        sportSelector,
        tournamentSelector,
        tournament: tournamentName,
        format: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Enter Format'
            },
            value: '',
            label: 'Tournament Format',
            validation: {
                required: false
            },
            valid: false,
            touched: false
        },
        startDate: { label: 'startDate', ...date },
        endDate: { label: 'endDate', ...date },
        venues,
        participatingTeams,
        totalMatches: {
            elementType: 'input',
            elementConfig: {
                type: 'number',
                placeholder: 'Enter No of Matches',
            },
            label: 'Total Matches',
            value: '',
            validation: {
                required: false,
            },
            valid: false,
            touched: false
        },
    },
    formIsValid: false
}


