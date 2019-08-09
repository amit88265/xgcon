import {sportSelector, input, matchSelector, tournamentSelector} from './sportsData';

export const team = {
    teamData: {
        sportSelector,
        matchSelector,
        tournamentSelector,
        teamId: input('input', 'text', 'Team Id', 'TeamName1'),
        teamName: input('input', 'text', 'Team Name', 'Team Name'),
        teamAvatar: input('input', 'file', 'Team Avatar', ),
        teamSquad: input('list','', 'Squad', 'Player Name',[]),
        noOfPlayers: input('input','number', 'No. Players', '0'),
    }
}