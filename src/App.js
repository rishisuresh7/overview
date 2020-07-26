import React from 'react';
import './App.scss';
import SidePanel from './components/side-panel/side-panel.component.jsx';
import RightPanel from './components/right-side-panel/right-panel.component.jsx';
import SearchBar from './components/search-bar/search-bar.component.jsx';

const App = () => {
    return (
        <div className="app" id="app">
            <SearchBar/>
            <div className="search-result">
                <SidePanel/>
                <RightPanel/>
            </div>
        </div>
    )
}

export default App;