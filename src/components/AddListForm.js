const AddListForm = ({listName, handleAddList, handleListName}) => {
  
    return ( 
      <form onSubmit={handleAddList} action="">
       <input value={listName} onChange={handleListName} type="text"/>
       <button type="submit" >Add list</button>
      </form>
    )
   }

   export default AddListForm;