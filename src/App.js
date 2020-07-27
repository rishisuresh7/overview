import React from 'react';
import {connect} from 'react-redux';
import './App.scss';
import SidePanel from './components/side-panel/side-panel.component.jsx';
import RightPanel from './components/right-side-panel/right-panel.component.jsx';
import SearchBar from './components/search-bar/search-bar.component.jsx';
import Loader from './components/loader/loader.component.jsx';
import Error from './components/error/error.component.jsx';

const WithLoader = Loader(RightPanel);

const App = ({firstHit, isLoading, isError}) => {
    return (
        <div className="app" id="app">
            <SearchBar/>
            {
                firstHit ?
                null :
                (
                    isError ?
                    <Error/> :
                    <div className="search-result">
                        <SidePanel/>
                        <div className="right-panel-result">
                            <WithLoader isLoading = {isLoading}/>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

const mapStateToProps = state => ({
    firstHit: state.app.firstHit,
    isLoading: state.app.isLoading,
    isError: state.app.isError,
})

export default connect(mapStateToProps)(App);