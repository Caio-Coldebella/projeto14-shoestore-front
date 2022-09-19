import styled from "styled-components";

const Authentication = styled.div`
   display: flex;
   flex-direction: column;
   width: 100vw;
   height: 100vh;
   background-color: #d1d2f9;
   display: flex;
   align-items: center;
   justify-content: center;
   div {
      background-color: #576490;
      width: 40vw;
      border-radius: 10px;
      form {
         display: flex;
         flex-direction: column;
         align-items: center;
         padding: 35px 10px 10px 10px;
         input {
            background-color: #d1d2f9;
            width: 30vw;
            height: 50px;
            outline: none;
            color: black;
            font-size: 24px;
            font-weight: 700;
            padding-left: 10px;
            border: none;
            margin-bottom: 10px;
            border-radius: 5px;
         }
         input:focus {
            border: 2px blue solid;
         }
         input:focus::placeholder {
            color: transparent;
         }
         button {
            min-width: 10vw;
            height: 70px;
            background-color: #9ef01a;
            border: none;
            border-radius: 5px;
            margin-bottom: 20px;
         }
         a{
         text-decoration: none;
         outline: none;
         font-size: 22px;
         color: white;
         cursor: pointer;
      }
      }
   }
`;
const IMG = styled.img`
   margin-bottom: 10px;
   width: 40vw;
   height: fit-content;
   `;
export {Authentication,IMG};
