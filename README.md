# List project using React

This was a CodeNation frontend project to practise using React.  
The project set up was done using create-react-app. 

## Project Brief

The project brief was to use React to create a list webpage where tasks could be added and removed.  

## First stage: creating lists and tasks

I decided to extend my project from the basic brief by creating the functionality to add multiple lists.  Tasks could then be added and removed from lists.  

I created a List component with it's own state and methods to add and remove tasks.  The method to remove a task was passed down into the Task component via the props object using object destructuring. 

## Second stage: moving tasks to other lists

I extended the project further by adding the functionality to move tasks between lists. 

In order to do this, I first moved the methods to add and remove tasks from the List component up to the App class. Then I created a method for removing the task from it's current list and adding it to the new one (handleMoveTask). handleMoveTask also updates the array of lists in state.  It takes the task index, current list index and requested list index as parameters. The method 

I created a SelectList component which was rendered inside the Task component.  The SelectList component is passed the task and list indexes, the handleMoveTask method and an array of list titles.  SelectList renders the list titles in an html select element. It captures the selected list (to move the task to) in local state using a handleChange method.  When the selected list is confirmed by a submit event, the handleSubmit method calls the handleMoveTask (passed down from the App component via props) with the task's index, current list index and the chosen list index. 

## Final stage: styling and responsiveness

Once the functionality was working, I used a helpful website (https://coolors.co/) to help me come up with a colour scheme for the webpage.  

I then worked on styling the webpage and making it responsive to different screen sizes, using media queries where required.





