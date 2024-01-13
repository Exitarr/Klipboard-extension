import Header from "./components/Header"
import Modal from "./components/Modal"
import ModalCard from "./components/ModalCard"
import BoxSection from "./components/boxSection"
import { useState } from "react"


function App() {
  const [openModal, setOpenModal] = useState(false)

  function handleModal() {
    setOpenModal(true)
  }

  return (
    <>
      <Modal open = {openModal}>
        <ModalCard />
      </Modal>
      <Header />
      <BoxSection handleModal = {handleModal}/>
    </>
  )
}

export default App
