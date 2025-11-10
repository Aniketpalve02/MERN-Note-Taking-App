// components/NoteCard.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../lib/utils.js";
import { PenSquareIcon, Trash2Icon } from "lucide-react";
import api from "../lib/axios.js";
import toast from "react-hot-toast";

const NoteCard = ({ note, setNotes }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleDelete = async () => {
    try {
      await api.delete(`/notes/${note._id}`);
      setNotes((prev) => prev.filter((n) => n._id !== note._id));
      toast.success("Note deleted successfully");
    } catch (error) {
      console.log("Error deleting note:", error);
      toast.error("Failed to delete note");
    } finally {
      setShowDeleteModal(false);
    }
  };

  return (
    <>
      {/* NOTE CARD */}
      <div
        className="
          card bg-base-100 
          rounded-2xl 
          border-t-4 border-[#00FF9D]
          hover:shadow-lg hover:-translate-y-1
          transition-all duration-200
        "
      >
        <div className="card-body">

          {/* Title */}
          <Link to={`/note/${note._id}`}>
            <h3 className="card-title text-base-content hover:underline">
              {note.title}
            </h3>
          </Link>

          {/* Content preview */}
          <p className="text-base-content/70 line-clamp-3">
            {note.content}
          </p>

          {/* Footer Row */}
          <div className="card-actions justify-between items-center mt-4">
            <span className="text-sm text-base-content/60">
              {formatDate(new Date(note.createdAt))}
            </span>

            <div className="flex items-center gap-3">

              {/* EDIT */}
              <Link
                to={`/note/${note._id}`}
                className="flex items-center gap-1 text-sm text-[#00FF9D] hover:underline"
              >
                <PenSquareIcon className="size-4" />
                Edit
              </Link>

              {/* DELETE */}
              <button
                onClick={() => setShowDeleteModal(true)}
                className="flex items-center gap-1 text-sm text-red-400 hover:text-red-500"
              >
                <Trash2Icon className="size-4" />
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* DELETE CONFIRMATION MODAL */}
      {showDeleteModal && (
        <div className="modal modal-open">
          <div className="modal-box rounded-xl">
            <h3 className="font-semibold text-lg">Delete Note?</h3>
            <p className="py-3">This action cannot be undone.</p>

            <div className="modal-action">
              <button
                className="btn btn-ghost"
                onClick={() => setShowDeleteModal(false)}
              >
                Cancel
              </button>
              <button className="btn btn-error" onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NoteCard;
