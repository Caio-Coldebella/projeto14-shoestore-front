import styled from "styled-components";

const CONTENT = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 50px;
    padding: 0 25px 0 25px;
    background-color: #576490;
`;
const SUBSPACE = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: fit-content;
    width: 160px;
    height: 100%;
`;
const TXT = styled.p`
    font-size: 14px;
    color: #FFFFFF;
    font-weight: bold;
`;
const IMG = styled.img`
    width: 15%;
    height: fit-content;
    position: absolute;
    top: 2.5px;
    left: 42.5%;
    z-index: 3;
`;

export const style = {
    CONTENT: CONTENT,
    SUBSPACE: SUBSPACE,
    TXT: TXT,
    IMG: IMG
}