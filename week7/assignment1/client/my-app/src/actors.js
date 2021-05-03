import React, { useState } from 'react'
import AddActorForm from './addActorForm'

export default function Actor(props) {
    const { firstName, lastName, age, living, _id } = props
    const [editToggle, setEditToggle] = useState(false)
    return (
        <div>
            { !editToggle ?
            <>
                <h4>Name: { firstName } { lastName }</h4>
                <h4>Age: { age }</h4>
                <h4>Alive? { living + "" }</h4>
                <button className="deleteBtn" onClick={() => props.deleteActor(_id)}>
                    Delete
                </button>
                <button className="editBtn" onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                    Edit
                </button>
            </>
            :
            <>
                <AddActorForm 
                    firstName={firstName}
                    lastName={lastName}
                    age={age}
                    isAlive={living}
                    _id={_id}
                    btnText="Submit Edit"
                    submit={props.editActor}
                />
                <button className="closeBtn" onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
        </>
    }
        <hr />
        </div>
    )
}