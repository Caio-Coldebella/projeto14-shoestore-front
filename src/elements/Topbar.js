import { useContext } from "react";
import { Cart4,PersonFill } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";

export default function Topbar(){
    const user = useContext(UserContext);
    const navigate = useNavigate();
    return(
        <>
        <CONTENT>
            {user.user?
            <SUBSPACE>
                <PersonFill size={30} color="#FFFFFF"/>
                <TXT>Olá, {user.user}</TXT>
            </SUBSPACE>:
            <SUBSPACE>
                <TXT onClick={()=>{navigate("sign-in")}}>Login</TXT>
                <TXT onClick={()=>{navigate("sign-up")}}>Registre-se</TXT>
            </SUBSPACE>}
            <Cart4 size={30} color="#FFFFFF" onClick={()=>{navigate("/checkout")}}/>
        </CONTENT>
        </>
    );
}

const CONTENT = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 50px;
    padding: 0 25px 0 25px;
    background-color: black;
`;
const SUBSPACE = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: fit-content;
    width: 160px;
    height: 100%;
`;
const TXT = styled.p`
    font-size: 14px;
    color: #FFFFFF;
    font-weight: bold;
`;