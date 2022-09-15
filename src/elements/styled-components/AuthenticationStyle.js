import styled from "styled-components";

const Authentication = styled.div`
   width: 100vw;
   height: 100vh;
   background-color: gray;
   display: flex;
   align-items: center;
   justify-content: center;
   div {
      background-color: black;
      width: 40vw;
      min-height: 50vh;
      border-radius: 10px;
      form {
         display: flex;
         flex-direction: column;
         align-items: center;
         padding: 35px 10px 10px 10px;
         input {
            background-color: yellow;
            width: 30vw;
            height: 50px;
            outline: none;
            color: white;
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
            background-color: green;
            border: none;
            border-radius: 5px;
         }
      }
   }
`;
export default Authentication;
