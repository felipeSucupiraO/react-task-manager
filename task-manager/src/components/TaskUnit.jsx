function TaskUnit(props) {
    return (
        <li key={props.task.id} className="flex flex-row gap-2">
            <button className="flex-1 bg-dark-gray p-4 text-white text-left rounded-lg">{props.task.title}</button>
            <button className="flex-none bg-dark-gray p-3 text-white rounded-lg">&gt;</button>
        </li>
    )
}

export default TaskUnit;