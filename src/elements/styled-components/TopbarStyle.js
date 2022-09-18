import styled from "styled-components";

const CONTENT = styled.div`
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
    background-color: black;
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

export const style = {
    CONTENT: CONTENT,
    SUBSPACE: SUBSPACE,
    TXT: TXT
}