import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./css/reset.css";
import "./css/style.css";
import Home from "./elements/Home";
import Item from "./elements/Item";
import Createaccount from "./elements/Createaccount";
import Login from "./elements/Login";
import Checkout from "./elements/Checkout";
import TokenContext from "./contexts/TokenContext";
import UserContext from "./contexts/UserContext";
import { useState } from "react";
import Completed from "./elements/Completed";

export default function App(){
  const [token,setToken] = useState("");
  const [user,setUser] = useState("");
  return(
    <>
    <TokenContext.Provider value={{token,setToken}}>
    <UserContext.Provider value={{user,setUser}}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:idItem" element={<Item/>}/>
        <Route path="/sign-up" element={<Createaccount/>}/>
        <Route path="/sign-in" element={<Login/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/completed" element={<Completed/>}/>
      </Routes>
    </BrowserRouter>
    </UserContext.Provider>
    </TokenContext.Provider>
    </>
  );
}