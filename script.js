const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !=="") {
        const li = document.createElement("li");
        li.innerHTML = (
            <>
        {taskText}
        <button onClick="completeTask(this)">Concluir</button>
        <button onClick="removeTask(this)">Remover</button>
        </>
        );
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

function completeTask(button) {
    const li = button.parentElement;
    li.style.textDecoration = "line-through";
    button.style.display = "none";
}

function removeTask(button) {
    const li = button.parentElement;
    li.remove();
}