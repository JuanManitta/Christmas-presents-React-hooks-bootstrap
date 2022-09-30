import { useForm } from "./hooks/useForm"





export const AddPresents = ({onNewPresent, isOpen, openModal, closeModal}) => {

    const {description, recipient, cuantity, onInputChange, resetForm,  } = useForm ({
        description: '',
        cuantity: '',
        recipient: ''
    })
    const onFormSubmit = (event) =>{
        event.preventDefault();
        if(description.length <= 1  ) return;
        if(recipient.length <= 1  ) return;
        if(cuantity.length <= 0  ) return;

        const newPresent = ({
            id: new Date().getTime(),
            description,
            recipient,
            cuantity
        })
        onNewPresent(newPresent)
        resetForm()
        
    }

    

  
    return (

 <section className={`${ !isOpen ? 'd-none' : 'd-flex'}`}>
    <div className="container bg-light">
        <div
        onClick={closeModal} 
        className="closeImage">
            <img src="./src/assets/img/close.jpeg" alt=""/>
        </div>
        <h1 className="text-center font-weight-bold">AÑADI UN REGALO</h1>
        <hr />

        <form
        onSubmit={onFormSubmit}
        
        className="mt-5 mb-4 bg-light d-grid">

            <div className="d-flex">
            <input
            placeholder="¿Qué vas a regalar?"
            name="description"
            value={description}
            onChange={onInputChange} 
            type="text"/>

            <button className="btn "><span className="parrafo">Sorprendeme</span></button>
            </div>
            
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
                onClick={closeModal} 
                className="button2">Guardar</button>
                <button className="button2">Guardar y agregar otro</button>
            </div>
        </form>
    </div >
</section>

  )
}
