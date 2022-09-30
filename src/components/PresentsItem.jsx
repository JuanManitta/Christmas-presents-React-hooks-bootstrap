




export const PresentsItem = ({present, onDeletePresent, onEditPresent}) => {



  return (

    <li className="d-flex justify-content-between mt-3">
    <div className="parrafo">
        <span className="font-weight-bold">
            <p>{`${present.description} x${present.cuantity}`}</p>
        </span>
        <span>
            <p className="recipient">{present.recipient}</p>
        </span>
    </div>
    <div className="d-flex">
        <span>
            <p
            onClick={() => onEditPresent(present)} 
            className="delete">E</p>
        </span>
        <span>
            <p
            onClick={() => onDeletePresent(present.id)} 
            className="delete">X</p>
        </span>
    </div>
</li>

  )
}
