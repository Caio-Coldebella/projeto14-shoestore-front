import axios from "axios";
import { useState, useContext } from "react";
import Authentication from "./styled-components/AuthenticationStyle";
import { routes } from "../routenames";
import TokenContext from '../contexts/TokenContext';
import UserContext from '../contexts/UserContext';

export default function Login() {
   const {setToken} = useContext(TokenContext);
   const {setUser} = useContext(UserContext)
   const [name, setName] = useState('');
   const [password, setPassword] = useState('');
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
         .then((res) => {
            const {token} = res.data
            const {name} = res.data 
            setToken(token)
            setUser(name)
            function intervalStatus (){
               statusRequest(token)
            }
            setInterval(intervalStatus, 10000);
            console.log("post loginData feito");
         })
         .catch();
   }

   function statusRequest(token) {
      axios
         .post("http://localhost:5000/status", {
            lastStatus: Date.now(),
            name,
            token
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
