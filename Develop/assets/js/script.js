// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));
submitPress = document.getElementById("submit");
// submitPress.addEventListener("click", showAlert);
taskTitleInput = document.getElementById('taskTitle');
taskDueInput = document.getElementById('taskDueDate');
taskDescriptionInput = document.getElementById('taskDescription')



// Todo: create a function to generate a unique task id
function generateTaskId() {
  //nextId != null then nextId++
}


// Todo: create a function to create a task card
// make a fake card to put up
function createTaskCard() {
    console.log("here");
    let dummycard = $("#dummy-card").clone();
    console.log(dummycard)
    dummycard.removeClass("d-none");
    dummycard.appendTo("#todo-cards");
}

// Todo: create a function to render the task list and make cards draggable
$( function draggable() {
    $( "#dummy-card" ).draggable();
  } );
// Todo: create a function to handle adding a new task
function handleAddTask(event) {

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event) {

}


// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}


// function createTaskCard(event) {
//     // have a one piece of lego/ and then break back into one pieces/and you get your peices back
//         const stringPost = localStorage.getItem('taskinfo')
//         const taskEntires = JSON.parse(stringPost) || [];
//         console.log("check");
    
//         //you build an object with legos
//         //this the object, has three fields of the values of the form.
//         const taskinfo = {
//             taskTitleEntry: taskTitleInput.value,
//             taskDueEntry: taskDueInput.value,
//             taskDescriptionEntry: taskDescriptionInput.value,
//         }
//         if (
//             //
//             //scan the fields to see if any of them are empty
//             taskinfo.taskTitleEntry == '' || taskinfo.taskDueEntry == '' || taskinfo.taskDescriptionEntry == '') {
//             console.log(username.vlaue);
//             alert("fillin in all areas");
//             console.log("testing");
//             event.preventDefault();
//         }
    
//         else {
//             //take your lego into an array into a string and put it in the local storage
//             //an Array to hold an object that gets put into this array
//             taskEntires.push(blogEntry)
//             //Making it into a string
//             localStorage.setItem('blogEnties', JSON.stringify(taskEntires))
//             console.log("nextPage");
//         }
    
//     };


// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
//This is where we press the task buttin
$(document).ready(function () {
   let taskbutton = document.getElementById("add-task")
   console.log(taskbutton);
   console.log("here");
   taskbutton.addEventListener("click",function(){
    console.log("clicked")
    createTaskCard()
   })
   
});

function remove(button) {
    button.remove();
}


