import React from 'react';
import './side-panel.styles.scss';
import Profile from '../profile/profile.component.jsx';
import ReactChart from '../chart/chart.component.jsx';
import SearchBar from '../search-bar/search-bar.component.jsx';

const SidePanel = () => {
    return(
        <div className="side-panel-container">
            <div className="side-search-container">
                <SearchBar/>
            </div>
            <div className="profile-details-container">
                <Profile/>
            </div>
            <div className="profile-stats">
                <div className="profile-stats-heading">
                    <h2>Top Languages</h2>
                </div>
                <div className="profile-stats-chart">
                    <ReactChart chartType="bar"/>
                </div>
            </div>
        </div>
    )
}

export default SidePanel;