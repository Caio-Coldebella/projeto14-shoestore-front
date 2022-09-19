import {style} from "./styled-components/HomeStyle.js"
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ArrowRightCircleFill, ArrowLeftCircleFill } from 'react-bootstrap-icons';

function controlarrow(movement,actualviewright,setActualviewright,setDisplayviewright,actualviewleft,
    setActualviewleft,setDisplayviewleft,sizedata){
    if(movement==="rigth"){
        if(actualviewright===(sizedata - 1)){
            setDisplayviewright("none");
            setActualviewright(actualviewright+1);
            setActualviewleft(actualviewleft+1);
        }else{
            setActualviewright(actualviewright+1);
            setActualviewleft(actualviewleft+1);
            setDisplayviewleft("flex");
        }
    }else if(movement==="left"){
        if(actualviewleft===0){
            setDisplayviewleft("none");
            setActualviewleft(actualviewleft-1);
            setActualviewright(actualviewright-1);
        }else{
            setActualviewleft(actualviewleft-1);
            setActualviewright(actualviewright-1);
            setDisplayviewright("flex");
        }
    }
}

export default function Categorie({name}){
    const [data,setData] = useState([]);
    const navigate = useNavigate();
    const [actualviewright,setActualviewright] = useState(5);
    const [displayviewright, setDisplayviewright] = useState("flex");
    const [actualviewleft,setActualviewleft] = useState(-1);
    const [displayviewleft, setDisplayviewleft] = useState("none");
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/?type=${name}`).then((res)=>{setData(res.data)}).catch((error)=>{console.error(error)});
    });
    return(
        <>
        <CONTENT>
        <style.ARRLEFT view={displayviewleft} onClick={()=>{(document.getElementById(`${name}${actualviewleft}`))
            .scrollIntoView({behavior: 'smooth',block: "nearest", inline: "nearest"});controlarrow("left",actualviewright,
            setActualviewright,setDisplayviewright,actualviewleft,setActualviewleft,setDisplayviewleft,data.length)}}>
            <ArrowLeftCircleFill size={40}/>
        </style.ARRLEFT>
        <style.NAMECATEGORIE>Modelos {name}</style.NAMECATEGORIE>
        <style.CATEGORIE>
            {data?data.map((item,index)=>{
                return <style.BOX key={index} id={`${name}${index}`} onClick={()=>{navigate(`/${item._id}`)}}>
                    <style.IMG src={item.image} alt="tenis"/>
                    <style.TITLE>{item.name}</style.TITLE>
                    <style.PRICE>{item.price}</style.PRICE>
                    </style.BOX>
            }):null}
        </style.CATEGORIE>
        <style.ARRRIGHT view={displayviewright} onClick={()=>{(document.getElementById(`${name}${actualviewright}`))
            .scrollIntoView({behavior: 'smooth',block: "nearest", inline: "nearest"});controlarrow("rigth",actualviewright,
            setActualviewright,setDisplayviewright,actualviewleft,setActualviewleft,setDisplayviewleft,data.length)}}>
            <ArrowRightCircleFill size={40}/>
        </style.ARRRIGHT>
        </CONTENT>
        </>
    );
}
const CONTENT = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    height: 45vh;
    margin: 25px 0 25px 0;
    padding: 15px 0 0 0;
    border-radius: 5px;
    background-color: #d1d2f9;
`;