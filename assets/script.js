function addTask() {
    const taskInput = document.getElementById("new-task");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("task-list");
        const newTask = document.createElement("li");
        newTask.innerHTML = `<input type="checkbox"> ${taskText}`;
        taskList.appendChild(newTask);
        taskInput.value = "";
    } else {
        alert("Por favor, insira uma tarefa.");
    }
}

function removeTask() {
    const taskIndex = parseInt(document.getElementById("remove-task-input").value) - 1;
    const tasks = document.querySelectorAll("#task-list li");

    if (taskIndex >= 0 && taskIndex < tasks.length) {
        tasks[taskIndex].remove();
        document.getElementById("remove-task-input").value = "";
        document.querySelectorAll("#task-list li").forEach((task, index) => {
            task.dataset.index = index + 1;
        });
    } else {
        alert("Número de tarefa inválido!");
    }
}

function editTask() {
    const taskIndex = parseInt(document.getElementById("edit-task-input").value) - 1;
    const tasks = document.querySelectorAll("#task-list li");

    if (taskIndex >= 0 && taskIndex < tasks.length) {
        const newText = prompt("Digite o novo texto para a tarefa:");
        if (newText && newText.trim() !== "") {
            const checkbox = tasks[taskIndex].querySelector('input[type="checkbox"]');
            const isChecked = checkbox.checked;
            tasks[taskIndex].innerHTML = `<input type="checkbox"> ${newText.trim()}`;
            tasks[taskIndex].querySelector('input[type="checkbox"]').checked = isChecked;
            if (isChecked) {
                tasks[taskIndex].style.textDecoration = 'line-through';
            }
            document.getElementById("edit-task-input").value = "";
        }
    } else {
        alert("Número de tarefa inválido!");
    }
}

function underlineTask(event) {
    const target = event.target;
    if (target.type === 'checkbox') {
        const li = target.parentElement;
        if (target.checked) {
            li.style.textDecoration = 'line-through';
        } else {
            li.style.textDecoration = 'none';
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("add-task").addEventListener("click", addTask);
    document.getElementById("remove-task").addEventListener("click", removeTask);
    document.getElementById("edit-task").addEventListener("click", editTask);

    document.getElementById("new-task").addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            addTask();
        }
    });
});

underlineTask === 'true';
if (underlineTask === 'true') {
    alert("Parabéns por completar a tarefa!");
}