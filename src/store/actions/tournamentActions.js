import firebase from 'firebase/app';
import 'firebase/firestore';

export const fetchTournamentInfo = (sport, tournament) => {
    return dispatch => {
        firebase.firestore().collection('sports').doc(sport)
            .get().then(doc => {
                if (doc.exists) {
                    const data = doc.data().tournaments[tournament];
                    data[tournament] = tournament;
                    console.log(data);
                    dispatch({ type: 'SET_TOURNAMENT', data });
                } else {
                    console.log('doc not found');
                }
            }).catch(error => console.log('Error getting document', error))
    }
}

export const fetchTournaments = (sport) => {
    return dispatch => {
        firebase.firestore().collection('sports').doc(sport)
            .get().then(doc => {
                if (doc.exists) {
                    const tournaments = doc.data().tournaments;
                    if (!!tournaments) {
                        const values = Object.keys(tournaments);
                        console.log(values);
                        dispatch({ type: 'GET_TOURNAMENTS', values });
                    }
                } else {
                    console.log('doc not found');
                }
            }).catch(error => console.log('Error getting document', error))
    }
}