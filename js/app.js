
//Select elements

const inputValue=document.getElementById('task');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');
const clearButton=document.getElementById('clearTasks')

//save  local starage

let tasks=JSON.parse(localStorage.getItem('tasks'))||[];

//render tasks which saved storage
function renderTasks(){
    taskList.innerHTML = '';
    tasks.forEach((task,index)=>{
        const li=document.createElement('li');
        li.innerHTML=`<span>${task}</span>
            <button onclick="deleteTask(${index})" style="background-color: #dc3545;color:#ffffff;padding:5px;border-radius: 5px;border-style: none">Delete</button>`
        taskList.appendChild(li)
    })

}


//add function

function addNewTask(){
    const taskText = inputValue.value.trim();

    if (taskText.length) {
        tasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        taskText.value = '';
        renderTasks();
    }

}
//delete task
function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    tasks = updatedTasks;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

//clear all task

function clearTasks() {
    if (tasks.length && confirm('Are you sure you want to clear all tasks?')) {
        localStorage.removeItem('tasks');
        tasks.length = 0;
        renderTasks();
    }
}

addTaskButton.addEventListener('click',addNewTask);
clearButton.addEventListener('click',clearTasks);

renderTasks()

