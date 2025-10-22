import React, { useState } from "react";
import "../App.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  // Update form state
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit form to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("https://my-profile-project-backend.vercel.app/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("✅ Message sent successfully!");
        setFormData({ fullname: "", email: "", message: "" }); // reset form
      } else {
        setStatus("❌ Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      setStatus("⚠️ Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-screen-2xl min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white container mx-auto px-4 md:px-20 py-20">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-sm">Fill out the form to contact us</p>

      <div className="flex flex-col items-center justify-center mt-12">
        <form
          className="bg-slate-300 w-full max-w-lg px-8 py-6 rounded-xl dark:border-white dark:border-1 dark:shadow-2xl dark:bg-transparent shadow-lg"
          onSubmit={handleSubmit}
        >
          <h1 className="text-xl font-semibold mb-5">Send Your Message Here</h1>

          {/* Fullname */}
          <div className="flex flex-col mb-4">
            <label className="block text-gray-700 ">Fullname</label>
            <input
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              className="shadow appearance-none border dark:text-black rounded py-2 px-3 bg-white leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter Your Fullname"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col mb-4">
            <label className="block text-gray-700">Email ID</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow appearance-none dark:text-black border rounded py-2 px-3 bg-white leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Enter Your Email ID"
              required
            />
          </div>

          {/* Message */}
          <div className="flex flex-col mb-4">
            <label className="block text-gray-700">Enter Your Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="shadow appearance-none dark:text-black border rounded py-2 px-3 bg-white leading-tight focus:outline-none focus:shadow-outline"
              rows="4"
              placeholder="Ask Your Queries"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              className="button-85"
              type="submit"
              disabled={loading}
              role="button"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>

          {/* Status message */}
          {status && <p className="mt-3 text-center text-sm">{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
