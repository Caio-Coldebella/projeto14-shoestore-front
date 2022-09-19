import CompletedStyle from "./styled-components/CompletedStyle";
import Topbar from "./Topbar";
import axios from "axios";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Completed() {
   const [checkoutInfo, setCheckoutInfo] = useState();
   const { user } = useContext(UserContext);
   const navigate = useNavigate();
   useEffect(()=>{
         axios
            .get(`${process.env.REACT_APP_API_BASE_URL}/completed`, {
               headers: { user: user }
            })
            .then((res) => {
               setCheckoutInfo(res.data);
            }).catch((err)=>{
               if (err.request.status === 404) {
                  navigate("/sign-in");
               }
            });
         });
   return (
      <>
         <Topbar />
         <CompletedStyle>
            <div>
               <h2>Compra concluída com sucesso</h2>
               <h3>Resumo sobre o pedido:</h3>
               <h4>
                  Nome: <span>{checkoutInfo?.name}</span>
               </h4>
               <h4>
                  Endereço: <span>{checkoutInfo?.address}</span>
               </h4>
               <h4>
                  E-mail: <span>{checkoutInfo?.email}</span>{" "}
               </h4>
            </div>
         </CompletedStyle>
      </>
   );
}
