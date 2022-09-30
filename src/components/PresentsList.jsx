import {PresentsItem} from './PresentsItem'




export const PresentsList = ({present, onDeletePresent, onEditPresent}) => {

  return (
    <div>
      {
        present.map(present => (
          <PresentsItem
          present={present}
          key={present.id}
          onDeletePresent={onDeletePresent}
          onEditPresent={onEditPresent}/>
        ))
      }
    </div>
  )
}
