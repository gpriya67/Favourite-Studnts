import { useContext } from "react";
import { StuContext } from "../context/StudentContext";
import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";
import EditMenu from "./EditMenu";
import { toast } from "react-toastify";
import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";
import { IoArrowBack } from "react-icons/io5";

function Fstudent() {
  const {
    student,
    setStudent,
    fStudent,
    setFstudent,
    menuOpen,
    setMenuOpen,
    editId,
    setEditId,
    course,
    setCourse,
    name,
    setName,
  } = useContext(StuContext);

  const handleDelete = (id) => {
    const deleteStu = fStudent.filter((fav) => fav.id !== id);
    console.log(deleteStu);
    setFstudent(deleteStu);
    toast.success("Favourite student deleted successfully!");
  };

  const handleEdit = (id) => {
    const editStu = fStudent.find((stu) => stu.id === id);

    if (!editStu) return;

    setName(editStu.name);
    setCourse(editStu.course);
    setEditId(editStu.id);
    setMenuOpen(true);
  };

  return (
    <>
      <div className="min-h-screen sm:py-10  px-4 sm:px-10 md:px-16 lg:px-20 py-5 max-w-5xl mx-auto">
         
        <div
  className="
    flex w-full
    flex-col gap-4
    sm:gap-5
    md:flex-row
    md:items-center
    md:justify-between
  "
>
  {/* Heading */}
  <div className="min-w-0">
    <h1
      className="
        text-xl font-bold
        text-[#1E1B4B]
        sm:text-2xl
        md:text-3xl
      "
    >
      Student Management
    </h1>

    <p
      className="
        mt-1
        text-xs font-medium
        text-[#92400E]/70
        sm:text-sm
      "
    >
      Manage your students and keep track of your favourites.
    </p>
  </div>

  {/* Back Button */}
  <Link
    to="/"
    className="
      w-full
      sm:w-auto
      md:shrink-0
    "
  >
    <button
      className="
        group
        flex w-full
        items-center justify-center
        gap-2
        rounded-xl
        px-3 py-2.5
        text-[10px]
        font-bold uppercase
        text-[#1E1B4B]
        cursor-pointer
        transition-all duration-200
        hover:bg-[#FDE68A]
        sm:px-4
        sm:text-xs
        md:w-auto
      "
    >
      <IoArrowBack
        className="
          shrink-0
          text-base
          transition-transform duration-200
          group-hover:-translate-x-1
        "
      />

      <span className="whitespace-nowrap">
        Back to Students
      </span>
    </button>
  </Link>
</div>
        <div className=" px-4 sm:px-10 md:px-16 lg:px-20 py-5 max-w-5xl mx-auto bg-[#FEF3C7] mt-10  rounded-xl">
          <div className="flex flex-col gap-5 p-3 sm:p-5 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-xl sm:text-3xl font-bold tracking-tight text-[#1E1B4B]">
                Favourite Students
              </h1>

              <p className="mt-1 text-xs sm:text-sm font-medium text-[#78350F]">
                Easily manage and keep track of your favourite students.
              </p>
            </div>

            {/* Tab Buttons */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-1.5 rounded-full bg-[#FDE68A] p-3">
             

              <button
                className="
                  flex-1 sm:flex-none
                  group
                  flex items-center justify-center gap-2
                  cursor-pointer
                  rounded-xl
                  border border-[#FDE68A]
                  bg-[#1E1B4B] 
                    text-[8px] text-nowrap
                  px-4 sm:px-5 py-2.5
                  md:text-xs font-bold uppercase tracking-wide
                  text-white
                  shadow-sm
                  transition-all duration-300 ease-in-out
                  hover:border-[#1E1B4B]
                  hover:bg-[#1E1B4B]
                  hover:text-white
                  hover:shadow-md
                "
              >
                <FaRegStar className="text-[#FDE68A]" />

                <span>Favourite Students</span>

                <span
                  className="
                    flex h-6 min-w-6
                    items-center justify-center
                    rounded-full
                    bg-[#FDE68A]
                    px-1.5
                    text-[11px] font-bold
                    text-[#1E1B4B]
                    transition-transform duration-300
                    hover:scale-110
                  "
                >
                  {fStudent.length}
                </span>
              </button>
            </div>
          </div>

          <ul className="space-y-3">
            {fStudent.length === 0 ? (
              <div className="rounded-xl border-2 border-dashed border-[#D97706] bg-[#FFFDF5] px-4 sm:px-6 py-10 sm:py-12 text-center">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#FDE68A]">
                  <FaRegStar className="text-3xl text-[#D97706]" />
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-[#1E1B4B]">
                  No favourite students yet
                </h2>

                <p className="mx-auto mt-2 max-w-md text-xs sm:text-sm font-medium md:leading-6 text-[#92400E]">
                  Tap "Add to favourite" on any student in the list and they
                  will show up here.
                </p>

                <Link to="/">
                  <button
                    className="
                      mt-6  rounded-xl
                      bg-[#1E1B4B]
                      px-5 py-3
                      text-sm font-bold
                      text-white
                      transition-all duration-300
                      hover:bg-[#312E81]
                      hover:shadow-md cursor-pointer
                    "
                  >
                    Back to students
                  </button>
                </Link>
              </div>
            ) : (
              fStudent.map((itm) => (
                <li
                  key={itm.id}
                  className="flex flex-row sm:items-center justify-between gap-4 bg-[#D97706] p-2 sm:p-3 rounded-xl my-4"
                >
                  {/* Student */}
                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FFFDF5] text-lg font-semibold text-[#92400E]">
                      {itm.name.charAt(0).toUpperCase()}
                    </div>

                    {/* Details */}
                    <div>
                      <h2 className="text-base font-bold text-[#111827]">
                        {itm.name}
                      </h2>

                      <p className="text-sm font-medium text-[#3B1D00] text-nowrap">
                        {itm.course}
                      </p>
                    </div>
                  </div>

                   <div className="flex flex-row gap-3">
  <button
    className="
      flex h-9 w-9 items-center justify-center
      rounded-lg
      border border-red-100
      bg-red-50
      text-red-400
      transition-all duration-200
      hover:bg-red-100
      hover:text-red-500
      cursor-pointer
    "
    onClick={() => handleDelete(itm.id)}
  >
    <MdOutlineDelete size={18} />
  </button>

  <button
    className="
      flex h-9 w-9 items-center justify-center
      rounded-lg
      border border-[#FDE68A]
      bg-[#FFF7D6]
      text-[#D97706]
      transition-all duration-200
      hover:bg-[#FDE68A]
      hover:text-[#92400E]
      cursor-pointer
    "
    onClick={() => handleEdit(itm.id)}
  >
    <MdOutlineEdit size={18} />
  </button>
</div>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
      <EditMenu />
    </>
  );
}

export default Fstudent;
