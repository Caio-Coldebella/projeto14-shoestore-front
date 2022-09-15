import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./css/reset.css";
import "./css/style.css";
import Home from "./elements/Home";
import Item from "./elements/Item";
import Createaccount from "./elements/Createaccount";
import Login from "./elements/Login";
import Checkout from "./elements/Checkout";
import { routes } from "./routenames";

export default function App(){
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} element={<Home/>}/>
        <Route path={routes.item} element={<Item/>}/>
        <Route path={routes.createaccount} element={<Createaccount/>}/>
        <Route path={routes.login} element={<Login/>}/>
        <Route path={routes.checkout} element={<Checkout/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}