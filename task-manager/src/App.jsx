import { useEffect, useState } from "react";
import TaskAdder from "./components/TaskAdder";
import Tasks from "./components/Tasks";
import {v4} from "uuid";

function App() {
    const [tasks, setTasks] = useState(
        JSON.parse(localStorage.getItem("tasks")) || []
    );
    
    function changeTaskCompletionOnId(taskId) {
        const newTasks = tasks.map(task => {
            if (task.id == taskId) {
                return {...task, isCompleted: !task.isCompleted};
            } else {
                return task;
            }
        })

        setTasks(newTasks);
    }

    function deleteTaskOnId(taskId) {
        const newTasks = tasks.filter(task => task.id != taskId)

        setTasks(newTasks);
    }

    function addTask(taskTitle, taskDescription) {
        const newTask = {
            id: v4(),
            title: taskTitle,
            description: taskDescription,
            isCompleted: false
        };
        console.log(newTask.id);
        
        setTasks([...tasks, newTask]);
    }

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
        console.log(`changed tasks, new tasks: ${JSON.stringify(tasks)}`);
    }, [tasks])

    return (
        <div className="w-screen min-h-screen bg-aqua-green flex justify-center p-6">
            <div className="w-[500px]">
                <h1 className="text-3xl text-white font-bold text-center">Task Manager</h1>
                <TaskAdder addTask={addTask}/>
                
                {tasks.length ? 
                    <Tasks
                        tasks={tasks}
                        changeTaskCompletionOnId={changeTaskCompletionOnId}
                        deleteTaskOnId={deleteTaskOnId}
                    />
                : ""}
            </div>
        </div>
    )
}

export default App;