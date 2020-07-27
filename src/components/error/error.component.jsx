import React from 'react';
import './error.styles.scss';

const Error = () => {
    return (
        <div className="error-container">
            <div className="error-image-container"
            style = {
                {
                    backgroundImage: 'url(./assets/images/go-avatar.png)',
                }
            }
            >
            </div>
            <div className="error-message-container">
                <h1>Oops Something Went Wrong....</h1>
                <p>Please try again later....</p>
            </div>
        </div>
    )
}

export default Error;