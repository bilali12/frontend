import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import StudentsView from "./component/student/StudentsView";
import NavBar from "./component/common/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import AddStudent from "./component/student/AddStudent";
import UpdateStudent from "./component/student/UpdateStudent";
import StudentProfile from "./component/student/StudentProfile";

function App() {
  return (
    <main>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/all-students" element={<StudentsView />}></Route>
          <Route exact path="/add-student" element={<AddStudent />}></Route>
          <Route exact path="/update-student/:id" element={<UpdateStudent />}></Route>
          <Route exact path="/view-student/:id" element={<StudentProfile />}></Route>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
