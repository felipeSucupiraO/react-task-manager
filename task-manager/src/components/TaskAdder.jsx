import { useState } from "react";

function TaskAdder(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    
    return (
        <div className="bg-light-gray p-6 rounded-2xl my-3 flex flex-col gap-4">
            <input
                className="border border-dark-gray p-4 rounded-lg"
                type="text"
                placeholder="Task Title"
                value={title}
                onChange={(event) => {
                    setTitle(event.target.value);
                }}
            />
            <input
                className="border border-dark-gray p-4 rounded-lg"
                type="text"
                placeholder="Task Description"
                value={description}
                onChange={(event) => {
                    setDescription(event.target.value);
                }}
            />
            <button onClick={() => {
                if (!title.trim() || !description.trim()) {
                    alert("Adicione título e descrição");
                    return;
                }
                
                props.addTask(title, description)
                setTitle("");
                setDescription("");
            }} className="bg-dark-gray p-4 text-white rounded-lg">Add</button>
        </div>
    )
}

export default TaskAdder;