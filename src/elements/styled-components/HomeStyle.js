import styled from "styled-components";

const CONTENT = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 2% 0 2%;
    margin-top: 50px;
    background-color: #a3bcf9;
`;
const CATEGORIE = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    width: 100%;
    height: 45vh;
    background-color: #d1d2f9;
    padding: 0 20px 0 20px;
    column-gap: 20px;
    border-radius: 5px;
    overflow-x: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
`;
const HIGHLIGHTS = styled.div`
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50vh;
    background-color: #d1d2f9;
    margin: 30px 0 30px 0;
    padding: 15px 20px 0 20px;
    border-radius: 5px;
`;
const NAMECATEGORIE = styled.p`
    position: absolute;
    top: 0;
    left: 45%;
    z-index: 1;
    font-size: 22px;
    color: black;
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
    background-color: #7796cb;
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
    background-color: #7796cb;
    border-radius: 5px;
`;
const IMG = styled.img`
    height: 75%;
    width: min-content;
`;
const TITLE = styled.p`
    font-size: 14px;
    color: black;
`;
const PRICE = styled.p`
    font-size: 20px;
    font-weight: bold;
    color: black;
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
export const style = {
    CONTENT: CONTENT,
    CATEGORIE: CATEGORIE,
    HIGHLIGHTS: HIGHLIGHTS,
    NAMECATEGORIE: NAMECATEGORIE,
    BOX: BOX,
    IMG: IMG,
    TITLE: TITLE,
    PRICE: PRICE,
    BOXHIGHLIGHT: BOXHIGHLIGHT,
    ARRRIGHT: ARRRIGHT,
    ARRLEFT: ARRLEFT
};