import React, { useState } from "react";
import { useHistory } from "react-router";

function Signup() {
    // usernam
    // password
    // t.string "full_name"
    // t.date "dob"
    // t.string "sex"
    // t.string "height"
    // t.string "weight"
    // t.string "eye"
    // t.string "hair"
    // t.string "race"
    // t.string "tattoo"
    // t.string "birthmark"
    const history = useHistory()

    const [user, setUser] = useState('')

    const handleChange = (e) => {
       
       setUser({
            ...user,[e.target.name]: e.target.value
        })
        
        console.log(user)
    }

    const signUp = (e) => {
        e.preventDefault()
        if (user == null) {
            console.log("Please fill out all the fields.")
        } else {
            const options = {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    user: {
                        username: user.username,
                        password: user.password,
                        trustee_code: user.trustee_code
                    }
                })
            }
            fetch("http://localhost:3001/users", options)
                .then(r => r.json())
                .then(u => {
                    if (u.error) {
                    console.log("Please fill out all the fields.")
                    } else {
                        history.push('/home')
                }
            })
        }
    }
    
    return(
    <>
            <h1>Signup</h1>
            <form className="signupForm" onSubmit={(e) => signUp(e)}>
                <label htmlFor="username">
                    Username
                </label>
                <input
                    type="text"
                    name="username"
                    // value={username}
                    onChange={(e) => handleChange(e)}
                />
                <label htmlFor="password">
                    Password
                </label>
                <input
                    type="password"
                    name="password"
                    // value={password}
                    onChange={(e) => handleChange(e)}
                />
                <label htmlFor="username">
                    Trustee Code
                </label>
                <input
                    type="password"
                    name="trustee_code"
                    // value={username}
                    onChange={(e) => handleChange(e)}
                />
                <button className="buttons" type="submit">Signup</button>
            </form>


    </>
)}

export default Signup;