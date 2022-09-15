import axios from "axios";
import { useState } from "react";
import Authentication from './styled-components/AuthenticationStyle';

export default function Login() {
   const [name, setName] = useState();
   const [password, setPassword] = useState();
   function handleForm(e) {
      e.preventDefault();
      const loginData = {
         name,
         password
      };
      axios
         .post("http://localhost:5000/sign-in", loginData)
         .then(() => console.log("post loginData feito"))
         .catch(() => console.log("deu ruim no post user"));
   }
   return (
      <Authentication>
         <div>
            <form onSubmit={handleForm}>
               <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="number"
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
