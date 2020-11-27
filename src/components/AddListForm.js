const AddListForm = ({listName, handleAddList, handleListName}) => {
  
    return ( 
      <form onSubmit={handleAddList} action="">
        <label htmlFor="">Name of List</label>
       <input value={listName} onChange={handleListName} type="text"/>
       <button type="submit" >Add List</button>
      </form>
    )
   }

   export default AddListForm;