import { projects } from '../data/projects'
import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="section-shell py-24 sm:py-28">
      <SectionHeading
        eyebrow="PROJECTS"
        title="Selected Projects"
        description="A closer look at what I've built — from an AI-driven career platform to a real-time service marketplace."
      />

      <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
