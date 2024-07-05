"use strict";

var todoInputButton = document.querySelector(".todo-input-btn");
var todoInputContent = document.querySelector(".todo-input-content");
var todoListContents = document.querySelector(".todo-list-contents");
var toDoListKey = "toDoList";
todoInputButton.addEventListener("click", addToDo);
todoInputContent.addEventListener("keydown", function (event) {
  if (event.key === 'Enter') {
    addToDo();
  }
});
showAllToDo();
function showAllToDo() {
  toDoList = JSON.parse(localStorage.getItem(toDoListKey));
  if (toDoList === null) toDoList = [];
  for (i = 0; i < toDoList.length; i++) {
    showOneToDo(toDoList[i]);
  }
}
function showOneToDo(todoValue) {
  if (todoValue === null || todoValue === "") return;
  var newToDoListContent = document.createElement("div");
  newToDoListContent.classList.add("todo-list-content");
  var newToDoListValue = document.createElement("span");
  newToDoListValue.classList.add("todo-list-value");
  newToDoListValue.textContent = todoValue;
  var newToDoListCompleteBox = document.createElement("input");
  newToDoListCompleteBox.type = "checkbox";
  newToDoListCompleteBox.classList.add("todo-list-complete-box");
  newToDoListCompleteBox.addEventListener("change", checkComplete);
  var newTodoListRemoveBtn = document.createElement("button");
  newTodoListRemoveBtn.textContent = "삭제";
  newTodoListRemoveBtn.classList.add("todo-list-remove-btn");
  newTodoListRemoveBtn.addEventListener("click", removeToDo);
  todoListContents.appendChild(newToDoListContent);
  newToDoListContent.appendChild(newToDoListCompleteBox);
  newToDoListContent.appendChild(newToDoListValue);
  newToDoListContent.appendChild(newTodoListRemoveBtn);
  todoInputContent.value = "";
}
function addToDo() {
  var todoInputValue = todoInputContent.value;
  if (todoInputValue == "") return;
  if (checkDuplicateToDo(todoInputValue)) {
    alert("중복된 ToDo가 있습니다.");
    return;
  }
  toDoList.push(todoInputValue);
  localStorage.setItem(toDoListKey, JSON.stringify(toDoList));
  showOneToDo(todoInputValue);
}
function checkDuplicateToDo(newToDo) {
  for (i = 0; i < toDoList.length; i++) {
    if (toDoList[i] === newToDo) return true;
  }
  return false;
}
function checkComplete(event) {
  var box = event.target;
  var parent = box.closest(".todo-list-content");
  if (parent == null) return;
  var todoValue = parent.querySelector(".todo-list-value");
  if (box.checked) {
    todoValue.classList.add("line-through");
  } else if (!box.checked) {
    todoValue.classList.remove("line-through");
  }
}
function removeToDo(event) {
  var btn = event.target;
  var parent = btn.closest(".todo-list-content");
  var toDoValue = parent.querySelector(".todo-list-value");
  toDoList = toDoList.filter(function (item) { // ES5 does not support arrow function(=>)
    return item !== toDoValue.textContent;
  });
  localStorage.setItem(toDoListKey, JSON.stringify(toDoList));
  parent.remove();
}
