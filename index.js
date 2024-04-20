
const inputBox = document.getElementById("inputBox");
const taskListContainer = document.getElementById("taskListContainer");


function addNewTask(){
    if (inputBox.value === '') {
        inputBox.placeholder = "Please add a task."
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        taskListContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData()
}

taskListContainer.addEventListener("click", function(e){
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");
        saveData()
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem();
}
showTask();