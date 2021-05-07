import React, {useState} from "react";

function BookFormHandler({submit, btnText, title, genre, _id}) {
    const initialInputs = { title: title || "", genre: genre || "" };
    const [inputs, setInputs] = useState(initialInputs);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

     const handleSubmit = (e) => {
         e.preventDefault();
         submit(inputs, _id)
         setInputs(initialInputs);
     }

    return(
        <form onSubmit={handleSubmit}>
            <input
               type="text"
               name="title"
               value={inputs.title}
               onChange={handleChange}
               placeholder="Title" />
            <input
              type="text"
              name="genre"
              value={inputs.genre}
              onChange={handleChange}
              placeholder="Genre" />
            <button type="submit">{btnText}</button>
        </form>
    )
}

export default BookFormHandler;