import React,{Component} from 'react';

class Dashboard extends Component {

    constructor(props){
        super(props);
        this.state={defaultTab:this.props.drawerTabs[0]}
    }
    render() {
        return ( 
            <div>
                 <div>
                {
                    this.props.drawerTabs.map((tab,index)=>{
                        <div>{tab.split(" ").join("")}</div>
                    })
                }
            </div>
            {
                this.props.drawerTabs.map((tab,index)=>{
                    if(tab==drawerTabs)
                    return 
                })
            }
            </div>
           
         );
    }
}

export default Dashboard;