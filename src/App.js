import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./css/reset.css";
import "./css/style.css";
import Home from "./elements/Home";
import Item from "./elements/Item";
import Createaccount from "./elements/Createaccount";
import Login from "./elements/Login";
import Checkout from "./elements/Checkout";

export default function App(){
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:idItem" element={<Item/>}/>
        <Route path="/sign-up" element={<Createaccount/>}/>
        <Route path="/sign-in" element={<Login/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}