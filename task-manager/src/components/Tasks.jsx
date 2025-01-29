import TaskUnit from "./TaskUnit";

function Tasks(props) {
    return (
        <section className="bg-light-gray p-6 rounded-2xl my-3">
            <ul className="space-y-4">
                {props.tasks.map(task => (
                    <TaskUnit
                        task={task}
                        changeTaskCompletionOnId={props.changeTaskCompletionOnId}
                        deleteTaskOnId={props.deleteTaskOnId}
                    />
                ))}
            </ul>
        </section>
    )
}

export default Tasks;