interface Task {
    id : number;
    Title: string;
    Status:string;
    StartDate: string;
    EndDate: string;
}


function AddTask(): void {

    let TaskForm:any = document.getElementById("TaskForm");
   

    
    let Title = (document.getElementById("Title") as HTMLInputElement).value;
    let Status = (document.getElementById("Status") as HTMLInputElement).value;
    let StartDate = (document.getElementById("StartDate") as HTMLInputElement).value;
    let EndDate = (document.getElementById("EndDate") as HTMLInputElement).value;


    let TaskData: Task[] = JSON.parse(localStorage.getItem("TaskData") || "[]");



    const NewTask: Task = 
        {
            id : TaskData.length > 0 ? TaskData[TaskData.length - 1].id + 1 : 1, 
            Title: Title ,
            Status:Status,
            StartDate: StartDate,
            EndDate: EndDate
        }
          
    
         TaskData.push(NewTask); 
         localStorage.setItem("TaskData", JSON.stringify(TaskData));

        alert("Product saved successfully in localStorage!");


        let TaskList :any = document.getElementById("Task-list");

        // TaskList.innerHTML += ""; 
       
            const listItem = document.createElement("li");
            listItem.textContent =  ` ${NewTask.Title} - ${NewTask.Status} - ${NewTask.StartDate} - ${NewTask.EndDate} ` ;
            TaskList.appendChild(listItem);
       
    
};
