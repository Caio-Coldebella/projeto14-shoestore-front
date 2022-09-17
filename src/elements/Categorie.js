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
            <style.NAMECATEGORIE>Modelos {name}</style.NAMECATEGORIE>
            {data?data.map((item,index)=>{
                return <style.BOX key={index}>
                    <style.IMG src={item.image} alt="tenis"/>
                    <style.TITLE>{item.name}</style.TITLE>
                    <style.PRICE>{item.price}</style.PRICE>
                    </style.BOX>
            }):null}
        </style.CATEGORIE>
        </>
    );
}