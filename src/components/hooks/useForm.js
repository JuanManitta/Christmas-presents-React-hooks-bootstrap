import { useState } from "react"




export const useForm = (initialState) => {

    const [form, setForm] = useState(initialState)

    const onInputChange = ({target})  =>{

        const {name, value} = target;

        setForm({
            ...form,
            [ name ] : value,
        })

    }
    const resetForm = () =>{
      (setForm(initialState))
    } 

   

  return {
    ...form,
    form,
    setForm,
    onInputChange,
    resetForm
  }
  
}
