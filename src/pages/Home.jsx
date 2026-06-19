import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import Hero from '../components/Hero.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import SkillsCard from '../components/SkillsCard.jsx';
import { freelanceServices, projects, skillGroups } from '../data.js';

export default function Home() {
  return (
    <>
      <Hero />
      <section className="section">
        <SectionHeader eyebrow="Featured Work" title="Projects with clean engineering foundations" centered>
          Java, Spring Boot, React, and database-backed applications designed around practical business needs.
        </SectionHeader>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
        </div>
      </section>
      <section className="section">
        <SectionHeader eyebrow="Core Strengths" title="Technical skills shaped for delivery">
          A balanced stack for building, testing, explaining, and maintaining modern software systems.
        </SectionHeader>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {skillGroups.slice(0, 2).map((group, index) => <SkillsCard key={group.title} group={group} index={index} />)}
        </div>
      </section>
      <section className="section">
        <div className="glass grid gap-8 rounded-3xl p-5 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="eyebrow">Open To Work</p>
            <h2 className="heading">Available for freelance and collaboration</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {freelanceServices.slice(0, 5).map((service) => (
                <span key={service} className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-bold text-slate-700 dark:bg-white/10 dark:text-slate-200"><FaCheckCircle className="text-teal-500" /> {service}</span>
              ))}
            </div>
          </div>
          <Link to="/freelance" className="btn-primary w-full sm:w-max">Explore Services <FaArrowRight /></Link>
        </div>
      </section>
    </>
  );
}
