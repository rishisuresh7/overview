import React from 'react';
import {connect} from 'react-redux';
import './side-panel.styles.scss';
import Profile from '../profile/profile.component.jsx';
import ReactChart from '../chart/chart.component.jsx';
import SearchBar from '../search-bar/search-bar.component.jsx';
import Loader from '../loader/loader.component.jsx';

const CharPanel = () => {
    return (
        <React.Fragment>
        <div className="profile-stats-heading">
        <h2>Top Languages</h2>
    </div>
    <div className="profile-stats-chart">
        <ReactChart chartType="bar"/>
    </div>
        </React.Fragment>
    )
}

const WithLoaderProfile = Loader(Profile);
const WithLoaderCharts = Loader(CharPanel);


const SidePanel = ({isLoading}) => {
    return(
        <div className="side-panel-container">
            <div className="side-search-container">
                <SearchBar/>
            </div>
            <div className="profile-details-container">
                <WithLoaderProfile  isLoading={isLoading}/>
            </div>
            <div className="profile-stats">
                <WithLoaderCharts isLoading = {isLoading}/>
            </div>
        </div>
    )
}

const mapStateToProps = ({app}) => ({
    isLoading: app.isLoading,
});

export default connect(mapStateToProps)(SidePanel);