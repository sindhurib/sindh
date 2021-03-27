
            $("#addTaskBtn").click(function addTask(){
    newTask = $("#newTask").val();
    if(newTask == ""){
        alert("Enter task details");
    }
    else{
        oldTasks = $("#tasks").html();
        newTasks = oldTasks + "<br>" + newTask;
    
        $("#newTask").val("");
        $("#tasks").html(newTasks);
    }
});
        