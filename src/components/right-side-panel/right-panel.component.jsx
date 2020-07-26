import React from 'react';
import {connect} from 'react-redux';
import './right-panel.styles.scss';
import Card from '../card/card.component.jsx';

const RightPanel = ({repos}) => {
    return (
        <div className="cards-container">
           {
               repos.map((repo, index) => (
                   <Card key={index} {...repo} index = {index}/>
               ))
           }
        </div>
    )
}

const mapStateToProps = ({app: {repos}}) => ({
    repos: repos,
});

export default connect(mapStateToProps)(RightPanel);