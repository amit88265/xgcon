import React from 'react';
import DrawerTab from './DrawerTab/DrawerTab';
import './DrawerTabs.css';

const DrawerTabs = (props) => {
    
    const { tabsList,routes} = props;

    return (
        <div className="drawerTabs">
            {tabsList.map((tab, index)=> (
                <DrawerTab
                    key={index} 
                    label={tab}
                    route={routes[index]} />
            ))}
        </div>
    );
};

export default DrawerTabs;