import TaskAdder from "./components/TaskAdder";
import Tasks from "./components/Tasks";

function App() {
    return (
        <div className="w-screen h-screen bg-light-gray flex justify-center p-6">
            <div className="w-[500px]">
                <h1 className="text-3xl text-royal-blue font-bold text-center">Task Manager</h1>
                <TaskAdder/>
                <Tasks/>
            </div>
        </div>
    )
}

export default App;