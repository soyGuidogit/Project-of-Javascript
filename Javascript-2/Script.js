

const inpuBox = document.getElementById("inputbox");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inpuBox.value === '') {
        alert("Must write something!")
    }else{
        let li = document.createElement("li");
        li.innerHTML = inpuBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inpuBox.value = '';
    SaveData()
}

listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); 
        SaveData()
    }else if ( e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
},false)

// ⚡ **Opcional: Añadir tarea con Enter**
inpuBox.addEventListener("keyup", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});


function SaveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();



//  Codigo 2 de TO-Do-List


// const inputBox = document.getElementById("inputbox"); // Corregí el typo "inpuBox" → "inputBox"
// const listContainer = document.getElementById("list-container");

// function addTask() { // Cambié "addtask" → "addTask" (mejor práctica)
//     if (inputBox.value.trim() === '') {
//         alert("Must write something!");
//         return; // Evita agregar tareas vacías
//     }

//     let li = document.createElement("li");
//     li.innerHTML = inputBox.value;
//     listContainer.appendChild(li);
    
//     let span = document.createElement("span");
//     span.innerHTML = "×"; // Icono de cerrar
//     li.appendChild(span);

//     inputBox.value = ''; // Limpia el input
//     inputBox.focus(); // Enfoca el input para seguir escribiendo
//     SaveData();
// }

// // Evento de clic (original tuyo, pero corregí "ClassList" → "classList")
// listContainer.addEventListener("click", function(e) {
//     if (e.target.tagName === "LI") {
//         e.target.classList.toggle("checked"); // Corregí el typo "ClassList"
//         SaveData();
//     } else if (e.target.tagName === "SPAN") {
//         e.target.parentElement.remove();
//         SaveData();
//     }
// }, false);


// // ⚡ **Opcional: Añadir tarea con Enter**
// inputBox.addEventListener("keyup", function(e) {
//     if (e.key === "Enter") {
//         addTask();
//     }
// });

// function SaveData() {
//     localStorage.setItem("data", listContainer.innerHTML);
// }
// function showTask(){
//     listContainer.innerHTML = localStorage.getItem("data");
// }
// showTask();