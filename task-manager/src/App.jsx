import { useState } from "react";
import TaskAdder from "./components/TaskAdder";
import Tasks from "./components/Tasks";

function App() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: "Study Programming",
            description: "Learn react and start a small project",
            isCompleted: false
        },
        {
            id: 2,
            title: "Do exercises",
            description: "Make codeforces exercises for the contests",
            isCompleted: false
        },
        {
            id: 3,
            title: "Organize Linkedin",
            description: "Organize linkedin's about, skills, publications, etc",
            isCompleted: false
        }
    ])
    
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

    return (
        <div className="w-screen h-screen bg-aqua-green flex justify-center p-6">
            <div className="w-[500px]">
                <h1 className="text-3xl text-white font-bold text-center">Task Manager</h1>
                <TaskAdder/>
                <Tasks 
                    tasks={tasks}
                    changeTaskCompletionOnId={changeTaskCompletionOnId}
                    deleteTaskOnId={deleteTaskOnId}
                />
            </div>
        </div>
    )
}

export default App;