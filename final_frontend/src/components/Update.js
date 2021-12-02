
import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";


function Update({currentUserInfo}) {

    const [newUpdate, setNewUpdate] = useState(' ')
    const [getStatusesId, setGetStatusesId] = useState('')
    

    const history = useHistory()

    const handleChange = (e) => {
       
       setNewUpdate({
            ...newUpdate,[e.target.name]: e.target.value
        })
        
        console.log(newUpdate)
    }

    const submitUpdate = (e) => {
        e.preventDefault()
        if (newUpdate == null) {
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
                    status: {
                        image: newUpdate.image,
                        text: newUpdate.text,
                        user_id: localStorage.id
                    }
                })
            }
            fetch("http://localhost:3001/statuses", options)
                .then(r => r.json())
                .then(i => {
                    if (i.error) {
                    console.log("Please fill out all the fields.")
                    } else {
                        setTimeout(() => {
                            currentUserInfo()
                            history.push('/update')
                            window.location.reload()
                        },800)
                        
                }
            })
        }
    }

    const handleHover = (e) => {
        setGetStatusesId({ id: e.target.id})
        console.log(getStatusesId)
    }
 
    const deleteUpdate = () => {
        console.log("indelete")
        const options = {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${localStorage.token}`
            }
        }
        fetch(`http://localhost:3001/statuses/${getStatusesId.id}`, options)
        
        setTimeout(() => {                         
                           currentUserInfo()
                        },500)
        setTimeout(() => {                         
                            //history.push('/update')
                            window.location.reload()
                        },800)
    }


    const updates = JSON.parse(localStorage.getItem("userInfo")).statuses
    
    const updateList = updates.map(eachInfo => {
        return (
            <div className='update' id={eachInfo.id} onMouseOver={(e) => handleHover(e)}>
                <img className="updatesImage" src={eachInfo.image} />
                <p className="updateText">{eachInfo.text}</p>
                {localStorage.trustee ? "" : <button id={eachInfo.id} className="deleteUpdates" type="submit" onClick={() => deleteUpdate()}>Delete</button>}
            </div>
        )
    })
    
    return (
        <div>
            <h1>Updates</h1>{localStorage.trustee? " ":
            <form className='updateForm' onSubmit={(e) => submitUpdate(e)}>
                <label htmlFor="image">
                    Image
                </label>
                <input
                    type="text"
                    name="image"
                    onChange={(e) => handleChange(e)}
                />
                <label htmlFor="password">
                    Text
                </label>
                <input
                    type="text"
                    name="text"
                    onChange={(e) => handleChange(e)}
                />
                <button className="buttons" type="submit">Update</button>
            </form>
                }
            <div >
                {updateList}
                
                
            </div>
        </div>
)}

export default Update;

