export function input(elementType, type, label, placeholder, options) {
    return {
        elementType,
        elementConfig: {
            type,
            placeholder,
            options
        },
        value: '',
        label,
        validation: {
            required: false
        },
        valid: false,
        touched: false
    };
}

export const sportSelector = {
    elementType: 'select',
    elementConfig: {
        options: [
            { value: '', label: '--SPORT--' },
            { value: 'Cricket', label: 'CRICKET' },
            { value: 'TableTennis', label: 'TABLE TENNIS' },
            { value: 'FoosBall', label: 'FOOS BALL' },
            { value: 'Carrom', label: 'CARROM' },
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

export const matchSelector = input('select', '', 'Edit Match', '', [
    { value: '', label: '--MATCH--', disabled: true, selected: true }
]);

export const tournamentSelector = input('select', '', 'Edit Tournament', '', [
    { value: '', label: '--TOURNAMENT--', disabled: true, selected: true}
]);

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
        // scoreUpdateRequirements: {}
    },
    formIsValid: false
}