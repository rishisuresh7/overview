import React from 'react';
import {connect} from 'react-redux';
import './profile.styles.scss';

const Profile = ({userName, userId, userImage, userLocation, numberOfRepositories, followers, following, joinedDate}) => {
    return (
        <div className="profile-container">
            <div className="profile-main">
                <div className="profile-image-container">
                    <div className="profile-image"
                    style = {
                        {
                            backgroundImage: `url(${userImage})`,
                        }
                    }
                    ></div>
                </div>
                <div className="profile-details">
                    <h2>{userName}</h2>
                    <a href="https://github.com/rishisuresh7" target="_blank" >{`@${userId}`}</a>
                    <span>
                        <i className="fa fa-map-marker"></i>
                        {userLocation}
                    </span>
                    <span>
                        <i className="far fa-calendar-alt"></i>
                        {`Joined ${joinedDate}`}
                    </span>
                </div>
            </div>
            <div className="profile-meta">
                <div className="meta-item">
                    <span>{numberOfRepositories}</span>
                    <span>Repositories</span>
                </div>
                <div className="meta-item">
                    <span>{followers}</span>
                    <span>Followers</span>
                </div>
                <div className="meta-item">
                    <span>{following}</span>
                    <span>Following</span>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({app : { userData}}) => ({
    userName: userData.userName,
    userId: userData.userId,
    userImage: userData.userImage,
    userLocation: userData.location,
    followers: userData.followers,
    following: userData.following,
    numberOfRepositories: userData.numberOfRepositories,
    joinedDate: userData.joinedDate,
});

export default connect(mapStateToProps)(Profile);