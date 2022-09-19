import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {style} from "./styled-components/HomeStyle.js";

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

export default function Highlights({brand1,brand2,brand3}){
    const [data,setData] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        if(data.length===0){
            axios.get(`${process.env.REACT_APP_API_BASE_URL}/?type=${brand1}`)
            .then((res)=>{setData([...data,res.data[getRandomInt(res.data.length)]])})
            .catch((err)=>{console.error(err)});
        }
    },[data,brand1]);
    useEffect(()=>{
        if(data.length===1){
            axios.get(`${process.env.REACT_APP_API_BASE_URL}/?type=${brand2}`)
            .then((res)=>{setData([...data,res.data[getRandomInt(res.data.length)]])})
            .catch((err)=>{console.error(err)});
        }
    },[data,brand2]);
    useEffect(()=>{
        if(data.length===2){
            axios.get(`${process.env.REACT_APP_API_BASE_URL}/?type=${brand3}`)
            .then((res)=>{setData([...data,res.data[getRandomInt(res.data.length)]])})
            .catch((err)=>{console.error(err)});
        }
    },[data,brand3]);
    return(
        <>
          <style.HIGHLIGHTS>
            <style.NAMECATEGORIE>Modelos em Destaque</style.NAMECATEGORIE>
            {data.length>0?data.map((item,index)=>{
                return <style.BOXHIGHLIGHT key={index} onClick={()=>{navigate(`/${item._id}`)}}>
                    <style.IMG src={item.image} alt="tenis"/>
                    <style.TITLE>{item.name}</style.TITLE>
                    <style.PRICE>{item.price}</style.PRICE>
                    </style.BOXHIGHLIGHT>
            }):null}
          </style.HIGHLIGHTS>
        </>
    );
}