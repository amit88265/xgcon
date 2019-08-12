import React,{Component} from 'react';
import FeedInfoContainer from '../../container/FeedInfoContainer/FeedInfoContainer';
import SideDrawer from '../../container/SideDrawer/SideDrawer';
import './Dashboard.css';

class Dashboard extends Component {
    constructor(props){
        super(props);
        if(!localStorage.getItem('isSigned')){
            props.history.push('/auth');
        }
    }

    render() {
        return ( 
            <div className="dashboard">
                <div className="sideDrawer">
                    <SideDrawer/>
                </div>
                <div className="feedInfoContainer">
                    <FeedInfoContainer/>
                </div>
            </div>
        );
    }
}

export default Dashboard;