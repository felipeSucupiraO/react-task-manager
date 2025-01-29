import { useParams, useNavigate } from "react-router";
import { ChevronLeft } from "lucide-react"

function TaskPage() {
    const params = useParams();
    const navigate = useNavigate();

    return (
        <div className="w-screen min-h-screen bg-aqua-green flex justify-center p-6">
            <div>
                <header className="flex justify-evenly">
                    <button onClick={() => navigate(-1)}>
                        <ChevronLeft />
                    </button>
                    <h1 className="text-3xl text-white font-bold text-center grow">Task Details</h1>
                </header>
                <div className="bg-light-gray p-6 m-3 rounded-2xl">
                    <h2 className="text-xl font-bold">{params.title}</h2>
                    <p className="text-justify">{params.description}</p>
                </div>
            </div>
        </div>
    )
}

export default TaskPage;