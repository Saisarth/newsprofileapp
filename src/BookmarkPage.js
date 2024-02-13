import React from 'react';
import {Link} from 'react-router-dom';

const BookmarkPage = () => {
    return (
        <div className="container">
            <h2>Bookmarked Articles</h2>
            <div className="news-cards">
                <div className="news-card">
                    <h3>Article Title 1</h3>
                    <p>Article Excerpt 1</p>
                    <img src="article-thumbnail-1.jpg" alt="Article Thumbnail 1" />
                </div>
                <div className="news-card">
                    <h3>Article Title 2</h3>
                    <p>Article Excerpt 2</p>
                    <img src="article-thumbnail-2.jpg" alt="Article Thumbnail 2" />
                </div>
                
            </div>
            <Link to="/">home</Link>
        </div>
    );
};

export default BookmarkPage;
