import { useContext, useState } from "react";
import { StuContext } from "../context/StudentContext";
import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";
import EditMenu from "./EditMenu";
import { toast } from "react-toastify";
import { FiSearch } from "react-icons/fi";

function Student() {
  const {
    student,
    fStudent,
    setFstudent,
    setMenuOpen,
    setCourse,
    setName,
    setEditId,

  } = useContext(StuContext);


  const [search, setSearch] = useState("");

  const handleAdFavourite = (stu) => {
    setFstudent((prev) => {
      if (prev.some((item) => item.id === stu.id)) {
        return prev;
      }

      return [...prev, stu];
    });
    toast("Added Favourite Student List!");
  };

  const handleEdit = (stu) => {
    setName(stu.name);
    setCourse(stu.course);
    setEditId(stu.id);
    setMenuOpen(true);
  };


  const filteredStudents = student.filter((stu) =>
  stu.name.toLowerCase().includes(search.toLowerCase()) ||
  stu.course.toLowerCase().includes(search.toLowerCase())
);

  return (
    <div className="min-h-screen px-4 py-6 sm:py-10 max-w-5xl mx-auto">
      <div
        className="
    mx-auto mb-6 flex max-w-5xl
    flex-col gap-4
   
    
    p-5 
    sm:flex-row sm:items-center sm:justify-between
  "
      >
        {/* Left - Heading */}
        <div>
          <h1 className="text-2xl font-bold text-[#1E1B4B] sm:text-3xl">
            Student Management
          </h1>

          <p className="mt-1 text-sm text-[#92400E]/70">
            Manage your students and keep track of your favourites.
          </p>
        </div>

        {/* Right - Add Student */}
        <button
          className="
      w-full cursor-pointer
      rounded-xl
      bg-[#1E1B4B]
      px-5 py-3
      text-sm font-semibold
      text-white
      shadow-sm
      transition-all duration-200
      hover:bg-[#312E81]
      hover:shadow-md
      active:scale-95
      sm:w-auto
    "
          onClick={() => {
            setEditId(null);
            setName("");
            setCourse("");
            setMenuOpen(true);
          }}
        >
          + Add Student
        </button>
      </div>
<div className="relative w-full">
  <FiSearch
    className="
      absolute left-4 top-1/2
      -translate-y-1/2
      text-[#D97706]
    "
    size={18}
  />

  <input
    type="text"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    placeholder="Search students..."
    className="
      w-full
      rounded-xl
      border border-[#FDE68A]
      bg-[#FFFDF5]
      py-3 pl-11 pr-4
      text-sm
      text-[#1E1B4B]
      outline-none
      placeholder:text-[#92400E]/50
      transition-all duration-200
      hover:border-[#D97706]
      focus:border-[#D97706]
      focus:ring-2
      focus:ring-[#FDE68A]
    "
  />
</div>
      <div
        className="px-4 sm:px-10 md:px-16 lg:px-20 py-5  bg-[#FEF3C7] mt-10  
    border border-[#FDE68A] rounded-2xl"
      >
        <div className="flex flex-col gap-5 p-3 sm:p-5 md:flex-row md:items-center md:justify-between">
        
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1E1B4B]">
              Students
            </h1>

            <p className="mt-1 text-xs sm:text-sm font-medium text-[#78350F]">
              Add the students you want to keep an eye on.
            </p>
          </div>

          {/* Tab Buttons */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-1.5 rounded-2xl sm:rounded-full bg-[#FDE68A] p-3">
            <button
              className="
                flex-1 sm:flex-none
                cursor-pointer  rounded-xl
                bg-[#1E1B4B] px-4 sm:px-5 py-2.5 sm:py-3
                text-[8px]
                text-nowrap
                md:text-xs font-semibold uppercase
                text-white
                shadow-sm
                transition-all duration-200
                hover:bg-[#312E81]
              "
            >
              List of Students
            </button>

            <Link to="fstudent" className="flex-1 sm:flex-none">
              <button
                className="
                  w-full sm:w-auto
                  group
                  flex items-center justify-center gap-2
                  cursor-pointer
                  rounded-xl
                  border border-[#FDE68A]
                  bg-[#FFFDF5]
                  px-4 sm:px-5 py-2.5 text-[8px]  text-nowrap
                  md:text-xs font-bold uppercase tracking-wide
                  text-[#1E1B4B]
                  shadow-sm
                  transition-all duration-300 ease-in-out
                  hover:border-[#1E1B4B]
                  hover:bg-[#1E1B4B]
                  hover:text-white
                  hover:shadow-md
                "
              >
                {/* Star */}
                <FaRegStar
                  className="
                    text-sm
                    text-[#D97706]
                    transition-transform duration-300
                    group-hover:scale-110
                    group-hover:text-[#FDE68A]
                  "
                />

                <span>Favourite Students</span>

                <span
                  className="
                    flex h-5 min-w-5
                    items-center justify-center
                    rounded-full
                    bg-[#D97706]
                    px-1.5
                    text-[10px] font-bold
                    text-white
                    transition-all duration-300
                    group-hover:bg-[#FDE68A]
                    group-hover:text-[#1E1B4B]
                  "
                >
                  {fStudent.length}
                </span>
              </button>
            </Link>
          </div>
        </div>

        <ul>
          {filteredStudents .map((itm, index) => {
            const isFavourite = fStudent.some((fav) => fav.id === itm.id);
            return (
              <div
                key={itm.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#D97706] p-2 sm:p-3 rounded-xl my-4"
              >
                <li className="text-black font-medium list-none">
                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FFFDF5] text-lg font-semibold text-[#92400E]">
                      {index + 1}
                    </div>

                    {/* Student information */}
                    <div>
                      <h2 className="text-base font-bold text-[#111827]">
                        {itm.name}
                      </h2>

                      <p className="text-sm text-[#3b1d00] font-medium">
                        {itm.course}
                      </p>
                    </div>
                  </div>
                </li>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    disabled={isFavourite}
                    onClick={() => handleAdFavourite(itm)}
                    className={`
                      w-full sm:w-auto
                      flex items-center justify-center gap-2
                      rounded-full
                      px-5 py-2.5
                      text-sm font-semibold
                      transition-all duration-300 ease-in-out
                      ${
                        isFavourite
                          ? "cursor-not-allowed bg-[#FEF3C7] text-[#92400E]"
                          : "cursor-pointer bg-white text-[#1E1B4B] shadow-sm hover:bg-[#1E1B4B] hover:text-white hover:shadow-md"
                      }
                    `}
                  >
                    <FaRegStar
                      className={`text-base ${isFavourite ? "text-[#D97706]" : ""}`}
                    />
                    {isFavourite ? "Favourited" : "Add to favourite"}
                  </button>
                </div>
              </div>
            );
          })}
        </ul>
      </div>

      <EditMenu />
    </div>
  );
}

export default Student;
