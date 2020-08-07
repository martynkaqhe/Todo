const allTasks = [];
let numerator = 1;

function todolist() {
    const allTasks = [];
    let newTaskName = document.getElementById("nowe").value;
    
    
   
    if(newTaskName == "" ) {
        document.getElementById("message").innerHTML = "Musisz wpisać zadanie!!!";
        return;
    }

    document.getElementById("message").innerHTML = "";
    allTasks.push(newTaskName);
    
    const newTaskTextNode = document.createTextNode(newTaskName);
    const newTaskElement = document.createElement("li");
    newTaskElement.appendChild(newTaskTextNode);
    document.getElementById("lista").appendChild(newTaskElement);

    document.getElementById("nowe").value = "";
}

function addTask() {
    let newTaskName = document.getElementById("nowe").value;
    if(newTaskName == "" ) {
        document.getElementById("message").innerHTML = "Musisz wpisać zadanie!!!";
        return;
    }

    let task = {
        id: numerator++,
        taskName: newTaskName
    }
}

function removeTask(taskId) {

}

function renderTasks() {
    array.forEach(allTasks => {
        
    });
}

function usun(){
    document.getElementById("lista").innerHTML = '';
    document.getElementById("usuniecie").style.display = "none";
}




