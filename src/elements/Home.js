import styled from "styled-components";

export default function Home(){
    return(
        <>
        <CONTENT>
            <CATEGORIE>
                <BOX/>
                <BOX/>
                <BOX/>
                <BOX/>
                <BOX/>
                <BOX/>
                <BOX/>

            </CATEGORIE>
            <CATEGORIE></CATEGORIE>
            <HIGHLIGHTS></HIGHLIGHTS>
            <CATEGORIE></CATEGORIE>
            <CATEGORIE></CATEGORIE>
            <HIGHLIGHTS></HIGHLIGHTS>
        </CONTENT>
        </>
    );
}

const CONTENT = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 2% 0 2%;
    background-color: orange;
`;
const CATEGORIE = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 40vh;
    background-color: red;
    margin: 25px 0 25px 0;
    padding: 0 20px 0 20px;
    column-gap: 20px;
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
const BOX = styled.div`
    display: flex;
    height: 90%;
    min-width: 25%;
    background-color: black;
`;
const HIGHLIGHTS = styled.div`
    display: flex;
    width: 100%;
    height: 45vh;
    background-color: purple;
    margin: 30px 0 30px 0;
`;