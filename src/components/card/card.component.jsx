import React, {useEffect, useState} from 'react';
import ReactChart from '../chart/chart.component.jsx';
import './card.styles.scss';
import { getLanguages } from '../../resources/resource.js';

const Card = ({name, gitUrl, description, size, stars, forks, languagesUrl, index}) => {

    const [languages, setLanguages] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        getLanguages(languagesUrl)
        .then(res => res.data)
        .then(res => {
            setLanguages(res);
            setIsError(false);
            setIsLoading(false);
        })
        .catch(error => {
            setIsError(true);
            setIsLoading(false);
        });
    }, [name]);

    return (
        <div className="card-container">
            <div className="card-header">
                <div className="heading">
                    <i className="fa fa-book"></i>
                    <h4>{name}</h4>
                </div>
                <a href={gitUrl} target="_blank">
                    <i className="fa fa-github"></i>
                </a>
            </div>
            <div className="description">
                <p>{ description }</p>
            </div>
            <div className="card-chart">
                <ReactChart languages = {languages} chartType = "doughnut" index = {index}/>
            </div>
            <div className="details">
                <span><i className="far fa-star" aria-hidden="true"></i>{ stars }</span>
                <span><i className="fa fa-code-fork" aria-hidden="true"></i>{ forks }</span>
                <span><i className="fa fa-database" aria-hidden="true"></i>{ size }</span>
            </div>
        </div>
    )
}

export default Card;