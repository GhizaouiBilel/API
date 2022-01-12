import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserList from "./components/UserList";
import UserDetail  from "./components/UserDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/:id" element={<UserDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
