import { BrowserRouter, Routes, Route } from "react-router-dom"
import Student from "./component/Student"
import Fstudent from "./component/Fstudent"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import StudentContext from "./context/StudentContext"

function App () {
  return(
    <div>
      <StudentContext>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Student />}/>
            <Route path="fstudent" element={<Fstudent />} />
          </Routes>
        </BrowserRouter>
      </StudentContext>
      <ToastContainer />
    </div>
  )
}

export default App