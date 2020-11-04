import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Home from '../pages/Home';
import DebitConsultation from '../pages/DebitConsultation';
import ReceiptList from '../pages/ReceiptList';
import Receipt from '../pages/Receipt';
import EditProfile from '../pages/EditProfile';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/debit_consultation" component={DebitConsultation} isPrivate />
    <Route path="/receipt" component={ReceiptList} isPrivate />
    <Route path="/receiptDetail" component={Receipt} isPrivate />
    <Route path="/edit_profile" component={EditProfile} isPrivate />
    {/* <Route path="/home" component={Home} isPrivate /> */}
  </Switch>
);

export default Routes;
