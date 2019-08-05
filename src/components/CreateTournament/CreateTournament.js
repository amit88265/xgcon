import React, { Component } from 'react';

import './CreateTournament.css';
import TournamentElements from '../TournamentPieces/TournamentElements';


class CreateTournament extends Component {


    render() {
        const sportValues = ['--Choose Game--', 'Cricket', 'Table Tennis', 'Carrom', 'Foos Ball'];
        const tournamentValues=['--Edit Tournament',];
        return (
            <div className="rootTournament">
                <div>
                   <TournamentElements/>
                   <TournamentElements/>
                </div>


                <div className="tournamentBody">

                    <div className="tournamentBodyElements">
                        <label for="sportName">Name:</label>
                        <input name="sportName" />
                    </div>

                    <div className="tournamentBodyElements">
                        <label for="sportName">Format:</label>
                        <input name="sportName" />
                    </div>



                    <div className="tournamentBodyElements">
                        <span>Duration:</span>
                        <div className="dateChooser">
                            <label for="start">Start:</label>
                            <input type="date" id="start" name="tournament-start" min="2018-01-01" max="2018-12-31" />
                        </div>
                        <div className="dateChooser">
                            <label for="start">End:</label>
                            <input type="date" id="start" name="tournament-start" min="2018-01-01" max="2019-12-31" />
                        </div>
                    </div>

                    <div className="tournamentBodyElements">
                        <label for="sportName">Add Teams:</label>
                        <input name="sportName" />
                        <button className="btnAddTeam">Add Team</button>
                    </div>

                    <div className="tournamentBodyElements">
                        <label for="sportName">Add Venues:</label>
                        <input name="sportName" />
                        <button className="btnAddVenue">Add Venue</button>
                    </div>

                    <div className="tournamentBodyElements">
                        <label for="sportName">Total Matches:</label>
                        <input name="sportName" />
                    </div>

                    <button className="btnSubmitTournament">Submit</button>

                </div>

            </div>
        );
    }
}


export default CreateTournament;