import React, { Component } from 'react';
import DrawerTabs from '../../components/DrawerTabs/DrawerTabs';
import {connect} from 'react-redux';

class SideDrawer extends Component {
    render() {
        const {tabs, routes} = this.props;

        return (
            <DrawerTabs tabsList={tabs}
                        routes={routes}/>
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