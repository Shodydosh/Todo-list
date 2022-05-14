// SELECTORS

const todoInput = document.querySelector(".new-task-input");
const todoSubmit = document.querySelector(".submitButton");
const todoList = document.querySelector(".task-list");

// Event listeners

todoSubmit.addEventListener('click', addNewTask);

// Functions

function addNewTask(event){
    event.preventDefault();
    // Todo div

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    
    // create LI
    const newTodo = document.createElement("div");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    const buttons = document.createElement("div");
    buttons.classList.add("interactButtons");

    // check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fa fa-check"></i>';
    completedButton.classList.add("complete-btn");
    buttons.appendChild(completedButton);
    // check edit button
    const editButton = document.createElement('button');
    editButton.innerHTML = '<i class="fa fa-pen"></i>';
    editButton.classList.add("edit-btn");
    buttons.appendChild(editButton);
    // check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fa fa-xmark"></i>';
    trashButton.classList.add("delete-btn");
    buttons.appendChild(trashButton);

    todoDiv.appendChild(buttons);
    // append to list 
    todoList.appendChild(todoDiv);
}