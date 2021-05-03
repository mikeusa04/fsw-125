import React, { useState } from 'react'

export default function AddActorForm(props) {
    const initInputs = {
        firstName: props.firstName || "", 
        lastName: props.lastName || "",
        living: props.living || "",
        age: props.age || ""
    }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit() {
        //e.preventDefault()
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
                required
            />
            <input 
                className="input"
                type="text" 
                name="lastName" 
                value={inputs.lastName} 
                onChange={handleChange}
                placeholder="Last Name"
                required
            />
            <br />
            <input 
                className="input"
                type="text" 
                name="living" 
                value={inputs.living} 
                onChange={handleChange}
                placeholder="Dead or Alive"
                required
            />
            <input
                className="input"
                type="text" 
                name="age" 
                value={inputs.age} 
                onChange={handleChange}
                placeholder="Age"
                required
            />   
            <br />
    <button className="addActorBtn" type="submit">{props.btnText}</button>
        </form>
    )
}