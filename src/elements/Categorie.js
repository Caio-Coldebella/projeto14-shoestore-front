import {style} from "./styled-components/HomeStyle.js"
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import {routes} from "../routenames.js";

export default function Categorie({name}){
    const [data,setData] = useState([]);
    useEffect(()=>{
        axios.get(`${routes.home}?type=${name}`).then((res)=>{setData(res.data)}).catch((error)=>{console.error(error)});
    });
    return(
        <>
        <style.CATEGORIE>
            <NAMECATEGORIE>Modelos {name}</NAMECATEGORIE>
            {data?data.map((item,index)=>{
                return <BOX key={index}>
                    <IMG src={item.image} alt="tenis"/>
                    <TITLE>{item.name}</TITLE>
                    <PRICE>{item.price}</PRICE>
                    </BOX>
            }):null}
        </style.CATEGORIE>
        </>
    );
}
const NAMECATEGORIE = styled.p`
    position: absolute;
    top: 0;
    left: 45%;
    font-size: 16px;
    color: #555555;
    font-weight: bold;
    margin-top: 5px;
`;
const BOX = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    height: 85%;
    min-width: 18%;
    padding-bottom: 5px;
    background-color: #FFFFFF;
    border-radius: 5px;
`;
const IMG = styled.img`
    height: 75%;
    width: min-content;
`;
const TITLE = styled.p`
    font-size: 14px;
    color: #777777;
`;
const PRICE = styled.p`
    font-size: 20px;
    font-weight: bold;
    color: black;
`;