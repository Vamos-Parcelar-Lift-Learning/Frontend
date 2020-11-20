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
import { useAuth } from '../hooks/auth';


const Routes: React.FC = () => {
  const { user } = useAuth();

  return(
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={LoginPage}  />
      <Route path="/debit_consultation" component={DebitConsultation} hasSidebar={!!user} isPrivate />
      <Route path="/receipt" component={ReceiptList} hasSidebar={!!user} isPrivate />
      <Route path="/receiptDetail" component={Receipt} hasSidebar={!!user} isPrivate />
      <Route path="/edit_profile" component={EditProfile} hasSidebar={!!user} isPrivate />
      <Route path="/payment" component={Payment} hasSidebar={!!user} isPrivate />
      <Route path="/about_us" component={AboutUs} hasSidebar={!!user} isPrivate />
      {/* <Route path="/home" component={Home} isPrivate /> */}
    </Switch>
);
}
;

export default Routes;
