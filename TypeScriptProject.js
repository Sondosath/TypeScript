function AddTask() {
    var TaskForm = document.getElementById("TaskForm");
    var Title = document.getElementById("Title").value;
    var Status = document.getElementById("Status").value;
    var StartDate = document.getElementById("StartDate").value;
    var EndDate = document.getElementById("EndDate").value;
    var TaskData = JSON.parse(localStorage.getItem("TaskData") || "[]");
    var NewTask = {
        id: TaskData.length > 0 ? TaskData[TaskData.length - 1].id + 1 : 1,
        Title: Title,
        Status: Status,
        StartDate: StartDate,
        EndDate: EndDate
    };
    TaskData.push(NewTask);
    localStorage.setItem("TaskData", JSON.stringify(TaskData));
    alert("Product saved successfully in localStorage!");
    var TaskList = document.getElementById("Task-list");
    // TaskList.innerHTML += ""; 
    var listItem = document.createElement("li");
    listItem.textContent = " ".concat(NewTask.Title, " - ").concat(NewTask.Status, " - ").concat(NewTask.StartDate, " - ").concat(NewTask.EndDate, " ");
    TaskList.appendChild(listItem);
}
;
