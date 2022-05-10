// SELECTORS

const todoInput = document.querySelector(".new-task-input");
const todoSubmit = document.querySelector("submitButton");
const todoList = document.querySelector(".task-list");

// Event listeners

submitButton.addEventListener('click', addNewTask);

// Functions

function addNewTask(event){
    event.preventDefault();
    // Todo div

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    
    // create LI
    const newTodo = document.createElement("li");
    newTodo.innerText = 'hey';
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // check mark button
    const completedButton = document.createElement('button');
    completedButton.innerText = '<i class="fa fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    // check edit button
    const editButton = document.createElement('button');
    editButton.innerText = '<i class="fa fa-pen"></i></i>';
    editButton.classList.add("edit-btn");
    todoDiv.appendChild(editButton);
    // check trash button
    const trashButton = document.createElement('button');
    trashButton.innerText = '<i class="fa fa-xmark"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    // append to list 
    todoList.appendChild(todoDiv);
}