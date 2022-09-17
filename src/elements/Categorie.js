import {style} from "./styled-components/HomeStyle.js"
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import {routes} from "../routenames.js";
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
        axios.get(`${routes.home}?type=${name}`).then((res)=>{setData(res.data)}).catch((error)=>{console.error(error)});
    });
    return(
        <>
        <CONTENT>
        <ARRLEFT view={displayviewleft} onClick={()=>{(document.getElementById(`${name}${actualviewleft}`))
            .scrollIntoView({block: "nearest", inline: "nearest"});controlarrow("left",actualviewright,
            setActualviewright,setDisplayviewright,actualviewleft,setActualviewleft,setDisplayviewleft,data.length)}}>
            <ArrowLeftCircleFill size={40}/>
        </ARRLEFT>
        <style.CATEGORIE>
            <style.NAMECATEGORIE>Modelos {name}</style.NAMECATEGORIE>
            {data?data.map((item,index)=>{
                return <style.BOX key={index} id={`${name}${index}`} onClick={()=>{navigate(`/${item._id}`)}}>
                    <style.IMG src={item.image} alt="tenis"/>
                    <style.TITLE>{item.name}</style.TITLE>
                    <style.PRICE>{item.price}</style.PRICE>
                    </style.BOX>
            }):null}
        </style.CATEGORIE>
        <ARRRIGHT view={displayviewright} onClick={()=>{(document.getElementById(`${name}${actualviewright}`))
            .scrollIntoView({block: "nearest", inline: "nearest"});controlarrow("rigth",actualviewright,
            setActualviewright,setDisplayviewright,actualviewleft,setActualviewleft,setDisplayviewleft,data.length)}}>
            <ArrowRightCircleFill size={40}/>
        </ARRRIGHT>
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
    border-radius: 5px;
`;
const ARRLEFT = styled.div`
    display: ${props => props.view};
    position: absolute;
    z-index: 1;
    left: 15px;
    top: calc(50% - 20px);
    height: 40px;
    width: 40px;
`;
const ARRRIGHT = styled.div`
    display: ${props => props.view};
    position: absolute;
    z-index: 1;
    right: 15px;
    top: calc(50% - 20px);
    height: 40px;
    width: 40px;
`;