"use strict";
let taskInput=document.querySelector("#input");
let addBtn=document.querySelector("#button");
let tasksContainer=document.querySelector("#container");
let tasks=[];
let editId=null;
function getTasksFromStorage(){
    let stored=localStorage.getItem("task");
    if(stored){
        tasks=JSON.parse(stored);
    }
    else{
        tasks=[];
    }
}
function generate(){
    return Date.now();
}
function createTask(taskText){
    let newTask={id:generate(),text:taskText,completed:false};
    tasks.push(newTask);
    saveTasksToStorage();
    displayTasks();
}
function displayTasks(){
    if(tasks.length===0){
    tasksContainer.innerHTML=`
    <p class="text-center">No task</p>`;
    return;
}
tasksContainer.innerHTML="";
for (const task of tasks) {
  tasksContainer.innerHTML += `
  <div class="task">
    <span
      class="task-text
      ${task.completed ? "completed" : ""}
      onclick="toggleTask(${task.id})"
    >
      ${task.text}
    </span>
    <div class="task-actions">
      <button
        class="edit-btn"
        onclick="editTask(${task.id})"
      >edit
      </button>
      <button class="delete-btn" onclick="deleteTask(${task.id})">
      delete
      </button>
      </div>
      </div>`;}}
    
    function deleteTask(id) {

  tasks =tasks.filter(function (task) {return task.id !== id;});
  saveTasksToStorage();
  displayTasks();
  }

  function editTask(id) {
  const task =tasks.find(function (task) {
  return task.id === id;
  }
  );
  if (!task) {
  return;}
  taskInput.value=task.text;
  editId=id;
  addBtn.textContent="update";}

function updateTask(id, newText) {
  const task =tasks.find(function (task) {
        return task.id === id;
      }
    );
  if (!task) {
    return;
  }
  task.text =newText;
  saveTasksToStorage();
  displayTasks();
  editId = null;
  addBtn.textContent ="Add";
}

function toggleTask(id) {
  const task =tasks.find(function (task) {
        return task.id === id;
      }
    );

  if (!task) {
    return;
  }

  task.completed =!task.completed;
  saveTasksToStorage();
  displayTasks();
}

addBtn.addEventListener("click",function () {
    const taskText =
  taskInput.value.trim();
if (taskText === "") {
  alert("Please enter a task.");
  return;
}
if (editId !== null) {updateTask(editId,taskText);
}
else {
  createTask(taskText);
}
taskInput.value = "";
}
);
taskInput.addEventListener(
"keydown",
function (event) {
if (event.key === "Enter") {
addBtn.click();}});
function saveTasksToStorage(){
    localStorage.setItem("task",JSON.stringify(tasks));
}
function init(){
    getTasksFromStorage();
    displayTasks();}

init();