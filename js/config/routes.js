import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../components/App';
import HomeState from '../components/HomeState';
import Messages from '../components/Messages';
import ChallengeCodePanel from '../components/ChallengeCodePanel';
import Main from "../components/Main";
import NotFound from "../components/NotFound";
import Home from '../components/Home';
import HomeContent from '../components/HomeContent';
import About from '../components/About';
import PrivacyPolicy from '../components/PrivacyPolicy';
import TermsOfService from '../components/TermsService';
import LeaveThisEvent from '../components/LeaveThisEvent';

export default (
  <Route path='/' component={Home} >
    <Route path='/about' component={About} />
    <Route path="/privacy-policy" component={PrivacyPolicy} />
    <Route path="/terms-of-service" component={TermsOfService} />
    <IndexRoute component={HomeContent} />
    <Route path='/:pid' component={Main}>
      <IndexRoute component={HomeState} />
      <Route path="/:pid/messages" component={Messages} />
    </Route>
    <Route path='/:pid/leave-this-event' component={App}>
      <IndexRoute component={LeaveThisEvent} />
    </Route>
    <Route path="/:pid/challenge-code" component={App}>
      <IndexRoute component={ChallengeCodePanel} />
    </Route>
    <Route path="*" component={NotFound} />
  </Route>
);
