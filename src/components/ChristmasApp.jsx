import { PresentsList } from "./PresentsList"
import {AddPresents} from './AddPresents'
import { useState } from "react"
import { useForm } from "./hooks/useForm"
import { useModal } from "./hooks/useModal"
import { useModalEdit } from "./hooks/useModalEdit"

const presents = []

export const ChristmasApp = () => {
    const [present, setPresent] = useState(presents);
    const [presentEditId, setPresentEditId] = useState(null);
    const {isOpen, openModal, closeModal} = useModal(false)
    const {isOpenEdit, openModalEdit, closeModalEdit} = useModalEdit(false)

    const {description, recipient, cuantity, onInputChange, resetForm, setForm} = useForm({
        description: '',
        recipient: '',
        cuantity: ''
    })

    const handleNewPresent = (newPresent) =>{
        setPresent([...present, newPresent])
    };
    
    const handleDeletePresent = (id) =>{
        const newPresents = present.filter( present => present.id !== id )
        setPresent(newPresents)
    }
    const handleDleteAll = () =>{
        setPresent([])
    }
    const catchEditData = (present) =>{
        setPresentEditId(present.id)
        openModalEdit()

        const formValues = {
            description: present.description,
            cuantity: present.cuantity,
            recipient: present.recipient
        }
        setForm(formValues)
    }
    const onFormSubmitEdit = (event) =>{
        event.preventDefault();
       

        const editedPresent = {
            id: presentEditId,
            description,
            cuantity,
            recipient,
        }
        if(description.length <= 1) return;
        

        const newPresent = [...present];
        const index = present.findIndex((present) => present.id === presentEditId);
        newPresent[index] = editedPresent

        setPresent(newPresent)
    }


    


  return (
    <>
   
    <main className={` mainPrincipal ${isOpen || isOpenEdit ? 'opacity' : ''}`}>
        <section className={`container bg-light  ${isOpen || isOpenEdit ? 'index' : ''}`}>
            <h1 className="text-center font-weight-bold">
                TARJETA DE REGALOS
            </h1>
            <hr />
            <h5 className={`${present.length <= 0 ? 'text-center' : 'd-none'}`}>No hay regalos, <br /> agrega algo no seas Grinch</h5>

            <div>
                <PresentsList
                present={present}
                onDeletePresent={handleDeletePresent}
                onEditPresent={catchEditData}/>

                <button
                onClick={openModal} 
                className="buttonAdd">Agregar Regalo</button>
                <button
                onClick={handleDleteAll} 
                className={`${ present.length <= 0 ? 'd-none' : 'button'}`}>Borrar todos</button>
            </div>
        </section>
    

        <AddPresents
        onNewPresent={handleNewPresent}
        openModal={openModal}
        closeModal={closeModal}
        isOpen={isOpen}
        />
    

       <section className={`${ !isOpenEdit ? 'd-none' : 'd-flex'}`}>
    <div className="container bg-light">
        <div
        onClick={closeModalEdit} 
        className="closeImage">
            <img src="./src/assets/img/close.jpeg" alt=""/>
        </div>
        <h1 className="text-center font-weight-bold">EDITÁ EL REGALO</h1>
        <hr />

        <form
        onSubmit={onFormSubmitEdit} 
        className="mt-5 mb-4 bg-light d-grid">
            <input
                placeholder="¿Qué vas a regalar?"
                name="description"
                value={description}
                onChange={onInputChange}
                type="text"/>

            <input
                placeholder="¿Para quién?"
                name="recipient"
                value={recipient}
                onChange={onInputChange}
                type="text"/>

            <input
                placeholder="¿Cuanto?"
                name="cuantity"
                value={cuantity}
                onChange={onInputChange}
                type="number"/>

            <div className="d-flex justify-content-between">
                <button 
                onClick={closeModalEdit}
                className="buttonAdd">Guardar</button>
            </div>
        </form>
    </div >
</section>
    </main>
    <div className="version bg-light">
        <h4>Proxima versión</h4>
        <p>
            <li>Recibir regalos de una API</li>
            <li>Boton para regalo aleatorio</li>
            <li>Regalos con precio, segun cantidad</li>
            <li>Campo de precio total de regalos</li>
            <li>Boton de duplicar regalos, modal pre-cargado</li>
            <li>Boton de previsualizacion sin precios, modal</li>
            <li>Boton de imprimir</li>
            <li>Sonido de fondo deshabilitado por defecto</li>
            <li>Copitos de nieve</li>
        </p>
    </div>
</>
  )
}
