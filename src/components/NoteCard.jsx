export default function NoteCard({title,text}){
    console.log(title,text)
    return (
        <section id="content">
           <h3>{title}</h3>
           <p>{text}</p>
        </section>
    )
}