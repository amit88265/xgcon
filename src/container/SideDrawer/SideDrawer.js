import React, { Component } from 'react';
import DrawerTabs from '../../components/DrawerTabs/DrawerTabs';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {connect} from 'react-redux';
import './SideDrawer.css';

class SideDrawer extends Component {
    render() {
        const {tabs, routes} = this.props;

        return (
            <div>
                    <div className='sideDrawerTop'>
                        <h3>XGCON</h3>
                        <FontAwesomeIcon icon={faBars} className='menuIcon'/>
                    </div>
                    <DrawerTabs tabsList={tabs}
                        routes={routes}/>
            </div>

        );
    }
}

const mapStateToProps = state =>{
    return {
        tabs: state.drawer.tabs,
        routes: state.drawer.routes,
    }
}

const mapDispatchToProps = dispatch =>{
    return {

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SideDrawer);