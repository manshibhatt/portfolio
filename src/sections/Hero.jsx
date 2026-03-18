const Hero = () => {
  return (
    <section id="hero" style={{ justifyContent: 'center', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '100%' }}>
        
        {/* Text Content */}
        <div className="glass" style={{ padding: '3rem', maxWidth: '650px', display: 'flex', flexDirection: 'column', flex: 1 }}>
          <h1 style={{ fontSize: '4rem', marginBottom: '1rem', background: 'linear-gradient(to right, #fff, #a0a0b0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Manshi Bhatt<br />
            <span style={{ fontSize: '2.5rem', color: 'var(--accent)', WebkitTextFillColor: 'initial', background: 'none' }}>
              Frontend Developer
            </span>
          </h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
            I optimize performance, build responsive UI components, and create seamless user experiences. 
            Bringing designs to life with a strong foundation in Data Structures and modern web technologies.
          </p>
          <div style={{ display: 'flex', gap: '1rem', zIndex: 2 }}>
            <a href="#projects" style={{ padding: '0.8rem 2rem', background: 'var(--accent)', color: '#000', fontWeight: 'bold', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              View Work
            </a>
            <a href="#contact" style={{ padding: '0.8rem 2rem', border: '1px solid var(--accent)', color: 'var(--accent)', fontWeight: 'bold', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Contact Me
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
export default Hero;
