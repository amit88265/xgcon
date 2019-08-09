import {sportSelector,input} from './sportsData';

export const player = {
    playerData: {
        sportSelector,
        playerAvatar: input('input', 'file', 'Avatar', 'Upload Image'),
        playerName: input('input', 'text', 'Name', ''),
        playerRole: input('input', 'text', 'Role', ''),
        playerDesc: input('textArea','', 'Description', ''),
        playerRating: input('input', 'number', 'Rating', '0-5'),
        teamId: input('select', '', 'Select Team', '', [{value: '', label: '--TEAM--', disabled: true, selected: true}]),
    }
}
