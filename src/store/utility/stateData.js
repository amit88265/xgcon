// This file contains inputs required at a particular page.
const sportSelector = {
    elementType: 'select',
    elementConfig: {
        options: [
            { value: 'Cricket', label: 'Cricket' },
            { value: 'Table Tennis', label: 'Table Tennis' },
            { value: 'FoosBall', label: 'FoosBall' },
            { value: 'Carrom', label: 'Carrom' },
        ]
    },
    value: '',
    label: 'Select Sports',
    validation: {
        required: true
    },
    valid: false,
    touched: false
};

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
            { value: 'Xebia', label: 'Xebia' },
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

export const sports = {
    sportsData: {
        sports: { ...sportSelector, elementType: 'list' },
        rulebook: {
            elementType: 'textArea',
            elementConfig: {
                type: 'textArea',
                placeholder: 'Enter Rules'
            },
            value: '',
            label: 'Rule Book',
            validation: {
                required: false
            },
            valid: false,
            touched: false
        },
        routes: {
            elementType: 'list',
            elementConfig: {
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
        },
        scoreUpdateRequirements: {}
    },
    formIsValid: false
}

export const tournament = {

    tournamentData: {
        sports: sportSelector,
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

export const match = {
    sport: null,
    tournament: null,
    editMatchId: null,
    inputs: {}
}

export const team = {
    sport: null,
    tournament: null,
    match: null,
    editTeamId: null,
    inputs: {}
}

export const player = {
    playerId: null,
    inputs: {}
}

export const scores = {
    sport: null,
    tournament: null,
    match: null,
    inputs: {},
}