import { useContext } from "react";
import { StuContext } from "../context/StudentContext";
import { toast } from "react-toastify";

function EditMenu() {
  const {
    setStudent,
    setFstudent,
    menuOpen,
    setMenuOpen,
    editId,
    setEditId,
    name,
    setName,
    course,
    setCourse,
  } = useContext(StuContext);

  if (!menuOpen) return null;

  const handleClose = () => {
    setMenuOpen(false);
    setEditId(null);
    setName("");
    setCourse("");
  };

  const handleSave = () => {
    if (!name.trim() || !course.trim()) {
      toast.error("Please enter both Name and Course.");
      return;
    }
    if (editId !== null) {
      setStudent((prev) =>
        prev.map((stu) =>
          stu.id === editId
            ? { ...stu, name: name.trim(), course: course.trim() }
            : stu
        )
      );
      toast.success("Favourite Student Updated successfully!");

      setFstudent((prev) =>
        prev.map((stu) =>
          stu.id === editId
            ? { ...stu, name: name.trim(), course: course.trim() }
            : stu
        )
      );

      setEditId(null);
    } else {
      const newStu = {
        id: Date.now(),
        name: name.trim(),
        course: course.trim(),
      };
      setStudent((prev) => [...prev, newStu]);
      toast.success(" Student Added successfully!");
    }

    setName("");
    setCourse("");
    setMenuOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/20">
      {/* Backdrop overlay dismiss */}
      <div className="fixed inset-0" onClick={handleClose}></div>

      {/* Side Menu */}
      <div
        className="
          absolute right-0 top-0
          h-full w-full sm:w-[380px] max-w-full
          bg-[#FFFDF5]
          shadow-2xl
          border-l border-[#FDE68A]
          p-6
          flex flex-col justify-between
          overflow-y-auto
        "
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#FDE68A] pb-5">
            <div>
              <h2 className="text-xl font-bold text-[#1E1B4B]">
                {editId !== null ? "Edit Student" : "Add Students"}
              </h2>
              <p className="mt-1 text-xs text-[#92400E]">
                {editId !== null ? "Update student details" : "Manage your options"}
              </p>
            </div>

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="
                flex h-9 w-9 items-center justify-center
                rounded-full
                bg-[#FDE68A]
                text-lg font-bold
                text-[#1E1B4B]
                transition-all duration-200
                hover:bg-[#1E1B4B]
                hover:text-white
                cursor-pointer
              "
            >
              ×
            </button>
          </div>

          {/* Input Fields */}
          <div className="mt-6 flex flex-col gap-4">
            <div className="w-full">
              <label className="mb-2 block text-sm font-semibold text-[#1E1B4B]">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter student name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="
                  w-full
                  rounded-lg
                  border border-[#FDE68A]
                  bg-white
                  px-4 py-3
                  text-sm
                  text-[#1E1B4B]
                  outline-none
                  transition-all duration-200
                  placeholder:text-[#92400E]/40
                  hover:border-[#D97706]
                  focus:border-[#D97706]
                  focus:ring-2
                  focus:ring-[#FDE68A]
                "
              />
            </div>

            <div className="w-full">
              <label className="mb-2 block text-sm font-semibold text-[#1E1B4B]">
                Course
              </label>
              <input
                type="text"
                placeholder="Enter student course"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className="
                  w-full
                  rounded-lg
                  border border-[#FDE68A]
                  bg-white
                  px-4 py-3
                  text-sm
                  text-[#1E1B4B]
                  outline-none
                  transition-all duration-200
                  placeholder:text-[#92400E]/40
                  hover:border-[#D97706]
                  focus:border-[#D97706]
                  focus:ring-2
                  focus:ring-[#FDE68A]
                "
              />
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-6">
          <button
            type="button"
            onClick={handleSave}
            className="
              w-full
              rounded-xl
              bg-[#1E1B4B]
              px-5 py-3
              text-sm font-bold uppercase tracking-wide
              text-white
              transition-all duration-300
              hover:bg-[#312E81]
              hover:shadow-lg
              active:scale-[0.98]
              cursor-pointer
            "
          >
            {editId !== null ? "Update" : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditMenu;
