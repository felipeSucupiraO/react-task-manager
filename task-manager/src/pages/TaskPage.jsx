import { useParams } from "react-router";

function TaskPage() {
    const params = useParams();

    return (
        <div className="w-screen min-h-screen bg-aqua-green flex justify-center p-6">
            <div>
                <h1 className="text-3xl text-white font-bold text-center">Task Details</h1>
                <div className="bg-light-gray p-6 m-3 rounded-2xl">
                    <h2 className="text-xl font-bold">{params.title}</h2>
                    <p className="text-justify">{params.description}</p>
                </div>
            </div>
        </div>
    )
}

export default TaskPage;