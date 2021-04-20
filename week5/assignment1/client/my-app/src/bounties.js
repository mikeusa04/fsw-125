import React, { useState } from 'react'
import AddBountyForm from './addBountyForm'

export default function Bounty(props) {
    const { firstName, lastName, type, living, _id } = props
    const [editToggle, setEditToggle] = useState(false)
    return (
        <div>
            { !editToggle ?
            <>
                <h4>Name: { firstName } { lastName }</h4>
                <h4>Type: { type }</h4>
                <h4>Alive? { living + "" }</h4>
                <button className="deleteBtn" onClick={() => props.deleteBounty(_id)}>
                    Delete
                </button>
                <button className="editBtn" onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                    Edit
                </button>
            </>
            :
            <>
                <AddBountyForm 
                    firstName={firstName}
                    lastName={lastName}
                    type={type}
                    isAlive={living}
                    _id={_id}
                    btnText="Submit Edit"
                    submit={props.editBounty}
                />
                <button className="closeBtn" onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
        </>
    }
        <hr />
        </div>
    )
}