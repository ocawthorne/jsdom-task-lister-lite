document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("create-task-form").addEventListener("submit", createNewTask);
});

const createNewTask = event => {
  event.preventDefault();
  const newTask = document.createElement("li");
  newTask.innerText = document.getElementById("new-task-description").value;

  appendNewTask(newTask);
  event.target.reset();
};

const appendNewTask = task => {
  document.getElementById("tasks").appendChild(task);
};
