import NoteCard from "./NoteCard"
import { items } from "../data.js"

export default function BoxSection(){
    console.log(items)
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
           </ul> 
        </section>
    )
}