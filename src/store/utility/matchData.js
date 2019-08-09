import {sportSelector, tournamentSelector, input} from './sportsData';

export const match = {
    matchData: {
        sportSelector,
        tournamentSelector,
        matchId: input('input', 'text','Match ID', 'AZXDQ',),
        matchType: input('select','', 'Match Type', '', [{value:'', label:'--MATCH TYPE--'}, {value:'ODI', label:'ODI'}, {value:'T20', label:'T20'}, {value:'OTHER', label:'OTHER'}]),
        date: input('calendar', 'date', 'Match Date'),
        time: input('calendar', 'time', 'Match Timings'),
        venue: input('select', '', 'Venue', '', [{value:'', label: '--VENUE--'}]),
        team1: input('select', '','Team A', '',[{value:'', label: '--TEAM 1--'}]),
        team2: input('select', '','Team B', '',[{value:'', label: '--TEAM 2--'}]), 
        status: input('input', 'text','Status', 'Status'),
        winner: input('input', 'text','Winner', 'Team Name'),
    }
}