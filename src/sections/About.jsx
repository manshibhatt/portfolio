const About = () => {
  return (
    <section id="about">
      <h2 className="section-title">About Me & Skills</h2>
      <div className="glass" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>

        <p>
          I am a passionate software developer with a strong foundation in algorithms and full-stack development.
          I am currently working as a Frontend Developer, optimizing performance, integrating REST APIs, and converting complex Figma designs into responsive React interfaces.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          <div>
            <h3 style={{ marginBottom: '1rem', color: 'var(--accent)' }}>Languages</h3>
            <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
              {['JavaScript', 'HTML', 'CSS', 'Java', 'Python'].map(tech => (
                <span key={tech} style={{ padding: '0.4rem 0.8rem', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', fontSize: '0.9rem' }}>{tech}</span>
              ))}
            </div>
          </div>

          <div>
            <h3 style={{ marginBottom: '1rem', color: 'var(--accent)' }}>Tech Stack</h3>
            <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
              {['React', 'Node.js', 'Express.js', 'MongoDB', 'REST API', 'FastAPI'].map(tech => (
                <span key={tech} style={{ padding: '0.4rem 0.8rem', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', fontSize: '0.9rem' }}>{tech}</span>
              ))}
            </div>
          </div>

          <div>
            <h3 style={{ marginBottom: '1rem', color: 'var(--accent)' }}>Tools & Concepts</h3>
            <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
              {['Git', 'Docker', 'DSA', 'OS', 'Zustand', 'Tailwind CSS'].map(tech => (
                <span key={tech} style={{ padding: '0.4rem 0.8rem', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', fontSize: '0.9rem' }}>{tech}</span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
export default About;
