import * as React from 'react';

interface Props {
  currentSection: number | string;
}

export const NavBar: React.FC<Props> = ({currentSection}) => {
  const handleClick = (e: any) => {
    let section = e.target.getAttribute('data-name');
    window.location.replace(`#${section}`);
  }

  window.addEventListener('scroll', handleClick);

  return (
    <nav id="navbar">
      <ul>
        <li>
          <main className={`dot ${currentSection === 0 ? 'active' : ''}`} data-name="home" onClick={handleClick}>
            <span>Home</span>
          </main>
        </li>
        <li>
          <main className={`dot ${currentSection === 0.25 ? 'active' : ''}`} data-name="about" onClick={handleClick}>
            <span>About</span>
          </main>
        </li>
        <li>
          <main className={`dot ${currentSection === 0.5 ? 'active' : ''}`} data-name="projects" onClick={handleClick}>
            <span>Projects</span>
          </main>
        </li>
        <li>
          <main className={`dot ${currentSection === 0.75 ? 'active' : ''}`} data-name="contact" onClick={handleClick}>
            <span>Contact</span>
          </main>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;