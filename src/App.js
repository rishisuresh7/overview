import React from 'react';
import SearchBar from './components/search-bar/search-bar.component.jsx';
import './App.scss';
import Loader from './components/loader/loader.component.jsx';
import Card from './components/card/card.component.jsx';
import ReactChart from './components/chart/chart.component.jsx';
import SidePanel from './components/side-panel/side-panel.component.jsx';
import RightPanel from './components/right-side-panel/right-panel.component.jsx';

const App = () => {
    return (
        <div className="app" id="app">
            <SidePanel/>
            <RightPanel/>
        </div>
    )
}

export default App;