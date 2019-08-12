import {sportSelector, matchSelector, tournamentSelector, input} from './sportsData';

export const score = {
    matchData: {
        sportSelector,
        tournamentSelector,
        matchSelector,
    },
    scoreData: {
        comments: input('input', 'text', 'Comments','Optional'), 
        TeamAScore: input('input', 'number', 'Team-A Score'),
        TeamBScore: input('input', 'number', 'Team-B Score'),
    },
}