import axios from "axios";
import { useState, useContext } from "react";
import {Authentication,IMG} from "./styled-components/AuthenticationStyle";
import TokenContext from '../contexts/TokenContext';
import UserContext from '../contexts/UserContext';
import { Link, useNavigate } from "react-router-dom";
import logo from "../css/ligthbackground.jpg";


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
         .post(`${process.env.REACT_APP_API_BASE_URL}/sign-in`, loginData) //mudar rota
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
            navigate("/");
         })
         .catch((err)=>{
            console.error(err)
            if(err.request.status=== 401){
               alert("O nome ou a senha estão incorretos")
            }
            if(err.request.status=== 404){
               alert("A senha está incorreta")
            }
         });
   }

   function statusRequest(token,userId) {
      axios
         .post(`${process.env.REACT_APP_API_BASE_URL}/status`, {
            lastStatus: Date.now(),
            userId: userId,
            token
         })
         .then(() => {}).catch((err)=>{console.error(err)});
   }
   return (
      <Authentication>
         <Link to={'/'}><IMG src={logo} alt="logo"/></Link>
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
               <Link to={'/sign-up'}>Ainda não possui uma conta?</Link>
            </form>
            
         </div>
      </Authentication>
   );
}
