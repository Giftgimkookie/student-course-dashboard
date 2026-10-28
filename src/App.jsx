import { useState } from 'react';
import courses from './data/courses';
import CourseCard from './components/CourseCard';

export default function App() {
  const [filter, setFilter] = useState('all');

  const shown = courses.filter(c => {
    if (filter === 'done') return c.completed;
    if (filter === 'ongoing') return !c.completed;
    return true;
  });

  return (
    <main>
      <h1>My Course Dashboard</h1>

      <div className="filters">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('done')}>Completed</button>
        <button onClick={() => setFilter('ongoing')}>In progress</button>
      </div>

      {shown.length === 0 ? (
        <p className="empty">No courses found. Try a different filter.</p>
      ) : (
        <section className="grid">
          {shown.map(c => <CourseCard key={c.id} course={c} />)}
        </section>
      )}
    </main>
  );
}