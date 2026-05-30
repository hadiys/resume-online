import React, { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import { Mail, Phone, MapPin, Send, MessageSquare, Linkedin, Github } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const { personal } = portfolioData;
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Message sent successfully! Hadi will get back to you shortly.");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="space-y-12">
      {/* Section Header */}
      <div className="space-y-4">
        <h2 className="text-3xl font-extrabold text-zinc-100 tracking-tight">
          Get in Touch
        </h2>
        <p className="text-zinc-400 max-w-2xl text-base leading-relaxed">
          Have a role to discuss, a technical project collaboration in mind, or just want to chat about automated risk operations? Drop a message below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Info */}
        <div className="lg:col-span-5 space-y-8">
          <div className="p-6 rounded-2xl bg-zinc-900/20 space-y-6">
            <h3 className="text-lg font-bold text-zinc-200 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-blue-400" />
              Contact Information
            </h3>

            <div className="space-y-4 font-sans text-sm">
              <div className="flex items-center gap-3 text-zinc-400 hover:text-zinc-200 transition-colors">
                <Mail className="w-5 h-5 text-blue-400 shrink-0" />
                <a href={`mailto:${personal.email}`}>{personal.email}</a>
              </div>
              <div className="flex items-center gap-3 text-zinc-400 hover:text-zinc-200 transition-colors">
                <Phone className="w-5 h-5 text-blue-400 shrink-0" />
                <span>{personal.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-400">
                <MapPin className="w-5 h-5 text-blue-400 shrink-0" />
                <span>{personal.location}</span>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-900/20 space-y-4">
            <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest font-sans">
              Professional Networks
            </h3>
            <div className="flex gap-4">
              <a 
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-zinc-100 transition-all font-sans text-xs font-semibold"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                LinkedIn
              </a>
              <a 
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-zinc-100 transition-all font-sans text-xs font-semibold"
              >
                <Github className="w-4 h-4 text-blue-400" />
                GitHub Portfolio
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-6 p-6 rounded-2xl bg-zinc-900/30">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-400 font-sans uppercase">
                Your Name
              </label>
              <input 
                type="text" 
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-zinc-950 text-zinc-200 placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-blue-500/50 text-sm"
                placeholder="Hadi Yaser"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-400 font-sans uppercase">
                Your Email
              </label>
              <input 
                type="email" 
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-zinc-950 text-zinc-200 placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-blue-500/50 text-sm"
                placeholder="saleh.hadiyasser@hotmail.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-zinc-400 font-sans uppercase">
              Message
            </label>
            <textarea 
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-zinc-950 text-zinc-200 placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-blue-500/50 text-sm resize-none"
              placeholder="Hi Hadi, I'd love to talk about..."
            />
          </div>

          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.99]"
          >
            <Send className="w-4 h-4" />
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}
