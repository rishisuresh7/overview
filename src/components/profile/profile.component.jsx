import React from 'react';
import './profile.styles.scss';

const Profile = () => {
    return (
        <div className="profile-container">
            <div className="profile-main">
                <div className="profile-image-container">
                    <div className="profile-image"
                    style = {
                        {
                            backgroundImage: 'url(https://avatars2.githubusercontent.com/u/39532976?v=4)',
                        }
                    }
                    ></div>
                </div>
                <div className="profile-details">
                    <h2>Rishi Suresh</h2>
                    <a href="https://github.com/rishisuresh7" target="_blank" >@rishisuresh7</a>
                    <span>
                        <i className="fa fa-map-marker"></i>
                        Bangalore
                    </span>
                    <span>
                        <i className="far fa-calendar-alt"></i>
                        Joined 18th May 2018
                    </span>
                </div>
            </div>
            <div className="profile-meta">
                <div className="meta-item">
                    <span>3</span>
                    <span>Repositories</span>
                </div>
                <div className="meta-item">
                    <span>5</span>
                    <span>Followers</span>
                </div>
                <div className="meta-item">
                    <span>10</span>
                    <span>Following</span>
                </div>
            </div>
        </div>
    )
}

export default Profile;