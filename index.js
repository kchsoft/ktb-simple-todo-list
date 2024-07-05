const todoInputButton = document.querySelector(".todo-input-btn")
const todoInputContent = document.querySelector(".todo-input-content")

const todoListContents = document.querySelector(".todo-list-contents")
const toDoListKey = "toDoList"

todoInputButton.addEventListener("click",addToDo)
todoInputContent.addEventListener("keydown",function(event){
  if(event.key === 'Enter'){
    addToDo()
  }
})

showAllToDo()

function showAllToDo(){
  toDoList = JSON.parse(localStorage.getItem(toDoListKey))
  if(toDoList === null) toDoList = []
  for(i = 0; i < toDoList.length; i++){
    showOneToDo(toDoList[i])
  }
}


function showOneToDo(todoValue){
  if(todoValue === null || todoValue === "") return;
  const newToDoListContent = document.createElement("div")
  newToDoListContent.classList.add("todo-list-content")

  const newToDoListValue = document.createElement("span")
  newToDoListValue.classList.add("todo-list-value")
  newToDoListValue.textContent = todoValue

  const newToDoListCompleteBox = document.createElement("input")
  newToDoListCompleteBox.type = "checkbox"
  newToDoListCompleteBox.classList.add("todo-list-complete-box")
  newToDoListCompleteBox.addEventListener("change",checkComplete)

  const newTodoListRemoveBtn = document.createElement("button")
  newTodoListRemoveBtn.textContent = "삭제"
  newTodoListRemoveBtn.classList.add("todo-list-remove-btn")
  newTodoListRemoveBtn.addEventListener("click",removeToDo)

  todoListContents.appendChild(newToDoListContent)
  newToDoListContent.appendChild(newToDoListCompleteBox)
  newToDoListContent.appendChild(newToDoListValue)
  newToDoListContent.appendChild(newTodoListRemoveBtn)
  todoInputContent.value = ""

}



function addToDo(){
  const todoInputValue = todoInputContent.value
  if(todoInputValue == "") return

  if(checkDuplicateToDo(todoInputValue)){
    alert("중복된 ToDo가 있습니다.")
    return;
  }  
  toDoList.push(todoInputValue)
  localStorage.setItem(toDoListKey,JSON.stringify(toDoList))
  showOneToDo(todoInputValue)
}

function checkDuplicateToDo(newToDo){
  for( i = 0 ; i < toDoList.length;i++){
    if(toDoList[i] === newToDo) return true
  }
  return false
}

function checkComplete(event){
  const box = event.target  
  const parent = box.closest(".todo-list-content")
  if(parent == null) return
  const todoValue = parent.querySelector(".todo-list-value")

  if(box.checked){
    todoValue.classList.add("line-through")
  } else if(!box.checked){
    todoValue.classList.remove("line-through")
  }
}

function removeToDo(event){
  const btn = event.target
  const parent = btn.closest(".todo-list-content")
  const toDoValue = parent.querySelector(".todo-list-value")
  toDoList = toDoList.filter((item) => item !== toDoValue.textContent)
  localStorage.setItem(toDoListKey,JSON.stringify(toDoList))
  parent.remove()
}
