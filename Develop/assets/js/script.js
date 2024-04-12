// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
let nextId = JSON.parse(localStorage.getItem("nextId"));
submitPress = document.getElementById("submit");
taskTitleInput = document.getElementById('taskTitle');
taskDueInput = document.getElementById('taskDueDate');
taskDescriptionInput = document.getElementById('taskDescription')
// Todo: create a function to generate a unique task id
function generateTaskId() {
    return `task-${Date.now()}`
}



// Todo: create a function to create a task card
// make a fake card to put up
// it saved the all current tasks
function createTaskCard(task) {
    console.log(task);
    const taskArray = []
    task.forEach(taskitem => {
        const today = dayjs()
        const currenttask = dayjs(task.date)
        let dateclassitem = ""
        if (currenttask.isSame(today, "day")) {
            dateclassitem = "worring"

        } else if (currenttask.isBefore(today)) {
            dateclassitem = "late"
        }
        const taskCard = `
        <div class = "task-card ${dateclassitem}" id = ${task.id}>
        <h3>${taskitem.title} </h3>
        <p>${taskitem.date}</p>
        <p>${taskitem.description}</p>
        </div>
    `;
        const taskEl = $(taskCard)
        taskArray.push(taskEl)
    });

    return taskArray
}
//it render the task list
function renderTaskList() {
    $("#todo-cards").empty()
    $("#in-progress-cards").empty()
    $("#done-cards").empty()

    const taskdata = JSON.parse(localStorage.getItem("tasks")) || [];

    //grabbing each card and saving them
    taskdata.forEach(task => {
        const taskCard = createTaskCard([task])[0]
        switch (task.lane) {
            case "to-do":
                $("#todo-cards").append(taskCard)
                break;
            case "in-progress":
                $("#in-progress-cards").append(taskCard)
                break;
            case "done":
                $("#done-cards").append(taskCard)
                break;
        }
    })

     //drags the card
     $('.task-card').draggable({
        revert: 'invalid',
        containment: 'document',
        // Clone the element being dragged
    });
    console.log("drag")
}


// Todo: create a function to render the task list and make cards draggable
$(function draggable() {
    $("#dummy-card").draggable();
});
// Todo: create a function to handle adding a new task
function handleAddTask(event) {
    const taskTitle = $("#Task-Title").val()
    const taskDueDate = $("#Task-Due-Date").val()
    const taskDescription = $("#Task-Description").val()
    const taskLane = "to-do"
    const newtask = {
        id: generateTaskId(),
        title: taskTitle,
        date: taskDueDate,
        description: taskDescription,
        lane: taskLane
    }
    taskList.push(newtask)
    localStorage.setItem("tasks", JSON.stringify(taskList))
    createTaskCard(taskList)
    renderTaskList()
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event) {
    //when I click the button it removes the card
    function remove(button) {
        button.remove();
    }
}



// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
//This is where we press the task buttin
$(document).ready(function () {
    let taskbutton = $("#add-task")
    console.log(taskbutton);
    console.log("here");
    taskbutton.on("click", function (event) {
        event.preventDefault()
        console.log("clicked")
        handleAddTask()
    })

    // Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

    //drags the card
    $('.task-card').draggable({
        revert: 'invalid',
        containment: 'document',
        // Clone the element being dragged
    });
    console.log("drag")

   

};

 // Droppable configuration
 $('.lane').droppable({
    accept: '.task-card',
    drop: handleDrop
});
console.log("drop")

});


