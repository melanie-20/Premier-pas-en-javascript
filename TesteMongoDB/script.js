// script.js
document.addEventListener("DOMContentLoaded", function () {
    const taskList = document.getElementById("task-list");
    const taskInput = document.getElementById("task-input");
    const addTaskButton = document.getElementById("add-task");

    // Fonction pour ajouter une tâche à la liste
    function addTask() {
        const taskText = taskInput.value;
        if (taskText) {
            const taskItem = document.createElement("li");
            taskItem.innerText = taskText;
            taskList.appendChild(taskItem);
            taskInput.value = "";

            // Envoyer la tâche au serveur (backend) pour l'enregistrement dans MongoDB
            fetch("/api/tasks", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ text: taskText }),
            });
        }
    }

    addTaskButton.addEventListener("click", addTask);
});
