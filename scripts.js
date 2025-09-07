

//function prompts and accepts values for title, description and status of new tasks
function tasks(){
  const initialTasks = [
    {
      id: 1,
      title: "Launch Epic Career",
      description: "Create a killer Resume",
      status: "todo",
    },
    {
      id: 2,
      title: "Master JavaScript",
      description: "Get comfortable with the fundamentals",
      status: "doing",
    },
    {
      id: 3,
      title: "Contribute to Open Source Projects",
      description:
        "Gain practical experience and collaborate with others in the software development community",
      status: "done",
    },
  ];
  
  const allTasks = [...initialTasks];

  //loop will continue to request new task until empty space is entered for new title task
  for(let i = 1; i <= 3; i++){

    //accepts user input for variables
    taskTitle = prompt("Enter the task title.");
    taskDescription = prompt("Enter the description of the task.");
    taskStatus = prompt("Enter the status of the task.");
    taskID = allTasks.length + 1;
    taskStatus.toLowerCase();

    //loop will continue as long status is not equal to todo doing or done
    while(taskStatus != "todo" && taskStatus != "doing" && taskStatus != "done"){
        taskStatus = prompt("Enter a valid status i.e 'todo', 'doing', 'done'")
    }

    //Assing variables to new object in array
    const newTask = {id: allTasks.length + 1, title: taskTitle, description: taskDescription, status: taskStatus};
    allTasks.push(newTask);
    }
    const doneTasks = allTasks.filter(allTasks => allTasks.status === "done");
    console.log("All tasks: ", allTasks);
    console.log("Completed tasks: ", doneTasks);


}
