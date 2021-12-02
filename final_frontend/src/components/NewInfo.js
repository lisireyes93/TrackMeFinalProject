import React, { useState } from "react";
import { useHistory } from "react-router";

function NewInfo({ currentUserInfo }) {

    const [newInfo, setNewInfo] = useState(' ')

    const history = useHistory()

    // const [user, setUser] = useState('')

    const handleChange = (e) => {
       
       setNewInfo({
            ...newInfo,[e.target.name]: e.target.value
        })
        
        console.log(newInfo)
    }

    const submitInfo = (e) => {
        e.preventDefault()
        if (newInfo == null) {
            console.log("Please fill out all the fields.")
        } else {
            const options = {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    Authorization: `Bearer ${localStorage.token}`
                },
                body: JSON.stringify({
                    info: {
                        picture: newInfo.picture,
                        full_name: newInfo.full_name,
                        dob: newInfo.dob,
                        height: newInfo.height,
                        weight: newInfo.weight,
                        eye: newInfo.eye,
                        hair: newInfo.hair,
                        race: newInfo.race,
                        tattoo: newInfo.tattoo,
                        birthmark: newInfo.birthmark,
                        extra: newInfo.extra,
                        user_id: localStorage.id
                    }
                })
            }
            fetch("http://localhost:3001/infos", options)
                .then(r => r.json())
                .then(i => {
                    if (i.error) {
                    console.log("Please fill out all the fields.")
                    } else {
                        currentUserInfo()
                        history.push('/home')
                }
            })
        }
    }
    
    return(
    <>
    <h1>Info</h1>
            <form className="infoForm" onSubmit={(e) => submitInfo(e)}>

                <label htmlFor="picture">
                    Profile Picture
                </label>
                <input
                    type="text"
                    name="picture"
                    onChange={(e) => handleChange(e)} 
                />

                <label htmlFor="full_name">
                    Full Name
                </label>
                <input
                    type="text"
                    name="full_name"
                    onChange={(e) => handleChange(e)} 
                />
                
                <label htmlFor="dob">
                    DOB
                </label>
                <input
                    type="text"
                    name="dob"
                    onChange={(e) => handleChange(e)} 
                />

                <label htmlFor="height">
                    Height
                </label>
                <input
                    type="text"
                    name="height"
                    onChange={(e) => handleChange(e)} 
                />

                <label htmlFor="weight">
                    Weight
                </label>
                <input
                    type="text"
                    name="weight"
                    onChange={(e) => handleChange(e)} 
                />

                <label htmlFor="eye">
                    Eyes Color
                </label>
                <input
                    type="text"
                    name="eye"
                    onChange={(e) => handleChange(e)} 
                />

                <label htmlFor="hair">
                    Hair Color
                </label>
                <input
                    type="text"
                    name="hair"
                    onChange={(e) => handleChange(e)} 
                />

                <label htmlFor="race">
                    Race
                </label>
                <input
                    type="text"
                    name="race"
                    onChange={(e) => handleChange(e)} 
                />

                <label htmlFor="tattoo">
                    Tattoos
                </label>
                <input
                    type="text"
                    name="tattoo"
                    onChange={(e) => handleChange(e)} 
                />

                <label htmlFor="birthmark">
                    Birthmarks
                </label>
                <input
                    type="text"
                    name="birthmark"
                    onChange={(e) => handleChange(e)} 
                />

                <label htmlFor="extra">
                    Extras
                </label>
                <input
                    type="text"
                    name="extra"
                    onChange={(e) => handleChange(e)} 
                />
                <button className="buttons" type="submit">Submit</button>
            </form>
    </>
)}

export default NewInfo;