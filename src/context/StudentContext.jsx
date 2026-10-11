import { createContext, useState } from 'react'

export const StuContext = createContext()

function StudentContext(data){

    const [student, setStudent] = useState([
  {
    id: 1,
    name: "Priya",
    course: "Computer Science",
  },
  {
    id: 2,
    name: "Arun",
    course: "Frontend Development",
  },
  {
    id: 3,
    name: "Kaviya",
    course: "Full Stack Development",
  },
 

]);
    const [fStudent,setFstudent] = useState([])
      const [menuOpen, setMenuOpen] = useState(false);
      const[editId,setEditId] = useState(null)
       const [name, setName] = useState("");
  const [course, setCourse] = useState("");
    return(
      <StuContext.Provider value={{student,setStudent,fStudent,setFstudent,menuOpen, setMenuOpen,editId,setEditId,name, setName,course, setCourse}}>
        {data.children}
      </StuContext.Provider>
    )
}

export default StudentContext
