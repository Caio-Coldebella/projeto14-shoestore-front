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
    width: 100%;
    height: 50vh;
    background-color: purple;
    margin: 30px 0 30px 0;
    border-radius: 5px;
`;

export const style = {
    CONTENT: CONTENT,
    CATEGORIE: CATEGORIE,
    HIGHLIGHTS: HIGHLIGHTS
};