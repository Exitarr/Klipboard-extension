import { useState } from "react"

export default function NoteCard({id,title,text}){
    const [show,setShow] = useState(false)

    function handleShow(){  
        setShow(true)
    }

    function handleClose(e){
        e.stopPropagation()
        setShow(false)
    }

    return (
        <section id="content" onClick={handleShow}>
           <section id="Card-Header">
                <h2>{title}</h2>
                {show &&  <section>
                                <button onClick={handleClose}>Close</button>
                                <button>delete</button>
                                <button>Search</button>
                          </section>
                }
           </section>
           <p className={`note ${show ? "show" : ""} `} >{text}</p>
        </section>
    )
}