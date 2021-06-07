import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Main_Page from './Componnents/My_Account/Main_Page/Main_Page';
import YourOrders from './Componnents/My_Account/YourOrders/YourOrders';
import Name from './Componnents/My_Account/SecurityLogin/Name/Name';
import SecurityLogin from './Componnents/My_Account/SecurityLogin/SecurityLoginPage/SecurityLogin';
import Email from './Componnents/My_Account/SecurityLogin/Email/Email';
import EmailOTP from './Componnents/My_Account/SecurityLogin/EmailOTP/EmailOTP';
import MailChangeConfirm from './Componnents/My_Account/SecurityLogin/MailChangeConfirm/MailChangeConfirm';
import Mobile from './Componnents/My_Account/SecurityLogin/Mobile/Mobile';
import MobileOTP from './Componnents/My_Account/SecurityLogin/MobileOTP/MobileOTP';
import Password from './Componnents/My_Account/SecurityLogin/Password/Password';
import Country from './Componnents/My_Account/SecurityLogin/Country/Country';
import TwoStepVerification from './Componnents/My_Account/SecurityLogin/TwoStepVerification/TwoStepVerification';
import Address from './Componnents/My_Account/SecurityLogin/Address/Address';
import Step1 from './Componnents/My_Account/SecurityLogin/Step1/Step1';
import TwoStepMobileOTP from './Componnents/My_Account/SecurityLogin/TwoStepMobileOTP/TwoStepMobileOTP';
import Step2 from './Componnents/My_Account/SecurityLogin/Step2/Step2';
import SecureYourAccount from './Componnents/My_Account/SecurityLogin/SecureYourAccount/SecureYourAccount';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Main_Page />
        </Route>
        <Route path="/yourOrders">
          <YourOrders />
        </Route>
        <Route path="/securityLogin">
          <SecurityLogin />
        </Route>
        <Route path="/name">
          <Name />
        </Route>
        <Route path="/email">
          <Email />
        </Route>
        <Route path="/emailOTP">
          <EmailOTP />
        </Route>
        <Route path="/mailChangeConfirm">
          <MailChangeConfirm />
        </Route>
        <Route path="/mobile">
          <Mobile />
        </Route>
        <Route path="/mobileOTP">
          <MobileOTP />
        </Route>
        <Route path="/password">
          <Password />
        </Route>
        <Route path="/country">
          <Country />
        </Route>
        <Route path="/twoStepVerification">
          <TwoStepVerification />
        </Route>
        <Route path="/address">
          <Address />
        </Route>
        <Route path="/step1">
          <Step1 />
        </Route>
        <Route path="/twoStepMobileOTP">
          <TwoStepMobileOTP />
        </Route>
        <Route path="/step2">
          <Step2 />
        </Route>
        <Route path="/secureYourAccount">
          <SecureYourAccount />
        </Route>
        <Route path="/">
          <Main_Page />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
