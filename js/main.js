// Variables
let input = document.querySelector(".task-input input");
let addBtn = document.querySelector(".task-input .add-btn");
let tasksContainer = document.querySelector(".tasks-con");
let tasksCount = document.querySelector(".tasks-count span");
let completedCount = document.querySelector(".completed-count span");

window.onload = function () {
  input.focus();
};

addBtn.onclick = function () {
  if (input.value === "") {
    Swal.fire({
      text: "Oops!You Entered Empty Task",
      confirmButtonColor: "#2ba0df",
    });
  } else {
    if (+tasksCount.textContent == 0) {
      tasksContainer.removeChild(document.querySelector(".no-tasks"));
    }
    let taskBox = document.createElement("div");
    taskBox.classList.add("task-box");
    tasksContainer.appendChild(taskBox);

    let text = document.createElement("div");
    text.classList.add("text");
    text.textContent = input.value;
    taskBox.appendChild(text);

    let deleteBtn = document.createElement("div");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "Delete";
    taskBox.appendChild(deleteBtn);
    tasksCount.textContent = +tasksCount.textContent + 1;

    deleteBtn.addEventListener("click", function (e) {
      e.target.parentNode.classList.add("slide-fade");
      e.target.parentNode.onanimationend = function () {
        tasksContainer.removeChild(e.target.parentNode);
        tasksCount.textContent = +tasksCount.textContent - 1;
        if (+tasksCount.textContent == 0) {
          let noTask = document.createElement("div");
          noTask.classList.add("no-tasks");
          noTask.textContent = "No Tasks";
          tasksContainer.append(noTask);
        }
        input.focus();
      };
    });
    input.focus();
  }
};
