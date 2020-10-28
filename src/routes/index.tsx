import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Home from '../pages/Home';
import DebitConsultation from '../pages/DebitConsultation';
import Proof from '../pages/Proof';
import EditProfile from '../pages/EditProfile';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/debit_consultation" component={DebitConsultation} isPrivate />
    <Route path="/proof" component={Proof} isPrivate />
    <Route path="/edit_profile" component={EditProfile} isPrivate />
    {/* <Route path="/home" component={Home} isPrivate /> */}
  </Switch>
);

export default Routes;
