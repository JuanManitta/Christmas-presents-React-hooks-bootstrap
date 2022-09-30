import { useState } from "react"




export const useFormEdit = (initialState) => {

    const [formEdit, setFormEdit] = useState(initialState)

    const onInputEdit = ({target})  =>{

        const {name, value} = target;
        setFormEdit({
            ...formEdit,
            [ name ] : value,
        })

    }
    const resetFormEdit = () =>{
      (setFormEdit(initialState))
    } 

   

  return {
    ...formEdit,
    formEdit,
    setFormEdit,
    onInputEdit,
    resetFormEdit,
    setFormEdit
  }
  
}
