import * as React from 'react';
import * as background from './images/background3.png';
import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

import NavBar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';

// interface Props {

// }

interface State {
  scrollPosition: string | number;
}

class App extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      scrollPosition: 0
    }

    this.scrollEvent = this.scrollEvent.bind(this);
  }

  scrollEvent(e: any) {
    let scrollPercentage = e.target.scrollTop/e.target.scrollHeight;
    if (scrollPercentage === 0 || scrollPercentage === 0.25 || scrollPercentage === 0.5 || scrollPercentage === 0.75) {
      this.setState({scrollPosition: scrollPercentage});
    }
  }

  componentDidMount() {
    const element: any = '.background';
    VanillaTilt.init(document.querySelector(element), {
      max: 2,
      speed: 50,
      "full-page-listening": true,
      gyroscope: true,
      reset: false,
    });
  }

  render() {
    return (
      <div className="main" onScroll={this.scrollEvent}>
        <img className="background" alt="abstract background" src={background}/>
        <NavBar currentSection={this.state.scrollPosition}/>
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;