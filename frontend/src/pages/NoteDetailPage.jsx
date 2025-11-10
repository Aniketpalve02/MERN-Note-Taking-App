import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../lib/axios";
import toast from "react-hot-toast";
import { ArrowLeftIcon, LoaderIcon, Trash2Icon } from "lucide-react";

const NoteDetailPage = () => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Load note on page open
    const fetchNote = async () => {
      try {
        const res = await api.get(`/notes/${id}`);
        setNote(res.data);
      } catch (error) {
        toast.error("Failed to fetch the note");
        navigate("/");
      } finally {
        setLoading(false);
      }
    };

    fetchNote();
  }, [id, navigate]);

  const handleSave = async () => {
    if (!note.title.trim() || !note.content.trim()) {
      toast.error("Title and content cannot be empty");
      return;
    }

    setSaving(true);
    try {
      await api.put(`/notes/${id}`, note);
      toast.success("Note updated");
      navigate("/");
    } catch (error) {
      toast.error("Failed to update note");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    try {
      await api.delete(`/notes/${id}`);
      toast.success("Note deleted");
      navigate("/");
    } catch (error) {
      toast.error("Failed to delete note");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <LoaderIcon className="animate-spin size-10 text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200">
      <div className="max-w-2xl mx-auto px-4 py-8">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Link to="/" className="btn btn-ghost">
            <ArrowLeftIcon className="h-5 w-5" />
            Back
          </Link>

          <button
            onClick={() => setShowDeleteModal(true)}
            className="btn btn-error btn-outline flex items-center gap-1"
          >
            <Trash2Icon className="h-5 w-5" />
            Delete
          </button>
        </div>

        {/* Card */}
        <div className="card bg-base-100 rounded-2xl border-t-4 border-[#00FF9D]">
          <div className="card-body space-y-5">

            <div className="form-control">
              <label className="label font-medium">Title</label>
              <input
                type="text"
                className="input input-bordered w-full"
                value={note.title}
                onChange={(e) => setNote({ ...note, title: e.target.value })}
              />
            </div>

            <div className="form-control">
              <label className="label font-medium">Content</label>
              <textarea
                className="textarea textarea-bordered w-full h-40"
                value={note.content}
                onChange={(e) => setNote({ ...note, content: e.target.value })}
              />
            </div>

            <div className="card-actions justify-end">
              <button
                className="btn btn-primary"
                disabled={saving}
                onClick={handleSave}
              >
                {saving ? "Saving..." : "Save Changes"}
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

    </div>
  );
};

export default NoteDetailPage;
