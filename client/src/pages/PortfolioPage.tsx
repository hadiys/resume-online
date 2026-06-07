import React, { useState } from "react";
import { getPortfolioData, Project } from "../data/portfolioData";
import ProjectModal from "../components/ProjectModal";
import { Code, ExternalLink, ChevronRight, Github } from "lucide-react";

export default function PortfolioPage() {
  const [portfolioData] = useState(() => getPortfolioData())
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsOpen] = useState(false);

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  return (
    <div className="space-y-12">
      {/* Section Header */}
      <div className="space-y-4">
        <h2 className="text-3xl font-extrabold text-zinc-100 tracking-tight flex items-center gap-3">
          <Code className="w-8 h-8 text-blue-400" />
          Technical Projects & Case Studies
        </h2>
        <p className="text-zinc-400 max-w-2xl text-base leading-relaxed">
          Deep dives into real-world data engineering, analytics, and automation systems. Click on any project card to explore the full case study including architecture, challenges, and outcomes.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div 
            key={project.id}
            onClick={() => handleOpenProject(project)}
            className="group relative rounded-2xl bg-zinc-900/30 hover:bg-zinc-900/50 p-6 md:p-8 space-y-4 cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 active:scale-[0.99] flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-blue-500/10 text-blue-400">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-zinc-200 group-hover:text-zinc-100 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-zinc-500 font-mono">
                  {project.subtitle}
                </p>
              </div>

              <p className="text-sm text-zinc-400 leading-relaxed">
                {project.summary}
              </p>
            </div>

            <div className="flex items-center justify-between pt-6 mt-6 border-t border-white/5">
              <span className="text-xs text-zinc-500 font-mono">
                {project.period}
              </span>
              
              <span className="flex items-center gap-1 text-xs font-bold text-blue-400 hover:text-blue-300 font-mono">
                View Case Study
                <ChevronRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Project Case Study Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
}
