import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { style } from "./styled-components/CheckoutStyle.js";
import TokenContext from "../contexts/TokenContext.js";
import UserContext from "../contexts/UserContext.js";
import Topbar from "./Topbar";
import axios from "axios";
import { Cart4 } from "react-bootstrap-icons";

function sumitems(arr, setTotal) {
   let sum = 0;
   for (let i = 0; i < arr.length; i++) {
      sum += arr[i].price;
   }
   setTotal(sum);
}

export default function Checkout() {
   const { token } = useContext(TokenContext);
   const { user } = useContext(UserContext);
   const [data, setData] = useState([]);
   const [total, setTotal] = useState(0);
   const navigate = useNavigate();
   useEffect(() => {
      axios
         .get(`${process.env.REACT_APP_API_BASE_URL}/checkout`, {
            headers: { Authentication: token },
         })
         .then((res) => {
            setData(res.data);
            sumitems(res.data, setTotal);
         })
         .catch((err) => {
            if (err.request.status === 404) {
               navigate("/sign-in");
            }
         });
   });
   return (
      <>
         <Topbar />
         <style.CONTENT>
            <style.TITLE>Carrinho de {user}</style.TITLE>
            {data.length > 0
               ? data.map((item, index) => {
                    return (
                       <style.ITEM key={index}>
                          {
                             <>
                                <style.IMG src={item.image} alt="" />
                                <style.NAME>{item.name}</style.NAME>
                                <style.PRICE>{item.price}</style.PRICE>
                             </>
                          }
                       </style.ITEM>
                    );
                 })
               : null}
            <style.BOTTOMBAR>
               <style.TOTAL>
                  <style.NAME>Total:</style.NAME>
                  <style.PRICE>{total}</style.PRICE>
               </style.TOTAL>
               <style.CONFIRM
                  onClick={() => {
                    if(total === 0){
                        alert('É necessário adicionar itens antes de confirmar a compra')
                        return
                    }
                    
                     axios
                        .post(`${process.env.REACT_APP_API_BASE_URL}/completed`, { name: user,sum:total })
                        .then(() => {
                           console.log("post completed");
                           navigate("/completed");
                        })
                        .catch((err) => console.log(err));
                  }}
               >
                  <Cart4 size={40} />
               </style.CONFIRM>
            </style.BOTTOMBAR>
         </style.CONTENT>
      </>
   );
}
