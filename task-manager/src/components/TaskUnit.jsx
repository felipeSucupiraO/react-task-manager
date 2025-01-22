import { Trash2, MoveRight, Check } from "lucide-react"
import { useNavigate } from "react-router"

function TaskUnit(props) {
    const task = props.task;

    const navigate = useNavigate();

    function navigateToTaskDescription() {
        navigate(`/task-details/${task.title}/${task.description}`)
    }

    return (
        <li key={task.id} className="flex flex-row gap-2">
            <button
                onClick={() => {props.changeTaskCompletionOnId(task.id)}}
                className={"flex-1 flex flex-row gap-2 bg-dark-gray p-4 text-white text-left rounded-lg"}
            >
                {task.isCompleted ? <Check /> : ""}
                {task.title}
            </button>
            <button 
                onClick={() => {navigateToTaskDescription()}}
                className="flex-none bg-dark-gray p-3 text-white rounded-lg"
            >
                <MoveRight size={20} />
            </button>
            <button 
                className="flex-none bg-dark-gray p-3 text-white rounded-lg"
                onClick={() => {props.deleteTaskOnId(task.id)}}
            ><Trash2 size={20} /></button>
        </li>
    )
}

export default TaskUnit;