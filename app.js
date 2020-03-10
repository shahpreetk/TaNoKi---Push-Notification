const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

loadEventListeners();

function loadEventListeners() {
    document.addEventListener('DOMContentLoaded', getTasks);
    form.addEventListener('submit', addTask);
    taskList.addEventListener('click', removeTask);
    clearBtn.addEventListener('click', clearTasks);
    filter.addEventListener('keyup', filterTasks);
}

function getTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function (task) {
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.prepend(document.createTextNode(task));
        const link = document.createElement('a');
        link.className = 'delete-item secondary-content';
        link.innerHTML = '<i class = "fa fa-remove"></i>';
        li.prepend(link);

        taskList.prepend(li);
    });
}

function addTask(e) {

    const li = document.createElement('li');
    li.className = 'collection-item';
    li.prepend(document.createTextNode(taskInput.value));
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class = "fa fa-remove"></i>';
    li.prepend(link);

    taskList.prepend(li);

    // storeTaskInLocalStorage(taskInput.value);

    taskInput.value = '';




    e.preventDefault();
}

// function storeTaskInLocalStorage(task) {
//     let tasks;
//     if (localStorage.getItem('tasks') === null) {
//         tasks = [];
//     } else {
//         tasks = JSON.parse(localStorage.getItem('tasks'));
//     }

//     tasks.push(task);
//     localStorage.setItem('tasks', JSON.stringify(tasks));
// }

function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are you sure?')) {
            e.target.parentElement.parentElement.remove();

            // removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
}

// function removeTaskFromLocalStorage(taskItem) {
//     let tasks;
//     if (localStorage.getItem('tasks') === null) {
//         tasks = [];
//     } else {
//         tasks = JSON.parse(localStorage.getItem('tasks'));
//     }

//     tasks.forEach(function (task, index) {
//         if (taskItem.textContent === task) {
//             tasks.splice(index, 1);
//         }
//     });

//     localStorage.setItem('tasks', JSON.stringify(tasks));
// }

function clearTasks() {
    // taskList.innerHTML = '';
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

    // clearTasksFromLocalStorage();
}

// function clearTasksFromLocalStorage() {
//     localStorage.clear();
// }

function filterTasks(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function (task) {
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
}



// COMPLETED TASKS
$('ul').on('click', 'li', function () {
    $(this).toggleClass("completed");
    something = $('ul').find('li.completed').appendTo('ul');
    localStorage.setItem('please_work', something);
    //  if (localStorage.getItem(please_work) != null){
    //     document.getElementsByClassName('li.collection-item.completed').setAttribute('input','checked');
    //  }
    //     if("please_work" in localStorage){
    //         alert('yes');
    // } else {
    //    alert('no');

});