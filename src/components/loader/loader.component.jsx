import React from 'react';
import './loader.styles.scss';

const Loader = (WrappedComponent) => {
    return ({isLoading, ...otherProps}) => {
        return (
            isLoading ?
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
            </div>:
            <WrappedComponent {...otherProps}/>
        )
    }
}

export default Loader;