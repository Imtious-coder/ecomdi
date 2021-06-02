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
        <Route path="/">
          <Main_Page />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
