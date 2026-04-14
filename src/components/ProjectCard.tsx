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
