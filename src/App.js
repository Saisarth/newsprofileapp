import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProfilePage from './ProfilePage';
import PostedPage from './posted';
import BookmarkPage from './BookmarkPage.js';
import SettingsPage from './SettingPgae.js';


const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={ProfilePage} />
                <Route path="/posted" component={PostedPage} />
                <Route path="/bookmarked" component={BookmarkPage} />
                <Route path="/setting" component={SettingsPage}/>
                
            </Switch>
        </Router>
    );
};

export default App;
