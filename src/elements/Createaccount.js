import axios from "axios";
import { useState } from "react";
import {Authentication,IMG} from './styled-components/AuthenticationStyle';
import {useNavigate ,Link} from "react-router-dom";
import logo from "../css/ligthbackground.jpg";


export default function Createaccount() {
   const navigate = useNavigate();
   const [name, setName] = useState();
   const [password, setPassword] = useState();
   const [address, setAddress] = useState();
   const [phone, setPhone] = useState();
   const [email, setEmail] = useState();
   function handleForm(e) {
      e.preventDefault();
      const userData = {
         name,
         password,
         email,
         address,
         phone:phone.toString(),
      };
      axios
         .post(`${process.env.REACT_APP_API_BASE_URL}/sign-up`, userData) //mudar rota
         .then(() => {navigate('/sign-in')})
         .catch((err) => console.error(err));
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
               <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="E-mail"
                  required
               />
               <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  type="text"
                  placeholder="Endereço"
                  required
               />
               <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="number"
                  placeholder="Telefone"
                  required
               />
               <button type="submit">Confirmar</button>
               <Link to={'/sign-in'}>Já possui uma conta?</Link>
            </form>
            
         </div>
      </Authentication>
   );
}