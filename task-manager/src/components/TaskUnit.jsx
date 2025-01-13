import { Trash2 } from "lucide-react"
import { MoveRight } from "lucide-react"

function TaskUnit(props) {
    return (
        <li key={props.task.id} className="flex flex-row gap-2">
            <button
                onClick={() => {props.changeTaskCompletionOnId(props.task.id)}}
                className={`flex-1 bg-dark-gray p-4 text-white text-left rounded-lg ${props.task.isCompleted ? "line-through" : ""}`}
            >
                {props.task.title}
            </button>
            <button className="flex-none bg-dark-gray p-3 text-white rounded-lg"><MoveRight size={20} /></button>
            <button 
                className="flex-none bg-dark-gray p-3 text-white rounded-lg"
                onClick={() => {props.deleteTaskOnId(props.task.id)}}
            ><Trash2 size={20} /></button>
        </li>
    )
}

export default TaskUnit;