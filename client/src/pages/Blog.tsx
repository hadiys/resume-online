import React from "react";
import { BookOpen, Calendar, Clock, ArrowRight } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: "post-1",
    title: "AI-Powered Platform Integrity: Automating Escalation Workflows at Scale",
    excerpt: "How modern agentic AI systems and LLMs can be integrated into high-volume platform safety operations to reduce human review overhead by up to 85% while maintaining exceptional precision.",
    date: "May 15, 2026",
    readTime: "6 min read",
    category: "AI & Platform Safety",
    tags: ["Agentic AI", "LLMs", "Platform Safety", "Automation"]
  },
  {
    id: "post-2",
    title: "Building High-Performance Retail Data Warehouses in Snowflake with dbt",
    excerpt: "A deep dive into transforming complex, disjointed time-series and geographic transactional data into high-performance, analytics-ready star schemas using Snowflake and dbt.",
    date: "March 10, 2026",
    readTime: "8 min read",
    category: "Data Engineering",
    tags: ["Snowflake", "dbt", "Data Modeling", "SQL"]
  },
  {
    id: "post-3",
    title: "Navigating Crisis Enforcement: Designing Automated Pipelines Under Pressure",
    excerpt: "Reflections and engineering best practices on deploying real-time automated policy enforcement pipelines during major geopolitical high-risk events to combat coordinated hate speech.",
    date: "January 22, 2026",
    readTime: "5 min read",
    category: "Risk Operations",
    tags: ["Crisis Enforcement", "Content Moderation", "Risk Mitigation"]
  }
];

export default function Blog() {
  return (
    <div className="space-y-12">
      {/* Section Header */}
      <div className="space-y-4">
        <h2 className="text-3xl font-extrabold text-zinc-100 tracking-tight">
          Writing & Insights
        </h2>
        <p className="text-zinc-400 max-w-2xl text-base leading-relaxed">
          Thoughts on building scalable automated enforcement systems, data engineering best practices, and the future of platform safety and integrity operations.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article 
            key={post.id}
            className="flex flex-col justify-between p-6 rounded-2xl bg-zinc-900/30 hover:bg-zinc-900/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 group"
          >
            <div className="space-y-4">
              {/* Category & Metadata */}
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-blue-400 font-bold uppercase tracking-wider">
                  {post.category}
                </span>
                <div className="flex items-center gap-2 text-zinc-500">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{post.date}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-zinc-200 group-hover:text-zinc-100 transition-colors line-clamp-2 leading-snug">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-sm text-zinc-400 leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
            </div>

            {/* Footer */}
            <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-mono">
                <Clock className="w-3.5 h-3.5" />
                <span>{post.readTime}</span>
              </div>
              
              <button className="flex items-center gap-1 text-xs font-bold text-blue-400 hover:text-blue-300 font-mono group-hover:translate-x-1 transition-transform">
                Read Article
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
