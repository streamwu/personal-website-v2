import { motion } from "motion/react";
import { AchievementSection } from "../data";
import ProjectCard from "./ProjectCard";
import { BookOpen, Lightbulb } from "lucide-react";

interface SectionProps {
  data: AchievementSection;
  id: string;
}

export default function Section({ data, id }: SectionProps) {
  return (
    <section id={id} className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-brand-accent mb-2 block">
            {data.subtitle}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{data.title}</h2>
          <p className="max-w-2xl text-lg text-brand-secondary leading-relaxed">
            {data.description}
          </p>
        </div>

        {data.interests && (
          <div className="mb-12 flex flex-wrap gap-4">
            {data.interests.map((interest) => (
              <div
                key={interest}
                className="px-4 py-2 border border-black/10 rounded-full text-sm font-medium hover:bg-black/5 transition-colors"
              >
                {interest}
              </div>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {data.projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {data.publications && data.publications.length > 0 && (
          <div className="mt-12 pt-12 border-t border-black/5">
            <div className="flex items-center gap-2 mb-6 opacity-60">
              <BookOpen size={18} />
              <h4 className="font-mono text-xs uppercase tracking-widest">Selected Publications</h4>
            </div>
            <div className="space-y-4">
              {data.publications.map((pub, index) => (
                <div key={index} className="flex flex-col md:flex-row md:items-center justify-between gap-2 py-2">
                  <div className="flex items-start gap-3">
                    <Lightbulb size={16} className="mt-1 text-brand-accent opacity-50" />
                    <div>
                      <span className="font-medium">{pub.title}</span>
                      <span className="mx-2 text-brand-secondary opacity-40">—</span>
                      <span className="text-sm italic text-brand-secondary">{pub.venue}</span>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-brand-secondary opacity-60 ml-7 md:ml-0">
                    {pub.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
}
