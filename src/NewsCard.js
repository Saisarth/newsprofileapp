import React from 'react';

import './style.css'
const NewsCard = ({ title, excerpt, imageUrl }) => {
    return (
        <div className="card">
            <img src={imageUrl} className="card-img-top" alt="Article Thumbnail" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{excerpt}</p>
                <a href="#" className="btn btn-primary">Read More</a>
            </div>
        </div>
    );
};

export default NewsCard;
