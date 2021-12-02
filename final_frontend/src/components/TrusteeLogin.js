import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";

function TrusteeLogin({currentUserInfo}) {

   const history = useHistory()
    const [loginUser, setLoginUser] = useState('')

    const handleChange = (e) => {
       
       setLoginUser({
            ...loginUser,[e.target.name]: e.target.value
        })
    }

     const redirect = () => {
        history.push('/newinfo')
    }


    const toLogin = (e) => {
        e.preventDefault()
        if (loginUser == null) {
            console.log("Please enter Username or Password.")
        } else {
            const options = {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    user: {
                        trustee_code: loginUser.code
                    }
                })
            }
            fetch('http://localhost:3001/login', options)
                .then(res => res.json())
                .then(userlogin => {
                    if (userlogin.error) {
                        console.log(userlogin.error)
                    } else {
                        localStorage.token = userlogin.token
                        localStorage.trustee = true
                        currentUserInfo()
                        setTimeout(() => {
                            if (JSON.parse(localStorage.getItem("userInfo")).info == null) {
                                console.log('omg')
                                redirect()
                                window.location.reload()
                            }
                            else {
                                history.push('/home')
                                window.location.reload()
                    }
                        }, 800)
                        
                    }                     
                    
            })
        }
    }


    return(
        <>
            <h1>Trustee</h1>
            <form className='loginForm' onSubmit={(e) => toLogin(e)}>
                <label htmlFor="username">
                    Trustee Code
                </label>
                <input
                    type="password"
                    name="code"
                     onChange={(e) => handleChange(e)}
                />
                <button className="buttons" type="submit">Login</button>
        </form>
        </>

)}

export default TrusteeLogin;