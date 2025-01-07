import TaskAdder from "./components/TaskAdder";
import Tasks from "./components/Tasks";

function App() {
    return (
        <div>
            <h1>Task Manager</h1>
            <TaskAdder/>
            <Tasks/>
        </div>
    )
}

export default App;