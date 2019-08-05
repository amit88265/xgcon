import React,{Component} from 'react';

class Dashboard extends Component {

    constructor(props){
        super(props);
        this.state={defaultTab:this.props.drawerTabs[0]}
    }
    render() {
        return ( 
           <div></div>
           
         );
    }
}

export default Dashboard;