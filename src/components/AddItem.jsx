import { VscAdd } from "react-icons/vsc";

export default function AddItem() {
    return (
        <div className="Input-Form">
            <form>
                <label><input type="text" placeholder="Enter a title"></input></label>
                <textarea
                        placeholder="enter the data"
                        rows="5"
                        cols="50"
                />
                <button type='submit'><VscAdd /></button>
            </form>
        </div>
    )
}