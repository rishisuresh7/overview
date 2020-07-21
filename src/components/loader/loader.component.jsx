import React from 'react';
import './loader.styles.scss';

const Loader = () => {
    return (
        <div className="loader-container">
            <div className="loader-wrapper">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
            </div>
        </div>
    )
}

export default Loader;