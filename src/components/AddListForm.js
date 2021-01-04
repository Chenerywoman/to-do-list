import './AddListForm.css'

const AddListForm = ({listName, handleAddList, handleListName}) => {
  
    return ( 
      <form className="form add-list" onSubmit={handleAddList} action="">
       <input required className="input add-list" value={listName} onChange={handleListName} type="text"/>
       <button className="button add-list"type="submit" >Add list</button>
      </form>
    )
   }

   export default AddListForm;