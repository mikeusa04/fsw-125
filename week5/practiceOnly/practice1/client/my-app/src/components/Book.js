import { useState } from "react"
import BookFormHandler from "./BookFormHandler"

function Book({ deleteBook, editBook, title, genre, _id }) {
    //console.log(props)
    const [editToggle, setEditToggle] = useState(false)
    return (
        <div className= "book">
            { !editToggle ?
                <>
                    <h1>Title: {title}</h1>
                    <p>Genre: {genre}</p>
                    <button 
                       onClick={() => deleteBook(_id)} 
                       className='delete-btn'>
                       Delete
                    </button>
                    <button 
                       onClick={() => setEditToggle(prevToggle => !prevToggle)} 
                       className='edit-btn'>
                       Edit
                    </button>
                </>
                :
                <>
                    <BookFormHandler 
                       title={title}
                       genre={genre}
                       _id={_id}
                       btnText='Submit Edit'
                       submit={editBook} />
                    <button 
                       onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                       Close
                    </button>
                </>     
            }    
        </div>
    );
}
export default Book;