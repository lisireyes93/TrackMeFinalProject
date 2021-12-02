import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

function Info() {

    const history = useHistory()
    const [info, setInfo] = useState([])

    

    const redirect = () => {
        history.push('/')
    }
    

    // useEffect(() => {
    //     fetch('http://localhost:3001/info')
    //         .then(r => r.json())
    //         .then(info => {
    //             console.log(info)
    //             setInfo(info)
    //         })
    // }, [])
    
    // let userInfo = info.map(eachInfo => {
    //     console.log("INFOOOOOOnjdsjkbjk", eachInfo)
    // })

    // console.log(userInfo)
    return (
        <div className="info">
            <div className="insideInfo">
                <h1>Profile</h1>
                <img className="profilePicture" src={JSON.parse(localStorage.getItem("userInfo")).info.picture}/>
                <p className="pName">{JSON.parse(localStorage.getItem("userInfo")).info.full_name}</p>
                <p>D.O.B: {JSON.parse(localStorage.getItem("userInfo")).info.dob}</p>
                <p>Height: {JSON.parse(localStorage.getItem("userInfo")).info.height}</p>
                <p>Weight: {JSON.parse(localStorage.getItem("userInfo")).info.weight}</p>
                <p>Eye Color: {JSON.parse(localStorage.getItem("userInfo")).info.eye}</p>
                <p>Hair Color: {JSON.parse(localStorage.getItem("userInfo")).info.hair}</p>
                <p>Race: {JSON.parse(localStorage.getItem("userInfo")).info.race}</p>
                <p>Tattoos:<img className="tattoo"src={JSON.parse(localStorage.getItem("userInfo")).info.tattoo}/></p>
                <p>Birthmarks: {JSON.parse(localStorage.getItem("userInfo")).info.birthmark}</p>
                <p>Extra: {JSON.parse(localStorage.getItem("userInfo")).info.extra}</p>
            </div>
        </div>
    )
}



export default Info;