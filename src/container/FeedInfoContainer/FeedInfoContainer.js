import React, { Component } from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import Tournaments from '../FormContainers/Tournaments/Tournaments';
import Matches from '../FormContainers/Matches/Matches';
import Teams from '../FormContainers/Teams/Teams';
import Players from '../FormContainers/Players/Players';
import ScoreUpdate from '../FormContainers/ScoreUpdates/ScoreUpdates';

class FeedInfoContainer extends Component {

    render() {
        return (
            <Switch>
                <Route path='/sport' component={()=> <div>Add Sport data</div>}/>
                <Route path='/tournament' component={Tournaments}/>
                <Route path='/match' component={Matches}/>
                <Route path='/team' component={Teams}/>
                <Route path='/player' component={Players}/>
                <Route path='/score' component={ScoreUpdate}/>
                <Route path='/' exact render={()=> (<div>Welcome to XGCON, you can continue to add data.</div>)}/>
            </Switch>
        );
    }
}

export default withRouter(FeedInfoContainer);