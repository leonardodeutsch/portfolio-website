import * as React from 'react';
import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import * as githubLogo from '../images/Github.png';


interface Project {
  title: string;
  tech: string;
  description: string;
  links: string;
  logo: any;
}
interface Props {
  project: Project;
  options?: {};
}

export const ProjectCard: React.FC<Props> = (props) => {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current!, options);
  }, [options]);

  return (
    <div className="project-card" ref={tilt} {...rest}>
      <div className="project-card-image">
        <img src={props.project.logo} alt="Project Logo"></img>
      </div>
      <div className="project-card-header">
        <h2>{props.project.title} </h2>
        <h3>{props.project.tech}</h3>
      </div>
      <div className="project-card-content"> 
        <p>{props.project.description}</p>
      </div>
      <div className="project-card-links">
        <a className="link-button" href={props.project.links} target="_blank">
          <img src={githubLogo} alt="Github Logo"></img>
          <span className="link-button-name">Github</span>
        </a> 
      </div>
      <div className="js-tilt-glare" >
        <div className="js-tilt-glare-inner"></div>
      </div>
    </div>
  );
}

export default ProjectCard;