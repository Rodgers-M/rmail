import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import paths from '../../config/paths';
import Header from '../header/Header';
import NavigationBar from '../navigation_bar/NavigationBar';
import Inbox from '../inbox/Inbox';

const App = () => (
  <Router>
    <div>
      <Header />
      <div className="content">
        <NavigationBar />
        <Route exact path={paths.root} component={Inbox} />
        <Route exact path={paths.inbox} component={Inbox} />
        <Route exact path={paths.important} component={Inbox} />
        <Route exact path={paths.sentMail} component={Inbox} />
        <Route exact path={paths.drafts} component={Inbox} />
        <Route exact path={paths.spam} component={Inbox} />
      </div>
    </div>
  </Router>
);

export default App;
