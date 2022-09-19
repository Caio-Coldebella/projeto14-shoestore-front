import styled from "styled-components";

const CompletedStyle = styled.div`
   width: 100vw;
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: #c9cad9;
   div{
    min-width: 50vw;
    background-color: #7796cb;
    display: flex;
    flex-direction: column;
    padding: 13px;
    border-radius: 10px;
    h2{
        text-align: center;
        color: #38b000;
        font-weight: bold;
        font-size: 30px;
        margin-bottom: 20px;
    }
    h3{
        margin-left:10px;
        color:black;
        font-weight: bold;
        font-size: 25px;
    }
    h4{
        margin-top: 10px;
        color: black;
        font-size: 20px;
        font-weight: bold;
    }
    span{
        font-weight: bold;
        color: white;
        font-size:20px;
    }
    h5{
        margin-top: 50px;
        color: black;
        font-size: 22px;
        text-align: end;
    }
   }
`;
export default CompletedStyle