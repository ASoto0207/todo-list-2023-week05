
// clear input    
// put li into ul 
//input id=toDoList
const toDoList= document.querySelector('#toDoList');
//button value id=toDoButton
const toDoButton=document.querySelector('#toDoButton');
//ul value id= listToDo
const listToDo= document.querySelector('#listToDo'); 
// to click the submit button.
toDoButton.addEventListener('click', theList);
function theList(){
    if(toDoList.value==""){
         alert('please add an item!')
    }else{
        const newListItem=document.createElement('li');
        newListItem.innerText= toDoList.value;
        listToDo.appendChild(newListItem);
        toDoList.value='';
    }
    const brandListItem=document.createElement('p'); 
    brandListItem.innerText=toDoList.value; 
        listToDo.appendChild(brandListItem);
        toDoList.value='';

}

    // to make sure that you can't just submit blanks add a 'return'and a IF as well. 
        // add an alert saying "please add a task "
    
    
    //put value of input into li 
   

    //remove the task afer it is completed. 
    // how do i remove all the children from an element 
 const deleteToDo=document.querySelector('#deleteToDo'); 
deleteToDo.addEventListener('click', deleteButton); 
function deleteButton(){
    listToDo.innerHTML='';
 }


    





    



