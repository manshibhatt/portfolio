import { Github, ExternalLink, FolderGit2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    { 
      title: 'Promote', 
      desc: 'MERN stack web app enabling users to explore and search business posts with advanced filters. Features business profile creation, post management, and real-time messaging using Socket.IO.', 
      tech: ['Node.js', 'Express.js', 'MongoDB', 'React', 'Cloudinary', 'Socket.IO'],
      github: 'https://github.com/manshibhatt/promote',
      link: 'https://fronend-t.onrender.com/'
    },
    { 
      title: 'Story Generator', 
      desc: 'FastAPI-based interactive story generator using LLMs to dynamically generate stories. Users input a theme and navigate through branched nodes, making choices to try and reach a successful ending.', 
      tech: ['FastAPI', 'Python', 'React', 'LLM'],
      github: 'https://github.com/manshibhatt/story-generator',
      link: 'https://story-generator-1-irqa.onrender.com'
    }
  ];

  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        {projects.map((p, i) => (
          <div key={i} className="glass" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s ease' }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.5rem', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <FolderGit2 size={24} color="var(--accent)" />
                {p.title}
              </h3>
              <div style={{ display: 'flex', gap: '1rem' }}>
                {p.github !== '#' && <a href={p.github} target="_blank" rel="noreferrer"><Github size={20} /></a>}
                {p.link !== '#' && <a href={p.link} target="_blank" rel="noreferrer"><ExternalLink size={20} /></a>}
              </div>
            </div>
            
            <p style={{ marginBottom: '1.5rem', flexGrow: 1 }}>{p.desc}</p>
            
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {p.tech.map(t => (
                <span key={t} style={{ fontSize: '0.8rem', color: 'var(--accent)' }}>#{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Projects;
