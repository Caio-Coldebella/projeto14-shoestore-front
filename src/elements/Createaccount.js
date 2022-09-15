import axios from "axios";
import { useState } from "react";
import Authentication from './styled-components/AuthenticationStyle';

export default function Createaccount() {
   const [name, setName] = useState();
   const [password, setPassword] = useState();
   const [address, setAddress] = useState();
   const [fone, setFone] = useState();
   const [email, setEmail] = useState();
   function handleForm(e) {
      e.preventDefault();
      const userData = {
         name,
         password,
         email,
         address,
         fone,
      };
      axios
         .post("http://localhost:5000/sign-up", userData)
         .then(() => console.log("post userData feito"))
         .catch(() => console.log("deu ruim no post user"));
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
                  value={fone}
                  onChange={(e) => setFone(e.target.value)}
                  type="number"
                  placeholder="Telefone"
                  required
               />
               <button type="submit">Confirmar</button>
            </form>
         </div>
      </Authentication>
   );
}
