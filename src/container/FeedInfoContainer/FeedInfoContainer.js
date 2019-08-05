import React, { Component } from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';

class FeedInfoContainer extends Component {

    render() {
        return (
            <Switch>
                <Route path='/sport' render={()=>(<div>Hello please fill in details for sports.</div>)}/>
                <Route path='/tournament' render={()=>(<div>Hello please fill in details for tournaments.</div>)}/>
                <Route path='/match' render={()=>(<div>Hello please fill in details for match.</div>)}/>
                <Route path='/team' render={()=>(<div>Hello please fill in details for team.</div>)}/>
                <Route path='/player' render={()=>(<div>Hello please fill in details for player.</div>)}/>
                <Route path='/score' render={()=>(<div>Hello please fill in details for scores.</div>)}/>
            </Switch>
        );
    }
}

export default withRouter(FeedInfoContainer);