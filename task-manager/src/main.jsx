import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import App from './App.jsx'
import TaskPage from './pages/TaskPage.jsx'

const root = document.getElementById("root");

createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/task-details/:title/:description" element={<TaskPage />} />
    </Routes>
  </BrowserRouter>
);