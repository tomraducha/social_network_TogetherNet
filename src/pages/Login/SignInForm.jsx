import Cookies from "js-cookie";
import React, { useState } from "react";
import useFetch from "../../hooks/Usefetch/index"

export default function Login() {
    const [formData, setFormData] = useState({
        identifier: " ",
        password: " ",
    });

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const sendData = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }

        const data = await useFetch("http://localhost:1337/auth/local", sendData)
        const token = await data.jwt

        Cookies.set("token", token)


    }

    return (
        <div className="form-container">
            <form method="post" onSubmit={handleSubmit}>
                <label>email</label>
                <input type="email" id="identifier" onChange={handleChange} />

                <label>password</label>
                <input type="password" id="password" onChange={handleChange} />

                <input type="submit" />

            </form>
        </div>
    );
}













































// import axios from 'axios';
// import React, { useState } from 'react'

// export default function SignInForm() {
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')

//     const handleLogin = (e) => {
//         e.preventDefault();
//         const emailError = document.querySelector('.email.error');
//         const passwordError = document.querySelector('.password.error');
//         axios({
//             method: "post",
//             url: "http://localhost:1337/auth/local/register",
//             withCredentials: true,
//             data: {
//                 email,
//                 password,
//             },
//         })
//             .then((res) => {
//                 if (res.data.errors) {
//                     emailError.innerHTML = res.data.errors.email;
//                     passwordError.innerHTML = res.data.errors.password;
//                 } else {
//                     window.location = '/';
//                 };

//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     }
//     return (
//         //Quand on fait un form onSubmit on fait derrière un input de type submit
//         //le onSubmit se declenche quand on click sur l'input de type sumbit
//         <form action="" onSubmit={handleLogin} id="sign-up-form">
//             <label htmlFor="email" >Email</label>
//             <br />
//             {/* ce qui est changé dans l'input on le recupere avec setEMail */}
//             <input
//                 type="text"
//                 name="email"
//                 id="email"
//                 onChange={(e) => setEmail(e.target.value)}
//                 value={email}
//             />
//             <div className="email error"></div>
//             <br />
//             <label htmlFor="password">Mot de passe</label>
//             <br />
//             <input type="password"
//                 name="password"
//                 id="password"
//                 onChange={(e) => setPassword(e.target.value)}
//                 value={password}
//             />
//             <div className="password error"></div>
//             <br />
//             <input
//                 type="submit"
//                 value="Se connecter"
//             />
//         </form>
//     )
// }