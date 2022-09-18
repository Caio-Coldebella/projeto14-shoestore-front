import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { routes } from "../routenames";
import styled from "styled-components";
import Topbar from "./Topbar";
import { Cart4 } from "react-bootstrap-icons";

export default function Item(){
    const idItem = window.location.pathname.replace('/','')
    const [data,setData] = useState();
    useEffect(()=>{
            axios.get(`${routes.home}?id=${idItem}`)
            .then((res)=>{setData(res.data[0])}).catch((error)=>{console.error(error)})}
            ,[idItem]);
    console.log(data)
    return(
        <>
        <Topbar/>
            {data?
            <CONTENT>
                <IMG src={data.image} alt="item"/>
                <INFO>
                    <NAME>{data.name}</NAME>
                    <PRICE>{data.price}</PRICE>
                    <DISCRIPT>{data.description}</DISCRIPT>
                    <ADDCART><Cart4 size={40}/></ADDCART>
                </INFO>
            </CONTENT>                
            :null}
        </>
    );
}

const CONTENT = styled.div`
    display: flex;
    width: 100vw;
    min-height: calc(100vh - 50px);
    height: fit-content;
    background-color: #CCCCCC;
    margin-top: 50px;
`;
const IMG = styled.img`
    width: 35%;
    height: fit-content;
    margin: 3% 0 3% 6%;
    border-radius: 5px;
`;
const INFO = styled.div`
    width: 40%;
    height: fit-content;
    margin: 3% 3% 3% 6%;
`;
const PRICE = styled.p`
    font-size: 40px;
    font-weight: bold;
    color: rgb(71 210 50);
    margin: 0 0 20px 0;
`;
const DISCRIPT = styled.p`
    font-size: 16px;
    color: black;
    line-height: 20px;
`;
const NAME = styled.p`
    font-size: 20px;
    font-weight: bolder;
    color: black;
    margin: 20px 0 20px 0;
`;
const ADDCART = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 60px;
    background-color: rgb(248, 0, 50);
    border-radius: 15px;
    margin: 30px 25% 10px 25%;
`;