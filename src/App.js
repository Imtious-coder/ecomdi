import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Main_Page from './Componnents/My_Account/Main_Page/Main_Page';
import YourOrders from './Componnents/My_Account/YourOrders/YourOrders';

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
        <Route path="/">
          <Main_Page />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
