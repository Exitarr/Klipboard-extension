import { useState , useContext } from "react";
import { BiSolidTrashAlt , BiSolidEdit , BiSearch} from "react-icons/bi";
import Modal from "./Modal";
import ModalCard from "./ModalCard";

import { ListContext } from "../../store/list-context";

export default function CardButtons({item , handleEdit , onRedirect}){
    const [showModal , setShowModal] = useState(false)
    function handleShow(e){
        e.stopPropagation()
        setShowModal(true)
    }

    const {onSearch} = useContext(ListContext)

    return(
        <>
            <Modal open={showModal}>
                <ModalCard
                   id={item.id}
                   setShowModal={setShowModal}
                ></ModalCard>
            </Modal>
            <section id="Card-buttons">
                <button onClick={() =>onSearch(item.url)}><BiSearch /></button>
                <button onClick={handleShow}><BiSolidTrashAlt /></button>
                <button onClick={handleEdit}><BiSolidEdit /></button>
            </section>
        </>
        
    )
}