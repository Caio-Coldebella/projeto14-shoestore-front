import { useContext } from "react";
import { Cart4,PersonFill } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import {style} from "./styled-components/TopbarStyle.js";
import logo from "../css/darkbackground.jpg";

export default function Topbar(){
    const {user} = useContext(UserContext);
    const navigate = useNavigate();
    return(
        <>
        <style.CONTENT>
            {user?
            <style.SUBSPACE>
                <PersonFill size={30} color="#FFFFFF"/>
                <style.TXT>Olá, {user}</style.TXT>
            </style.SUBSPACE>:
            <style.SUBSPACE>
                <style.TXT onClick={()=>{navigate("/sign-in")}}>Login</style.TXT>
                <style.TXT onClick={()=>{navigate("/sign-up")}}>Registre-se</style.TXT>
            </style.SUBSPACE>}
            <style.IMG src={logo} alt="logo" onClick={()=>{navigate("/")}}/>
            <Cart4 size={30} color="#FFFFFF" onClick={()=>{navigate("/checkout")}}/>
        </style.CONTENT>
        </>
    );
}