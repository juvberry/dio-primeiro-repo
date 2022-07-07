const Form = document.getElementById('add-tasks')
let newTask = document.getElementById('task')
let btnAdd = document.getElementById('btnAdd')
let list = document.getElementById('list-id')
let listArr = list.getElementsByClassName('item-list')
let arr = JSON.parse(localStorage.getItem("tasks"));

btnAdd.addEventListener("click", addTask)

function addTask(){
    let newTaskValue = newTask.value
    let a = getTasks(newTaskValue)
    if(a.length === 0){
        arr.push(newTaskValue)
    }
    
    localStorage.setItem('tasks', JSON.stringify(arr))
}

function getTasks(newTaskValue){
    let newTaskArr = [];
    if(arr && arr.length > 0){
        newTaskArr = arr.filter(a => {
            return a.toLowerCase() == newTaskValue.toLowerCase()
        })
    }
    return newTaskArr
}

function fillList(){
    
}