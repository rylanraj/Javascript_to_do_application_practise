/*
This assignment was done together by Ahmed, Rylan and Alvin
*/

const taskData = [
    {
        title: "First task",
        description: "Just an example task. The description contains text.",
        dueDate: "2024-01-01",
    },
    {
        title: "Task (overdue)",
        description: "This task is overdue (due in the past)",
        dueDate: "2023-11-10",
        completed: false
    },
    {
        title: "Another task (completed)",
        description: "This task has the property completed: true",
        dueDate: "2023-10-10",
        completed: true,
    },
    {
        title: "Another completed task",
        description: "This task is completed but the due date was before the other one",
        dueDate: "2023-06-01",
        completed: true
    }
]

function load_data(starting_data) {
    for (let i = 0; i < starting_data.length; i++) {
        if (starting_data[i].completed === false) {
        task_list.innerHTML += `
          
                <li>
                <input type="checkbox">
                <label > ${starting_data[i].title}</label>
            <p>${starting_data[i].description}</p>
            <p>Due: ${starting_data[i].dueDate}</p>
            <p class="task_actions"><button class="edit_task">Edit</button><button class="delete_task">Delete</button></p>
        </li>
        `
            }
        else {
            task_list.innerHTML += `
          
                <li>
                <input type="checkbox" checked>
                <label > ${starting_data[i].title}</label>
            <p>${starting_data[i].description}</p>
            <p>Due: ${starting_data[i].dueDate}</p>
            <p class="task_actions"><button class="edit_task">Edit</button><button class="delete_task">Delete</button></p>
        </li>
            `
        }

    }

}

//Variables we will need later
let new_task_title = "";
let new_task_description = "";
let new_task_due_date = "";



// Get References for HTML IDs
let modal_wrapper = document.getElementById("modal_wrapper");

let modal_contents = document.getElementById("modal_contents");

let close_modal = document.getElementById("close_modal");

let create_task = document.getElementById("create_task");

let task_list = document.getElementById("task_list");

let save_task = document.getElementById("save_task");

document.addEventListener("DOMContentLoaded", function() {

    //Function to Load Data
    load_data(taskData);

    create_task.addEventListener("click", function () {
        modal_wrapper.style.display = "block";
        //We have to finish what the create task box does when the user adds stuff at some point in the future


    });

    close_modal.addEventListener("click", function(){

        modal_wrapper.style.display = "none";

    });

    modal_wrapper.addEventListener("click", function(event) {
        if (event.target === modal_wrapper) {
            modal_wrapper.style.display = "none";
        }
    });


    modal_contents.addEventListener("submit", function(event) {
        event.preventDefault();

        new_task_title = document.getElementById("new_task_title").value;
        new_task_description = document.getElementById("new_task_description").value;
        new_task_due_date =  document.getElementById("new_task_due_date").value;

        // Append the list item to the list

        //let temp_list_start = task_list.createElement("li");
        //task_list.innerHTML += `<h1> ${new_task_title} </h1>`;
        //temp_list_start.appendChild(new_task_title);
        task_list.innerHTML += `
           
                <li>
                <input type="checkbox">
                <label > ${new_task_title}</label>
            <p>${new_task_description}</p>
            <p>Due: ${new_task_due_date}</p>
            <p class="task_actions"><button class="edit_task">Edit</button><button class="delete_task">Delete</button></p>
    
        `

        modal_wrapper.style.display = "None";

    });


});


document.addEventListener("DOMContentLoaded", function() {
    const taskList = document.getElementById("task_list");

    // Event delegation for handling "delete" button clicks
    taskList.addEventListener("click", function(event) {
        const target = event.target;

        // Check if the clicked element is a "delete" button
        if (target.classList.contains("delete_task")) {
            // Get the parent li element (task) and remove it
            const taskItem = target.closest("li");
            if (taskItem) {
                taskItem.remove();
            }
        }
    });
    taskList.addEventListener("click", function(event) {
        const target = event.target;

        // Check if the clicked element is a "edit" button
        if (target.classList.contains("edit_task")){
            // If it is, open up a model to edit its corresponding task

            modal_wrapper.style.display = "block";

            save_task.addEventListener("click", function() {
                const taskItem = target.closest("li");
                if (taskItem) {
                    taskItem.remove();
                }
            
            })
        }
    });
});


