// day 55, and 56, 66 ami ei same repo te korsi

// 38-8 react router nested routes: Just give only idea about
// nested routes : https://reactrouter.com/web/guides/quick-start

import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Shipment from './components/Shipment/Shipment';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import userEvent from '@testing-library/user-event';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

      {/* <h3>email: {loggedInUser.email}</h3> */}

      <Router>
      <Header></Header>
        <Switch>
          <Route path='/shop'>
            <Shop></Shop>
          </Route>
          <Route path='/review'>
            <Review></Review>
          </Route>
          <PrivateRoute path='/inventory'>
            <Inventory></Inventory>
          </PrivateRoute>
          <PrivateRoute path='/shipment'>
            <Shipment></Shipment>
          </PrivateRoute>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route exact path='/'>
            <Shop></Shop>  {/*default */}
          </Route>
          <Route path='/product/:productKey'>
            {/* ei khane ":" use kora hoy parameter ke dynamic korar jonno
            ar ":" cara use korle same name e parameter hisabe pharano lagbo */}
            <ProductDetails></ProductDetails>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
