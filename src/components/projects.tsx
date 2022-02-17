import * as React from 'react';
import projects from '../util/project-info';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-cards';
import ProjectCard from './project-card';

export const Projects = () => {
  const options = {
    reverse: true,
    glare: true,
    max: 10,
    gyroscope: false
  }

  return (
    <section id="projects">
      <div className="projects-content">
        <h1 className="section-title">
            Projects
        </h1>
        <div className="separator-container">
          <span className="top-separator"></span>
          <span className="bottom-separator"></span>
        </div>
        <div className="card-container">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards, Autoplay]}
            className="mySwiper"
            loop={true}
            loopAdditionalSlides={2}
            autoplay={{delay: 3000, pauseOnMouseEnter: true, disableOnInteraction: false}}
          >
            {projects.map((element, i) => {
            return (
              <SwiperSlide key={i}>
                <ProjectCard project={element} options={options}/>
              </SwiperSlide>
            );
            })}
          </Swiper>
          
        </div>
      </div>
    </section>
  );
}

export default Projects;