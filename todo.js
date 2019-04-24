let tasks = [];
let taskList = document.getElementById("taskList");
let taskInput = document.getElementById("task");

taskInput.addEventListener("keyup", function(e) {
  if(e.keyCode === 13) {
    e.preventDefault();
    document.getElementById("submit").click();
  }
})

function AddTask() {
  let task = document.getElementById("task").value;
  if(task != "") {
    document.getElementById("task").value = "";
    tasks.push(task);
    ShowTask();
  }
}

function ShowTask() {
  taskList.innerHTML = "";
  for(let i = 0; i < tasks.length; i++) {
    let taskDiv = document.createElement("div");
    let deleteBtn = document.createElement("button");
    taskDiv.innerHTML = tasks[i];
    taskDiv.setAttribute("id", i);
    taskDiv.setAttribute("class", "notification");
    deleteBtn.setAttribute("class", "delete");
    taskDiv.append(deleteBtn);
    deleteBtn.addEventListener("click", function() {DeleteTask(taskDiv.id)});
    taskList.append(taskDiv);
  }
}

function DeleteTask(id) {
  let taskToDelete = document.getElementById(id);
  let taskVal = taskToDelete.innerHTML;
  let taskIndex = tasks.indexOf(taskVal);
  tasks.splice(taskIndex, 1);
  ShowTask();
}