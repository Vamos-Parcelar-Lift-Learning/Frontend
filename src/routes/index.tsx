import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Home from '../pages/Home';
import DebitConsultation from '../pages/DebitConsultation';
import Proof from '../pages/Proof';
import EditProfile from '../pages/EditProfile';
import Payment from '../pages/Payment';
import LoginPage from '../pages/Login';
import AboutUs from '../pages/AboutUs';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" component={LoginPage} isPrivate />
    <Route path="/debit_consultation" component={DebitConsultation} isPrivate />
    <Route path="/proof" component={Proof} isPrivate />
    <Route path="/edit_profile" component={EditProfile} isPrivate />
    <Route path="/payment" component={Payment} isPrivate />
    <Route path="/about_us" component={AboutUs} isPrivate />
    {/* <Route path="/home" component={Home} isPrivate /> */}
  </Switch>
);

export default Routes;
