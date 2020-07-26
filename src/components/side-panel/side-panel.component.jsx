import React from 'react';
import {connect} from 'react-redux';
import './side-panel.styles.scss';
import Profile from '../profile/profile.component.jsx';
import ReactChart from '../chart/chart.component.jsx';
import SearchBar from '../search-bar/search-bar.component.jsx';
import Loader from '../loader/loader.component.jsx';

const WithLoaderProfile = Loader(Profile);
const WithLoaderChart = Loader(ReactChart);

const SidePanel = ({isLoading, languages}) => {
    return(
        <div className="side-panel-container">
            <div className="side-search-container">
                <SearchBar/>
            </div>
            <div className="profile-details-container">
                <WithLoaderProfile  isLoading={isLoading}/>
            </div>
            <div className="profile-stats">
                <div className="profile-stats-chart">
                    <WithLoaderChart isLoading = {isLoading} chartType="bar" languages = {languages} label= "No of Projects"/>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({app}) => ({
    isLoading: app.isLoading,
    languages: app.languages,
});

export default connect(mapStateToProps)(SidePanel);