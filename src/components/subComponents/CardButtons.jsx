import { BiSolidTrashAlt , BiSolidEdit , BiSearch} from "react-icons/bi";
import { useContext } from "react";
import { ListContext } from "../../store/list-context";

export default function CardButtons({id , handleEdit , onRedirect}){
    const {onDelete} = useContext(ListContext)

    return(
        <section id="Card-buttons">
            <button onClick={onRedirect}><BiSearch /></button>
            <button onClick={() => onDelete(id)}><BiSolidTrashAlt /></button>
            <button onClick={handleEdit}><BiSolidEdit /></button>
        </section>
    )
}