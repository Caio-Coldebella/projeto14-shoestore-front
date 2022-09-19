import axios from "axios";
import { useState,useContext,useEffect} from "react";
import {style} from "./styled-components/ItemStyle.js"
import Topbar from "./Topbar";
import { Cart4 } from "react-bootstrap-icons";
import TokenContext from "../contexts/TokenContext";
import { useNavigate } from "react-router-dom";

export default function Item(){
    const idItem = window.location.pathname.replace('/','')
    const [data,setData] = useState();
    const {token} = useContext(TokenContext);
    const navigate = useNavigate();
    useEffect(()=>{
            axios.get(`${process.env.REACT_APP_API_BASE_URL}/?id=${idItem}`)
            .then((res)=>{setData(res.data[0])}).catch((error)=>{console.error(error)})}
            ,[idItem]);
    return(
        <>
        <Topbar/>
            {data?
            <style.CONTENT>
                <style.IMG src={data.image} alt="item"/>
                <style.INFO>
                    <style.NAME>{data.name}</style.NAME>
                    <style.PRICE>R$ {data.price}</style.PRICE>
                    <style.DISCRIPT>{data.description}</style.DISCRIPT>
                    <style.ADDCART onClick={()=>{
                        if(token.length===0){
                            navigate("/sign-in");
                        }else{
                            axios.post(`${process.env.REACT_APP_API_BASE_URL}/checkout`,{id: idItem},{headers:{Authentication: `Bearer: ${token}`}})
                            .then(()=>{navigate("/checkout")}).catch((err)=>{
                                if(err.request.status === 404){
                                    navigate("/sign-in");
                                }
                            })
                        }
                    }}><Cart4 size={40}/></style.ADDCART>
                </style.INFO>
            </style.CONTENT>                
            :null}
        </>
    );
}