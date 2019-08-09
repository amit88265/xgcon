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

export const matchSelector = input('select', '', 'Select Match', '', [
    { value: '', label: '--MATCH ID--', disabled: true, selected: true }
]);

export const tournamentSelector = input('select', '', 'Select Tournament', '', [
    { value: '', label: '--TOURNAMENT ID--', disabled: true, selected: true}
]);

