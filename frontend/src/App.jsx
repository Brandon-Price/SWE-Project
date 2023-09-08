import Item from "./pages/Item";
import Home from "./pages/Home";
import ItemList from "./pages/ItemList";
import { useEffect } from "react";
import ShoppingCart from "./pages/ShoppingCart";
import SignUpSignIn from "./pages/SignUpSignIn";
import Success from "./pages/Success";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";

const App = () => {

  useEffect(() => {

    // load in assets from database here (code runs on first load/render)
    // (it would be a good idea to have effect hooks in each component that needs to be dynamically loaded instead of freezing up the whole
    // application here, but just for like proof of concept for now lol)
  
  }, []);
  

  return (
    <Router>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/products" element={<ItemList/>}/>
            <Route path="/products/:id" element={<Item/>}/>
            <Route path="/cart" element={<ShoppingCart/>}/>
            <Route path="/account-log-in-sign-up" element={<SignUpSignIn/>}/>
            <Route path="/success" element={<Success/>}/>
          </Routes>
    </Router>
  )
};

export default App;
