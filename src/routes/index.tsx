import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Home from '../pages/Home';
import DebitConsultation from '../pages/DebitConsultation';
import ReceiptList from '../pages/ReceiptList';
import Receipt from '../pages/Receipt';
import EditProfile from '../pages/EditProfile';
import Payment from '../pages/Payment';
import LoginPage from '../pages/Login';
import AboutUs from '../pages/AboutUs';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact isLogin component={LoginPage} />
    <Route
      path="/debit_consultation"
      component={DebitConsultation}
      hasSidebar
      isPrivate
    />
    <Route path="/receipt" component={ReceiptList} hasSidebar isPrivate />
    <Route path="/receiptDetail" component={Receipt} hasSidebar isPrivate />
    <Route path="/edit_profile" component={EditProfile} hasSidebar isPrivate />
    <Route path="/payment" component={Payment} hasSidebar isPrivate />
    {/* <Route path="/home" component={Home} isPrivate /> */}
  </Switch>
);

export default Routes;
