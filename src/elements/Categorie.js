import {style} from "./styled-components/HomeStyle.js"
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import {routes} from "../routenames.js";
import { useNavigate } from "react-router-dom";
import { ArrowRightCircleFill } from 'react-bootstrap-icons';

export default function Categorie({name}){
    const [data,setData] = useState([]);
    const navigate = useNavigate();
    const [actualviewrigth,setActualviewrigth] = useState(5);
    useEffect(()=>{
        axios.get(`${routes.home}?type=${name}`).then((res)=>{setData(res.data)}).catch((error)=>{console.error(error)});
    });
    return(
        <>
        <style.CATEGORIE>
            <style.NAMECATEGORIE>Modelos {name}</style.NAMECATEGORIE>
            {data?data.map((item,index)=>{
                return <style.BOX key={index} id={`${name}${index}`} onClick={()=>{navigate(`/${item._id}`)}}>
                    <style.IMG src={item.image} alt="tenis"/>
                    <style.TITLE>{item.name}</style.TITLE>
                    <style.PRICE>{item.price}</style.PRICE>
                    </style.BOX>
            }):null}
            <ARR onClick={()=>{(document.getElementById(`${name}${actualviewrigth}`)).scrollIntoView();setActualviewrigth(actualviewrigth+1)}}>
            <ArrowRightCircleFill size={40}/>
            </ARR>
        </style.CATEGORIE>
        </>
    );
}
const ARR = styled.div`
    display: flex;
    position: sticky;
    right: 15px;
    top: calc(50% - 20px);
    height: 40px;
    width: 40px;
`;