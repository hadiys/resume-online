import React from "react";
import { portfolioData } from "../data/portfolioData";

export default function Home() {
  const { personal, experiences, certifications, skills } = portfolioData;

  return (
    <div className="space-y-20 relative">
      
      {/* Jumbotron Hero Section - Profile Photo on Right */}
      <section className="relative rounded-3xl overflow-hidden bg-zinc-900/40 p-8 md:p-12 flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 min-h-[400px]">
        {/* Background Subtle Fade */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/70 to-transparent z-0" />

        {/* Hero Content (Left) */}
        <div className="relative z-10 space-y-6 text-center md:text-left flex-1">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-100 tracking-tight">
              {personal.name}
            </h1>
            <p className="text-lg text-blue-400 font-sans font-semibold uppercase tracking-wider">
              {personal.title}
            </p>
          </div>

          <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed font-serif italic max-w-2xl">
            "{personal.punchyOneLiner}"
          </p>

          {/* Company Logos & Platforms (Meta, TikTok) */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-8 pt-4 opacity-75">
            <div className="flex items-center gap-3">
              <img 
                src="/images/meta.png" 
                alt="Meta Logo" 
                className="h-6 md:h-8 object-contain"
              />
            </div>
            <div className="flex items-center gap-3">
              <img 
                src="/images/tiktok.png" 
                alt="TikTok Logo" 
                className="h-6 md:h-8 object-contain"
              />
              <span className="text-zinc-400 font-bold font-sans text-sm md:text-base">TikTok</span>
            </div>
          </div>
        </div>

        {/* Profile Picture with Creative Octagonal Gradient Border (Right) */}
        <div className="relative z-10 shrink-0 octagonal-border-wrap octagonal-frame shadow-2xl">
          <div className="w-48 h-48 md:w-56 md:h-56 octagonal-frame overflow-hidden bg-zinc-900">
            <img 
            src={personal.photoUrl} 
            alt={personal.name} 
            className="w-full h-full object-cover grayscale contrast-105 hover:grayscale-0 transition-all duration-500 scale-105 hover:scale-100"
          />
          </div>
        </div>
      </section>

      {/* Two-Column Details - Reordered so Professional Profile is on top when collapsed on mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Right Column: Profile Summary & Certifications (Narrow) - Appears first on mobile using lg:order-last */}
        <div className="lg:col-span-4 space-y-12 lg:order-last">
          
          {/* Profile Summary - Slashes removed */}
          <div className="p-6 rounded-2xl bg-zinc-900/20 space-y-4">
            <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest font-sans">
              Professional Profile
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              {personal.profileSummary}
            </p>
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold text-zinc-100 tracking-tight flex items-center gap-3">
              Certifications
            </h2>

            <div className="space-y-4">
              {certifications.map((cert) => (
                <div 
                  key={cert.id}
                  className="p-5 rounded-2xl bg-zinc-900/10 flex flex-col justify-between gap-4 hover:bg-zinc-900/20 transition-all"
                >
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-zinc-200 leading-snug">
                      {cert.name}
                    </h4>
                    <p className="text-xs text-zinc-500 font-sans">
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>

                  {cert.url && (
                    <a 
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 font-sans mt-auto self-start"
                    >
                      Verify Credential
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Left Column: Experience (Wide) */}
        <div className="lg:col-span-8 space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold text-zinc-100 tracking-tight flex items-center gap-3">
              Professional Experience
            </h2>

            <div className="space-y-12 relative">
              {experiences.map((exp) => (
                <div key={exp.id} className="relative pl-0 group">
                  <div className="space-y-3">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
                      <div>
                        <h3 className="text-lg font-bold text-zinc-200 group-hover:text-zinc-100 transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-sm text-zinc-400 font-sans">
                          {exp.company} • <span className="text-zinc-500">{exp.location}</span>
                        </p>
                      </div>
                      {/* Brighter white date text color (text-zinc-100) */}
                      <span className="text-xs font-sans font-bold text-zinc-100 bg-zinc-900/50 px-2.5 py-1 rounded-full self-start md:self-auto">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((bullet, i) => (
                        <li key={i} className="text-sm text-zinc-400 leading-relaxed flex items-start gap-2.5">
                          <span className="text-blue-500/60 mt-1.5 shrink-0 text-[10px]">■</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technical tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {exp.skills.map((skill, i) => (
                        <span key={i} className="text-[10px] font-mono text-zinc-500 bg-zinc-900/20 px-2 py-0.5 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Minimal Technical Stack */}
      <section className="pt-12 border-t border-white/5 space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-extrabold text-zinc-100 tracking-tight">
            Technical Stack
          </h2>
          <p className="text-sm text-zinc-500 font-sans">
            Core technologies powering my automation & analytical workflows
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-12 py-6 opacity-80">
          {skills.map((cat) => 
            cat.items.map((skill, i) => (
              <div key={i} className="flex flex-col items-center gap-2 group">
                {skill.icon ? (
                  <img 
                    src={skill.icon} 
                    alt={`${skill.name} Logo`} 
                    className="h-10 w-10 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                ) : (
                  <div className="h-10 w-10 rounded bg-zinc-900 flex items-center justify-center font-bold text-xs text-blue-400 font-mono">
                    SQL
                  </div>
                )}
                <span className="text-xs text-zinc-500 group-hover:text-zinc-300 font-sans transition-colors">
                  {skill.name}
                </span>
              </div>
            ))
          )}
        </div>
      </section>

    </div>
  );
}
