import { Github, Linkedin, Twitter, Code2 } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar glass">
      <div className="navbar-content">
        <div className="logo">Manshi<span className="accent">Bhatt</span></div>
        <div className="nav-links">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#achievements">Achievements</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="social-links">
          <a href="https://github.com/manshibhatt" target="_blank" rel="noreferrer"><Github size={20} /></a>
          <a href="https://linkedin.com/in/manshi-bhatt-65782024b" target="_blank" rel="noreferrer"><Linkedin size={20} /></a>
          <a href="https://leetcode.com/Manshi22/" target="_blank" rel="noreferrer"><Code2 size={20} /></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
