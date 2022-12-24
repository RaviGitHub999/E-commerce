import React from 'react';
import Home from './Components/Home';
import Login from './Components/Login';
import NavBar from './Components/NavBar';
import {BrowserRouter as Router, Route ,Switch} from "react-router-dom"
import AddProducts from './Components/AddProducts';
import Cart from './Components/Cart';
import ProductDetails from './Components/ProductDetails';
import Admin from './Components/Admin';
import Update from './Components/Update';

function App() {
  return (
    <Router >
      <div className="App">
        <Switch>
          <Route exact path="/">
          <Login/>
          </Route>
         
          <Route path="/user" >
           <Home/>
          </Route>

          <Route path="/addnewproduct">
            <AddProducts/>
          </Route>
          
          <Route path="/cart">
            <Cart/>
          </Route>

          <Route path="/productdetails:id">
         <ProductDetails/>
          </Route>

          <Route path="/admin">
           <Admin/>
          </Route>

          <Route path="/updateProduct:id">
           <Update/>
          </Route>
        </Switch>
    
    </div>
    </Router>
  );
}

export default App;
