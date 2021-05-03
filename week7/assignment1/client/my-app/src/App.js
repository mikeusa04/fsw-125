import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Actor from './actors' 
import AddActorForm from './addActorForm'

export default function App() {
    const [actors, setActors] = useState([])
    
    function getActors() {
        axios.get("/actors")
        .then(res => setActors(res.data))
        .catch(err => console.log(err))// or console.log(err.response.data.errMsg)
    }

    function addActor(newActor) {
        axios.post("/actors", newActor)
        .then(res => {
            setActors((prevActors) => [...prevActors, res.data]);
        })
        .catch(err => console.log(err))// or console.log(err.response.data.errMsg)
    }

    function deleteActor(actorId) {
        axios.delete(`/actors/${actorId}`)
        .then(res => {
            setActors(prevActors => prevActors.filter(actor => actor._id !== actorId))
        })
        .catch(err => console.log(err))// or console.log(err.response.data.errMsg)
    }

    function editActor(updates, actorId) {
        axios.put(`/actors/${actorId}`, updates)
        .then(res => {
            setActors(prevActors => prevActors.map(Actor => Actor._id !== actorId ? Actor : res.data))
        })
        .catch(err => console.log(err))// or console.log(err.response.data.errMsg)
    }

    useEffect(() => {
        getActors()
    }, [])

    const actorsList = actors.map(actor => 
        <Actor 
            {...actor} 
            deleteActor={deleteActor}
            editActor={editActor}
            key={actor.firstName}
        />) 
    return (
        <div className="allText">
            <h2 className="heading">Actors List</h2>
            <AddActorForm 
                submit={addActor}
                btnText="Add Actor"
            />
            {actorsList}
        </div>
    )
}