import React from 'react';
import ReactChart from '../chart/chart.component.jsx';
import './card.styles.scss';

const Card = () => {
    return (
        <div className="card-container">
            <div className="card-header">
                <div className="heading">
                    <i className="fa fa-book"></i>
                    <h2>Test Name</h2>
                </div>
                <a href="https://github.com/rishisuresh7" target="_blank">
                    <i className="fa fa-github"></i>
                </a>
            </div>
            <div className="description">
                <p>
                    loreum ipsum is random text gerenator, used by developers.
                    loreum ipsum is random text gerenator, used by developers.
                </p>
            </div>
            <div className="card-chart">
                <ReactChart/>
            </div>
            <div className="details">
                <span><i className="far fa-star" aria-hidden="true"></i>0</span>
                <span><i className="fa fa-code-fork" aria-hidden="true"></i>0</span>
                <span><i className="fa fa-database" aria-hidden="true"></i>1127</span>
            </div>
        </div>
    )
}

export default Card;