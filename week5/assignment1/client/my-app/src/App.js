import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Bounty from './bounties' 
import AddBountyForm from './addBountyForm'

export default function App() {
    const [bounties, setBounties] = useState([])
    
    function getBounties() {
        axios.get("/bounties")
        .then(res => setBounties(res.data))
        .catch(err => console.log(err))
    }

    function addBounty(newBounty) {
        axios.post("/bounties", newBounty)
        .then(res => {
        })
        .catch(err => console.log(err))
    }

    function deleteBounty(bountyId) {
        axios.delete(`/bounties/${bountyId}`)
        .then(res => {
            setBounties(prevBounties => prevBounties.filter(bounties => Bounty._id !== bountyId))
        })
        .catch(err => console.log(err))
    }

    function editBounty(updates, bountyId) {
        axios.put(`/bounties/${bountyId}`, updates)
        .then(res => {
            setBounties(prevBounties => prevBounties.map(Bounty => Bounty._id !== bountyId ? Bounty : res.data))
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getBounties()
    }, [])

    const bountiesList = bounties.map(bounty => 
        <Bounty 
            {...bounty} 
            key={bounty.firstName}
            deleteBounty={deleteBounty}
            editBounty={editBounty}
        />) 
    return (
        <div className="allText">
            <h2 className="heading">Bounty List</h2>
            <AddBountyForm 
                submit={addBounty}
                btnText="Add Bounty"
            />
            {bountiesList}
        </div>
    )
}