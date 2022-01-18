import About from "./components/About.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import TaskManager from "./components/TaskManager.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TaskManager />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
