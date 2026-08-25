import type { Project } from '../data';
import { PAGE_SIZE } from '../data';
import { Pagination } from './Pagination';

type Props = { projects: Project[]; page: number; onPageChange: (page: number) => void };

export function ProjectsSection({ projects, page, onPageChange }: Props) {
  const pageCount = Math.ceil(projects.length / PAGE_SIZE);
  return (
    <section id="projects">
      <div className="section-heading">
        <h2>Projects</h2>
        <p>A few things I’ve worked on and thought about.</p>
      </div>
      <div className="project-grid">
        {projects.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE).map((project, index) => {
          const itemNumber = page * PAGE_SIZE + index + 1;
          return (
            <a
              className="project-card"
              href={project.href}
              key={project.title}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={`placeholder tone-${itemNumber}${project.image ? ' project-image' : ''}`}
                aria-hidden="true"
              >
                {project.image && <img src={project.image} alt="" width="1000" height="690" />}
                <span>{String(itemNumber).padStart(2, '0')}</span>
              </div>
              <div className="project-copy">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <small>{project.stack}</small>
              </div>
            </a>
          );
        })}
      </div>
      <Pagination
        label="Projects pagination"
        page={page}
        pageCount={pageCount}
        onChange={onPageChange}
      />
    </section>
  );
}
