import { motion } from "motion/react";
import { ExternalLink, Tag } from "lucide-react";
import { Project } from "../data";
import React from "react";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="glass-card p-6 flex flex-col h-full group"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold group-hover:text-brand-accent transition-colors">
          {project.title}
        </h3>
        {project.year && (
          <span className="font-mono text-xs text-brand-secondary opacity-60">
            {project.year}
          </span>
        )}
      </div>
      
      <p className="text-brand-secondary text-sm leading-relaxed mb-6 flex-grow">
        {project.description}
      </p>

      {project.embedLink && (
        <div className="mb-6 rounded-xl overflow-hidden border border-black/5 bg-brand-primary/5 h-64 flex flex-col items-center justify-center p-6 text-center group/app">
          <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4 group-hover/app:scale-110 transition-transform">
            <ExternalLink size={24} className="text-brand-accent" />
          </div>
          <h4 className="text-base font-bold mb-1">{project.title}</h4>
          <p className="text-xs font-mono uppercase tracking-widest text-brand-secondary mb-4 opacity-60">
            Philosophy Spark
          </p>
          <a
            href={project.embedLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-brand-primary text-white rounded-full text-sm font-medium hover:bg-brand-accent transition-colors shadow-lg shadow-brand-primary/20"
          >
            Launch App
          </a>
        </div>
      )}

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags?.map((tag) => (
          <span
            key={tag}
            className="flex items-center gap-1 px-2 py-1 bg-black/5 rounded text-[10px] font-mono uppercase tracking-wider text-brand-secondary"
          >
            <Tag size={10} />
            {tag}
          </span>
        ))}
      </div>

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-brand-accent hover:underline"
        >
          View Project <ExternalLink size={12} />
        </a>
      )}
    </motion.div>
  );
};

export default ProjectCard;
