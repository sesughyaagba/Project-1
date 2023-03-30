

const textInput = document.querySelector("#text-input");
const addButton = document.querySelector("#add-button");
const todoContainer = document.querySelector(".todo-container");

addButton.addEventListener('click', () => {
    if (textInput.value.trim().length == '') {
        alert('Input Item')
        return;
    }

    const todoItemContainer = document.createElement("div");
    todoItemContainer.classList.add("todo-item-container");
    todoContainer.appendChild(todoItemContainer);

    // Create p element and add id = todo-text
    const todoText = document.createElement('p');
    todoText.id = 'todo-text';
    todoText.innerText = textInput.value;
    todoItemContainer.appendChild(todoText);

    // add doubleclick to todoText
    todoText.addEventListener('dblclick', (e) => {
        e.target.classList.add('color-change');
        todoText.classList.add('color-change');
        editButton.setAttribute('disabled', 'disabled');

        // Get the current tasks from local storage
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        // Add the new task to the array
        tasks.push(textInput.value);
        // Save the updated tasks to local storage
        localStorage.setItem("tasks", JSON.stringify(tasks));
 
    });

    // Create button and add id = edit-button
    const editButton = document.createElement('button');
    editButton.id = 'edit-button';
    editButton.textContent = 'edit';
    todoItemContainer.appendChild(editButton);
    // add click event to edit-button
    editButton.addEventListener('click', () => {
        textInput.value = todoText.innerText;
        const parent = editButton.parentElement;
        parent.parentElement.removeChild(parent);
    });

    // Create button and add id = delete-button
    const deleteButton = document.createElement('button');
    deleteButton.id = 'delete-button';
    deleteButton.textContent = 'delete';
    todoItemContainer.appendChild(deleteButton);
    // add click event to delete button
    deleteButton.addEventListener('click', () => {
        const parent = deleteButton.parentElement;
        parent.parentElement.removeChild(parent);


    });

// get the clear button and dd event listener
    const clearButton = document.getElementById('clear-button');
    clearButton.addEventListener('click', () => {
        todoItemContainer.innerHTML = '';
    });

    // Clear the input field
    textInput.value = "";
});




