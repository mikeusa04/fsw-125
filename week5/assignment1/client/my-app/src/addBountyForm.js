import React, { useState } from 'react'

export default function AddBountyForm(props) {
    const initInputs = {
        firstName: props.firstName || "", 
        lastName: props.lastName || "",
        living: props.living || "",
        type: props.type || ""
    }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e) {
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="input"
                type="text"
                name="firstName" 
                value={inputs.firstName} 
                onChange={handleChange}
                placeholder="First Name"
            />
            <input 
                className="input"
                type="text" 
                name="lastName" 
                value={inputs.lastName} 
                onChange={handleChange}
                placeholder="Last Name"
            />
            <br />
            <input 
                className="input"
                type="text" 
                name="living" 
                value={inputs.living} 
                onChange={handleChange}
                placeholder="Dead or Alive"
            />
            <input
                className="input"
                type="text" 
                name="type" 
                value={inputs.type} 
                onChange={handleChange}
                placeholder="Type"
            />   
            <br />
    <button className="addBountyBtn" type="submit">{props.btnText}</button>
        </form>
    )
}