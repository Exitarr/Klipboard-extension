import NoteCard from "./NoteCard"
import { items } from "../data.js"
import { useState } from "react"
import AddItem from "./AddItem.jsx"

export default function BoxSection(){
    const [add , setAdd] = useState(false)
    const handleInput = () =>{
        setAdd(true)
    }

    return(
        <section>
           <ul>
              {items.map(item => {
                return(
                    <li key={item.id}>
                        <NoteCard title={item.title} text={item.content}/>
                    </li>
                )
              })}
              {add == false ? <button onClick={handleInput} className="add-item-button">Add Item</button> : <AddItem />}
           </ul> 
        </section>
    )
}