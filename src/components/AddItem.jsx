import { useContext , useRef } from "react"
import { ListContext } from "../store/list-context"

export default function AddItem({setAdd}) {
    const titleRef = useRef();
    const textRef = useRef();
    const { onUpdate } = useContext(ListContext);

    function handleSubmit() {
        const task = {
            id : -1,
            title: titleRef.current.value,
            content: textRef.current.value,
        };
        onUpdate(task);
        setAdd(false)
    }

    return (
        <div id="Input-Form">
            <label>Title</label>
            <input type="text" placeholder="Enter a title" ref={titleRef}></input>

            <label>Text Content</label>
            <textarea
                    placeholder="enter the data"
                    rows="6"
                    cols="50"
                    ref={textRef}
            />
            <button type='submit' className="add-item-button" onClick={handleSubmit}>Submit</button>
        </div>
    )
}