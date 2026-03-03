document.getElementById("myBtn")?.addEventListener("click", () => {
    document.getElementById("my-offeringa").toggleAttribute("hidden");
})

document.getElementById("taskBtn")?.addEventListener("click", () =>{
    let task = document.getElementById("task");
    let tasklist = document.getElementById("taskList");
    if(task.ariaValueMax.trim()!= ""){
        const newTask = document.createElement("li");
        newTask.textContent = task.values;
        tasklist.appendChild(newTask);
        task.value = "";
    }
})