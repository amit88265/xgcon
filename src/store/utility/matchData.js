import {sportSelector, tournamentSelector, matchSelector, input} from './sportsData';

export const match = {
    matchData: {
        sportSelector,
        tournament: {...tournamentSelector, label: 'Select Tournament'},
        matchSelector,
        matchType: input('select','', 'Match Type', '', [{value:'', label:'--TYPE--'}, {value:'ODI', label:'ODI'}, {value:'T20', label:'T20'}, {value:'OTHER', label:'OTHER'}]),
        date: input('calendar', 'date', 'Match Date'),
        time: input('calendar', 'time', 'Match Timings'),
        venue: input('select', '', 'Venue', '', [{value:'', label: '--VENUE--'}]),
        teams: input('list', '','Teams', 'Enter TeamName',[{value:'', label: '--TEAMS--'}]),
        status: input('input', 'text','Status', 'Status'),
        winner: input('input', 'text','Winner', 'Team Name'),
    }
}