import { useState } from "react"

export const useModalEdit = (initialState = false) => {

    const [isOpenEdit, setIsOpenEdit] = useState(initialState)

    const openModalEdit = () => setIsOpenEdit(true);

    const closeModalEdit = () => setIsOpenEdit(false);

  return {
    isOpenEdit,
    openModalEdit,
    closeModalEdit
  }
}
