import { ArrowLeftIcon } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";
import api from "../lib/axios";

const CreatePage = () => {
  // Using a single form state makes it scalable & cleaner
  const [form, setForm] = useState({ title: "", content: "" });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Generic input handler for both fields
  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation to avoid empty submissions
    if (!form.title.trim() || !form.content.trim()) {
      toast.error("All fields are required");
      return;
    }

    setLoading(true);

    try {
      // API request - posting note to backend
      await api.post("/notes", form);

      toast.success("Note created successfully!");
      navigate("/"); // Redirect back to notes list
    } catch (error) {
      console.error("Error creating note", error);

      // Optional chaining avoids potential crash if response is undefined
      if (error.response?.status === 429) {
        toast.error("Slow down! You're creating notes too fast", {
          duration: 4000,
          icon: "💀",
        });
      } else {
        toast.error("Failed to create note");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        
        {/* Back navigation button */}
        <Link to="/" className="btn btn-ghost mb-6">
          <ArrowLeftIcon className="size-5" />
          Back to Notes
        </Link>

        {/* Card container */}
        <div className="card bg-base-100 shadow-sm">
          <div className="card-body">
            <h2 className="text-2xl font-semibold mb-4">Create New Note</h2>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Title Input */}
              <div>
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Note Title"
                  className="input input-bordered w-full"
                  value={form.title}
                  onChange={handleChange}
                />
              </div>

              {/* Content Textarea */}
              <div>
                <label className="label">
                  <span className="label-text">Content</span>
                </label>
                <textarea
                  name="content"
                  placeholder="Write your note here..."
                  className="textarea textarea-bordered w-full h-32"
                  value={form.content}
                  onChange={handleChange}
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={loading}
                >
                  {loading ? "Creating..." : "Create Note"}
                </button>
              </div>

            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CreatePage;
