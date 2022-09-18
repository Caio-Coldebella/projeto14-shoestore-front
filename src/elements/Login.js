import axios from "axios";
import { useState, useContext } from "react";
import Authentication from "./styled-components/AuthenticationStyle";
import { routes } from "../routenames";
import TokenContext from '../contexts/TokenContext';
import UserContext from '../contexts/UserContext';
import { useNavigate } from "react-router-dom";

export default function Login() {
   const {setToken} = useContext(TokenContext);
   const {setUser} = useContext(UserContext)
   const navigate = useNavigate();
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
         .post(routes.login, loginData) //mudar rota
         .then((res) => {
            const {token} = res.data
            const {name} = res.data
            const userId = res.data._id
            setToken(token)
            setUser(name)
            function intervalStatus (){
               statusRequest(token,userId)
            }
            setInterval(intervalStatus, 10000);
            console.log("post loginData feito");
            navigate("/");
         })
         .catch((err)=>{
            console.error(err)
            if(err.request.status=== 401){
               alert("Nome ou senha incorreto")
            }
         });
   }

   function statusRequest(token,userId) {
      axios
         .post(`${routes.home}status`, {
            lastStatus: Date.now(),
            userId: userId,
            token
         })
         .then(() => console.log("request status indo")).catch((err)=>{console.error(err)});
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
