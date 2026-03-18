import { Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" style={{ alignItems: 'center', textAlign: 'center' }}>
      <h2 className="section-title" style={{ margin: '0 auto 3rem auto' }}>Get In Touch</h2>
      <div className="glass" style={{ padding: '3rem', width: '100%', maxWidth: '600px' }}>
        <p style={{ marginBottom: '2rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
          I am actively seeking new roles and freelance opportunities. 
          Whether you have a question, a potential project to discuss, or just want to say hi, my inbox is always open!
        </p>
        <a href="mailto:bhattmanshi66@gmail.com" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem', padding: '1rem 3rem', background: 'var(--accent)', color: '#000', fontWeight: 'bold', borderRadius: '4px', fontSize: '1.2rem' }}>
          <Mail size={20} /> Say Hello
        </a>
      </div>
    </section>
  );
};
export default Contact;
