import styled from "styled-components";

const CONTENT = styled.div`
    display: flex;
    width: 100vw;
    min-height: calc(100vh - 50px);
    height: fit-content;
    background-color: #c9cad9;
    margin-top: 50px;
`;
const IMG = styled.img`
    width: 35%;
    height: fit-content;
    margin: 3% 0 3% 6%;
    border-radius: 5px;
`;
const INFO = styled.div`
padding: 10px;
border-radius: 5px;
background-color: #d1d2f9;
    width: 40%;
    height: fit-content;
    margin: 3% 3% 3% 6%;
`;
const PRICE = styled.p`
    font-size: 40px;
    font-weight: bold;
    color: #38b000;
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
    background-color: #38b000;
    border-radius: 15px;
    margin: 30px 25% 10px 25%;
`;

export const style = {
    CONTENT: CONTENT,
    IMG: IMG,
    INFO: INFO,
    PRICE: PRICE,
    DISCRIPT: DISCRIPT,
    NAME: NAME,
    ADDCART: ADDCART
}