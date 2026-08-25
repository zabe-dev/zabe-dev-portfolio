import { courses } from '../data';

export function EducationSection() {
  return (
    <section id="education">
      <div className="section-heading">
        <h2>Education</h2>
        <p>A mix of school, courses, and hands-on learning.</p>
      </div>
      <div className="course-list">
        {courses.map((course) => (
          <article
            className={`course-item${course.certification ? ' certification' : ''}`}
            key={`${course.title}-${course.institution}`}
          >
            <div>
              <h3>{course.title}</h3>
              <p>{course.institution}</p>
            </div>
            <span>{course.detail}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
