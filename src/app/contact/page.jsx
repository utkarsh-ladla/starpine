"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Code, Smartphone, Film, Palette, ArrowRight, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const services = [
    { icon: Code, name: "Web Development" },
    { icon: Smartphone, name: "App Development" },
    { icon: Film, name: "Video Editing & VFX" },
    { icon: Palette, name: "UI/UX Design" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      setTimeout(() => setStatus(""), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      {/* Subtle glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-black/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 container mx-auto px-4 py-12 lg:py-20">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 backdrop-blur-sm rounded-full border border-black/10 mb-4">
            <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-600">Available for new projects</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-black mb-4 tracking-tight">
            Let's Build Something
            <br />
            <span className="text-gray-500">Extraordinary</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transform your vision into reality with our expert development and design services
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16 max-w-5xl mx-auto">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className="group relative bg-black/5 backdrop-blur-sm rounded-xl p-6 border border-black/10 hover:border-black/20 transition-all duration-300 hover:bg-black/10"
            >
              <service.icon className="w-8 h-8 text-gray-600 group-hover:text-black transition-colors mb-4" />
              <h3 className="text-sm font-medium text-gray-700 group-hover:text-black transition-colors">{service.name}</h3>
            </div>
          ))}
        </div>

        {/* Main Contact Section */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left Info Panel */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-black/5 backdrop-blur-xl rounded-2xl p-8 border border-black/10">
              <h2 className="text-3xl font-bold text-black mb-4">Get In Touch</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Ready to start your next project? We're here to help you create exceptional digital experiences.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-lg bg-black/5 border border-black/10 flex items-center justify-center flex-shrink-0 group-hover:bg-black/10 transition-colors">
                    <Phone className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1 uppercase tracking-wider">Phone</p>
                    <p className="text-black font-medium">+91 95462645945</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-lg bg-black/5 border border-black/10 flex items-center justify-center flex-shrink-0 group-hover:bg-black/10 transition-colors">
                    <Mail className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1 uppercase tracking-wider">Email</p>
                    <p className="text-black font-medium">hello@techagency.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-lg bg-black/5 border border-black/10 flex items-center justify-center flex-shrink-0 group-hover:bg-black/10 transition-colors">
                    <MapPin className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1 uppercase tracking-wider">Location</p>
                    <p className="text-black font-medium">Madhya Pradesh, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-black/10">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-2xl font-bold text-black mb-1">500+</p>
                    <p className="text-sm text-gray-600">Projects Delivered</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-black mb-1">200+</p>
                    <p className="text-sm text-gray-600">Happy Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Panel */}
          <div className="lg:col-span-3">
            <div className="bg-black/5 backdrop-blur-xl rounded-2xl p-8 lg:p-10 border border-black/10">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full px-5 py-4 rounded-lg bg-white border border-black/10 text-black placeholder-gray-400 focus:outline-none focus:border-black/30 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full px-5 py-4 rounded-lg bg-white border border-black/10 text-black placeholder-gray-400 focus:outline-none focus:border-black/30 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-5 py-4 rounded-lg bg-white border border-black/10 text-black placeholder-gray-400 focus:outline-none focus:border-black/30 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Service Interested In</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 rounded-lg bg-white border border-black/10 text-black focus:outline-none focus:border-black/30 transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Select a service</option>
                      <option value="web">Web Development</option>
                      <option value="app">App Development</option>
                      <option value="vfx">Video Editing & VFX</option>
                      <option value="design">UI/UX Design</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Project Details</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, goals, and timeline..."
                    rows="6"
                    required
                    className="w-full px-5 py-4 rounded-lg bg-white border border-black/10 text-black placeholder-gray-400 focus:outline-none focus:border-black/30 transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={status === "sending"}
                  className="w-full py-5 bg-black hover:bg-gray-800 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : status === "success" ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Message Sent Successfully!
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                <p className="text-sm text-gray-600 text-center">
                  We typically respond within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-black/5 backdrop-blur-sm rounded-2xl p-8 border border-black/10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { label: "Years Experience", value: "8+" },
                { label: "Team Members", value: "25+" },
                { label: "Success Rate", value: "98%" },
                { label: "Countries Served", value: "15+" }
              ].map((stat, idx) => (
                <div key={idx}>
                  <p className="text-3xl font-bold text-black mb-2">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}