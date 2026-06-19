import ProjectCard from '../components/ProjectCard.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { projects } from '../data.js';

export default function Projects() {
  return (
    <section className="section">
      <SectionHeader eyebrow="Featured Projects" title="Software projects focused on business workflows" centered>
        Complete Java, Spring Boot, React, and MySQL applications with practical modules for real-world operations.
      </SectionHeader>
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
      </div>
    </section>
  );
}
