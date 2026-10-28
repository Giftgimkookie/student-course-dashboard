export default function CourseCard({ course }) {
  return (
    <article className="card">
      <h2>{course.title}</h2>
      <p>Lecturer: {course.lecturer}</p>

      <div className="bar">
        <div className="fill" style={{ width: `${course.progress}%` }}></div>
      </div>
      <p>{course.progress}% complete</p>

      <strong className={course.completed ? 'done' : 'ongoing'}>
        {course.completed ? 'Completed' : 'In progress'}
      </strong>
    </article>
  );
}