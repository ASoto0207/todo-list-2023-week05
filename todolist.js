const toDoList= document.querySelector('#toDoList');
//button value id=toDoButton
const toDoButton=document.querySelector('#toDoButton');
//ul value id= listToDo
const listToDo= document.querySelector('#listToDo'); 
// to click the submit button.
toDoButton.addEventListener('click', theList);
let count= listToDo.querySelectorAll('*').length;

document.querySelector('#count').innerHTML= "Task:" + count; 

 // to make sure that you can't just submit blanks add a 'return'and a IF as well. 
        // add an alert saying "please add a task "
function theList(){

    if(toDoList.value==""){
         alert('please add an item!')
    }else{
        const newListItem=document.createElement('li');
        newListItem.innerText= toDoList.value;
        listToDo.addEventListener('click',crossOut); //this is where ill be crossning the words out. 
        listToDo.appendChild(newListItem);
        toDoList.value='';
        let count= listToDo.querySelectorAll('*').length;
       
        document.querySelector('#count').innerHTML= "Task:" + count; 
    }
    const brandListItem=document.createElement(''); 
    brandListItem.innerText=toDoList.value; 
        listToDo.appendChild(brandListItem);
        toDoList.value='';
      
}
// line throught the text 
function crossOut(event){
    event.target.classList.toggle('selected');
    clearCompleted.addEventListener('click', event); 
    
}
  
    
    
   

    //remove the task afer it is completed. 
    // how do i remove all the children from an element 
 const deleteToDo=document.querySelector('#deleteToDo'); 
deleteToDo.addEventListener('click', deleteButton); 
document.querySelector('#count').innerHTML="Task:" + count; 
function deleteButton(){
    listToDo.innerHTML='';
 }

// completed task section 
const clearCompletedButton= document.querySelector('#clearCompleted')
 clearCompletedButton.addEventListener('click', clearCompleted);
 document.querySelector('#count').innerHTML="Task :" + count; 

 function clearCompleted(){
    const completedTask=listToDo.querySelectorAll(".selected");
    completedTask.forEach((task)=>{
        task.remove();
    });
    let count= listToDo.querySelectorAll('*').length;
       
        document.querySelector('#count').innerHTML= "Task:" + count; 
 } 







    



