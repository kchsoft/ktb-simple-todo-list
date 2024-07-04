const todoInputButton = document.querySelector(".todo-input-button")
const todoInputContent = document.querySelector(".todo-input-content")

const todoListContents = document.querySelector(".todo-list-contents")


todoInputButton.addEventListener("click",function(){
  const todoInputValue = todoInputContent.value

  const newToDoListContent = document.createElement("div")
  newToDoListContent.classList.add("todo-list-content")

  const newToDoListValue = document.createElement("li")
  newToDoListValue.classList.add("todo-list-value")
  newToDoListValue.textContent = todoInputValue

  const newToDoListCompleteBtn = document.createElement("button")
  newToDoListCompleteBtn.textContent = "완료"
  newToDoListCompleteBtn.classList.add("todo-list-complete-btn")

  const newTodoListRemoveBtn = document.createElement("button")
  newTodoListRemoveBtn.textContent = "삭제"
  newTodoListRemoveBtn.classList.add("todo-list-remove-btn")

  todoListContents.appendChild(newToDoListContent)
  newToDoListContent.appendChild(newToDoListValue)
  newToDoListContent.appendChild(newToDoListCompleteBtn)
  newToDoListContent.appendChild(newTodoListRemoveBtn)

})