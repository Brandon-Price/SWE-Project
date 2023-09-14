import Item from "./pages/Item";
import Home from "./pages/Home";
import Help from "./pages/Help";
import ItemList from "./pages/ItemList";
import { useState, useEffect } from "react";
import ShoppingCart from "./pages/ShoppingCart";
import SignUpSignIn from "./pages/SignUpSignIn";
import Success from "./pages/Success";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

const App = () => {

  const [user, setUser] = useState(true);
  // useEffect(() => {

  //   // load in user and their cart info here into the user state variables, pass those into components below
  //   // setUser( *data from database* );
  
  // }, []);
  
  //const user = false; // switch this to checking if user state is null once implemented

  return (
    <Router>
          <Routes>
            <Route exact path="/" element={<Home user={user} setUser={() => setUser()}/>}/>
            <Route path="/products/" element={<ItemList user={user} setUser={() => setUser()}/>}/>
            <Route path="/products/:id" element={<Item/>}/>
            <Route path="/help-center" element={<Help/>}/>
            <Route path="/cart" element={<ShoppingCart user={user} setUser={() => setUser()}/>}/>
            <Route path="/account-log-in-sign-up" element={user ? <ShoppingCart/> : <SignUpSignIn/>}/>
            <Route path="/success" element={<Success/>}/>
          </Routes>
    </Router>
  )
};

export default App;
