import styled from "styled-components";

const CONTENT = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 2% 0 2%;
    background-color: orange;
`;
const CATEGORIE = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    width: 100%;
    height: 45vh;
    background-color: red;
    margin: 25px 0 25px 0;
    padding: 15px 20px 0 20px;
    column-gap: 20px;
    border-radius: 5px;
    overflow-x: scroll;
    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-track {
        background: #f5f5f5f5; 
    } 
    ::-webkit-scrollbar-thumb {
        background: #aaaaaa; 
    }
`;
const HIGHLIGHTS = styled.div`
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50vh;
    background-color: lightcyan;
    margin: 30px 0 30px 0;
    padding: 15px 20px 0 20px;
    border-radius: 5px;
`;
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
const BOXHIGHLIGHT = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    height: 85%;
    width: 25%;
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
export const style = {
    CONTENT: CONTENT,
    CATEGORIE: CATEGORIE,
    HIGHLIGHTS: HIGHLIGHTS,
    NAMECATEGORIE: NAMECATEGORIE,
    BOX: BOX,
    IMG: IMG,
    TITLE: TITLE,
    PRICE: PRICE,
    BOXHIGHLIGHT: BOXHIGHLIGHT
};