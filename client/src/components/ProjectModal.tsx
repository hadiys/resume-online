import React, { useEffect } from "react";
import { Project } from "../data/portfolioData";
import { X, Github, ExternalLink, Cpu, Target, Award } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[85vh] overflow-hidden rounded-2xl bg-zinc-950 shadow-2xl flex flex-col transition-all duration-300 scale-100 opacity-100 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-white/5 bg-zinc-900/30">
          <div>
            <div className="flex flex-wrap gap-2 mb-2">
              {project.tags.map((tag, i) => (
                <span 
                  key={i} 
                  className="px-2.5 py-0.5 text-xs font-mono rounded bg-blue-500/10 text-blue-400"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-100 tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm text-zinc-400 font-mono mt-1">
              {project.subtitle}
            </p>
          </div>
          
          <button 
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-zinc-100 hover:bg-white/5 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 custom-scrollbar">
          
          {/* Project Summary */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-zinc-200 flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-400" />
              Project Overview
            </h3>
            <p className="text-zinc-300 leading-relaxed text-base">
              {project.summary}
            </p>
          </div>

          {/* Bullet Achievements */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-zinc-200 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-blue-400" />
              Key Features & Contributions
            </h3>
            <div className="p-5 rounded-2xl bg-zinc-900/10 space-y-3">
              <ul className="space-y-3">
                {project.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="font-mono text-xs text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded mt-0.5">
                      0{i + 1}
                    </span>
                    <span className="text-sm text-zinc-300 leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-white/5 bg-zinc-900/30">
          <span className="text-xs text-zinc-500 font-mono">
            Published: {project.period}
          </span>
          
          <div className="flex gap-3">
            {project.githubUrl && (
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm font-mono rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-zinc-100 transition-all active:scale-95"
              >
                <Github className="w-4 h-4" />
                Repository
              </a>
            )}
            {project.demoUrl && (
              <a 
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm font-mono rounded-xl bg-blue-600 text-white hover:bg-blue-500 transition-all active:scale-95 shadow-lg shadow-blue-600/20"
              >
                <ExternalLink className="w-4 h-4" />
                Read Article
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
