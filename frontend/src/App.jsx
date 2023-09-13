import Item from "./pages/Item";
import Home from "./pages/Home";
import Help from "./pages/Help";
import ItemList from "./pages/ItemList";
//import { useState, useEffect } from "react";
import ShoppingCart from "./pages/ShoppingCart";
import SignUpSignIn from "./pages/SignUpSignIn";
import Success from "./pages/Success";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

const App = () => {

  // const [user, setUser] = useState();
  // useEffect(() => {

  //   // load in user and their cart info here into the user state variables, pass those into components below
  //   // setUser( *data from database* );
  
  // }, []);
  
  const ifUser = true; // switch this to checking if user state is null once implemented

  return (
    <Router>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/products/" element={<ItemList/>}/>
            <Route path="/products/:id" element={<Item/>}/>
            <Route path="/help-center" element={<Help/>}/>
            <Route path="/cart" element={<ShoppingCart/>}/>
            <Route path="/account-log-in-sign-up" element={ifUser ? <Navigate to="/"/> : <SignUpSignIn/>}/>
            <Route path="/success" element={<Success/>}/>
          </Routes>
    </Router>
  )
};

export default App;
