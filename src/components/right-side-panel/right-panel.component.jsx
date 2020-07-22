import React from 'react';
import './right-panel.styles.scss';
import Card from '../card/card.component.jsx';

const RightPanel = () => {
    return (
        <div className="cards-container">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    )
}

export default RightPanel;