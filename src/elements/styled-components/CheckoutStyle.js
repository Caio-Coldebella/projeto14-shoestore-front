import styled from "styled-components";

const CONTENT = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    min-height: calc(100vh - 50px);
    height: fit-content;
    margin-top: 50px;
    padding: 15px 20px 0 20px;
    background-color: #c9cad9;
`;
const TITLE = styled.p`
    font-size: 24px;
    color: black;
    margin-bottom: 20px;
`;
const ITEM = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
    width: 70%;
    margin-bottom: 15px;
    border-radius: 10px;
    padding: 10px 10px 10px 10px;
    background-color: #7796cb;
`;
const IMG = styled.img`
    height: 80%;
    width: fit-content;
`;
const NAME = styled.p`
    font-size: 20px;
`;
const PRICE = styled.p`
    font-size: 20px;
    font-weight: bolder;
    color: #38b000;
`;
const BOTTOMBAR = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 200px;
    width: 70%;
    margin-top: 30px;
`;
const TOTAL = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 30%;
    padding: 40px 0 40px 0;
    border-radius: 10px;
    background-color: #7796cb;
`;
const CONFIRM = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30%;
    width: 20%;
    border-radius: 10px;
    background-color: #38b000;
`;
export const style = {
    CONTENT: CONTENT,
    TITLE: TITLE,
    ITEM: ITEM,
    IMG: IMG,
    NAME: NAME,
    PRICE: PRICE,
    BOTTOMBAR: BOTTOMBAR,
    TOTAL: TOTAL,
    CONFIRM: CONFIRM
};