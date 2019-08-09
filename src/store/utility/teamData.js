import {sportSelector, input, tournamentSelector} from './sportsData';

export const team = {
    teamData: {
        sportSelector,
        tournamentSelector,
        teamName: input('select', '', 'Team Name', '', []),
        teamAvatar: input('input', 'file', 'Team Avatar', ),
        teamSquad: input('list','', 'Squad', 'Player Name',[]),
        noOfPlayers: input('input','number', 'No. Players', '0'),
    }
}