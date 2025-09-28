"use client";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react"; // icons

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Something went wrong.");
      }
    } catch (error) {
      setStatus("⚠️ Error sending message.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-26">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Left side - Info / Agency Branding */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-10 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4">Let’s build something great 🚀</h2>
          <p className="text-lg mb-8">
            Have an idea for a website, app, or creative project?  
            Our team is ready to bring your vision to life with cutting-edge design and development.
          </p>

          <div className="space-y-4 text-sm">
            {/* <p className="flex items-center gap-2">
              <Mail className="w-5 h-5" /> hello@youragency.com
            </p> */}
            <p className="flex items-center gap-2">
              <Phone className="w-5 h-5" /> +91 95462645945
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="w-5 h-5" /> Madhya Pradesh, India
            </p>
          </div>

          <div className="mt-8">
            <img
              src="https://img.freepik.com/free-vector/creative-web-design-studio_23-2148509426.jpg"
              alt="Agency office"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Right side - Contact Form */}
        <div className="p-10 flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md space-y-5"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Contact Us
            </h3>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition"
            >
              Send Message
            </button>
            {status && (
              <p className="mt-3 text-sm text-gray-600">{status}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
