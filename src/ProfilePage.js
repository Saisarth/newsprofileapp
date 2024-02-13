import React from 'react';
import { Link } from 'react-router-dom';

import NewsCard from './NewsCard';
import './style.css'

const ProfilePage = () => {
    return (
        <div className="container">
            <div className="user-info">
                <img src="https://purepng.com/public/uploads/large/purepng.com-manmanadult-malemale-childboy-beingmens-1421526920943c4xhn.png" alt="User Avatar" />
                <h2>joe alef</h2>
                <p>developer</p>
            </div>
            <div className="tabs">
                <Link to="/posted">Posted</Link>
                <Link to="/bookmarked">Bookmarked</Link>
            </div>
            <div className="news-cards"> <NewsCard
                    title="News Title 1"
                    excerpt="This is a brief excerpt of the news article."
                    imageUrl="https://framerusercontent.com/images/B60O9vU08hbFOWfqaBn5nZAR8.png"
                />
                <NewsCard
                    title="News Title 2"
                    excerpt="This is about creating content."
                    imageUrl="https://framerusercontent.com/images/B60O9vU08hbFOWfqaBn5nZAR8.png"
                />
            
                {/* News cards will be rendered here based on route */}
            </div>
            <Link to="/setting">
            <i className="bi bi-gear"></i> Settings
            </Link>
        </div>
    );
};

export default ProfilePage;
