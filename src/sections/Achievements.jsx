import { Trophy } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    { title: 'Gigabit Code Contest 2024', desc: 'Secured 2nd position at COER Roorkee.' },
    { title: 'LeetCode Knight', desc: 'Achieved a 1877 rating. Globally ranked 1428 among approx 32K competitors in Weekly Contest 399.' },
    { title: 'TechGig Code Gladiators 2024', desc: 'Achieved Top 100 ranking globally.' }
  ];

  return (
    <section id="achievements">
      <h2 className="section-title">Achievements</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {achievements.map((item, i) => (
          <div key={i} className="glass" style={{ padding: '2rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <div style={{ color: 'var(--accent)', paddingTop: '0.2rem' }}>
              <Trophy size={24} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#fff' }}>{item.title}</h3>
              <p style={{ fontSize: '0.95rem' }}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
