import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";

import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import UserList from "./pages/userlist/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newuser/NewUser";
import ProductList from "./pages/productlist/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newproduct/NewProduct";
import Login from "./pages/login/Login";
import { useContext } from "react";
import { AuthContext } from "./context/authcontext/AuthContext";

function App() {
  const {user} = useContext(AuthContext)
 
  return (
    <Router>
    <Routes>
    <Route path="/login" element={ user ? <Navigate to="/" /> : <Login/>  }>
      {/* {user ? <Navigate to="/" /> : Outlet } */}
      {/* {number === 8 ? <Navigate to="/" /> : Outlet } */}
    </Route>
    </Routes>
    {user && (
      <>
      <Topbar/>
      <div className="container">
          <Sidebar />
          <Routes>
          <Route path="/" element={<Home />} />
            
          
          <Route path="/user" element={<UserList />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/movies" element={<ProductList />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/newProduct" element={<NewProduct />} />
     
      </Routes>
      </div>
      </>
    )}

    </Router>
  );
}

export default App;
