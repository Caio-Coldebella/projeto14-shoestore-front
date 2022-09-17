import axios from "axios";
import { useState } from "react";
import Authentication from "./styled-components/AuthenticationStyle";
import { routes } from "../routenames";

export default function Login() {
   const [name, setName] = useState();
   const [password, setPassword] = useState();
   function handleForm(e) {
      e.preventDefault();
      const loginData = {
         name,
         password,
      };
      if (!name || !password) {
         alert("Preencha todos os campos obrigatórios");
      }
      axios
         .post("http://localhost:5000/sign-in", loginData) //mudar rota
         .then(() => {
            setInterval(statusRequest, 10000);
            console.log("post loginData feito");
         })
         .catch((res) => {
            if(res.request.status === 409){
               alert('Esse usuário já está logado')
            }
         });
   }
   function statusRequest() {
      axios
         .post("http://localhost:5000/status", {
            lastStatus: Date.now(),
            name,
         })
         .then(() => console.log("request status indo"));
   }
   return (
      <Authentication>
         <div>
            <form onSubmit={handleForm}>
               <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Nome"
                  required
               />
               <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Senha"
                  required
               />
               <button type="submit">Confirmar</button>
            </form>
         </div>
      </Authentication>
   );
}
