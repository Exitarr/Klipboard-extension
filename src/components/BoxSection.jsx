import { useState , useContext } from "react"
import { ListContext } from "../store/list-context"
import AddItem from "./AddItem.jsx"
import NoteCard from "./NoteCard.jsx"

export default function BoxSection(){
    
    const {items} = useContext(ListContext)
    
    const [add , setAdd] = useState(false) 
    const handleInput = () =>{
        setAdd(true)
    }


    return(
        <section id="box">
           <ul>
              {items.map(item => {
                return(
                    <li key={item.id} >
                        <NoteCard item = {item} />
                    </li>
                )
              })}
              {add == false ? <button onClick={handleInput} className="add-item-button">Add Item</button> : <AddItem setAdd={setAdd} />}
           </ul> 
        </section>
    )
}