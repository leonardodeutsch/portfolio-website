import * as catwalkLogo from '../images/Catwalk.png';
import * as leagueMatchupLogo from '../images/LeagueMatchup.png';
import * as pantryChefLogo from '../images/PantryChef.png';
import * as SDCLogo from '../images/SDC.png';

const projects = [
  {
    title: 'Pantry Chef',
    logo: pantryChefLogo,
    tech: 'React | HTML/CSS3 | Node.js | Express | PostgreSQL | AWS | Docker',
    description: 'A collaborative cooking recipe application with user specific customization.',
    links: 'https://github.com/hack-curtains/project-gordon-web'
  },
  {
    title: 'SDC',
    logo: SDCLogo,
    tech: 'Node.js | Express | MongoDB | Mongoose | Artillery.io | Loader.io | NGINX | AWS | Docker',
    description: 'Complete scalable back-end system design for a retail website with over 50 million product entries.',
    links: 'https://github.com/Poplin-Devs/products-service'
  },
  {
    title: 'Catwalk',
    logo: catwalkLogo,
    tech: 'React | HTML/CSS3 | Node.js | Express | AWS',
    description: 'A modern, client-facing retail web portal design for an apparel website.',
    links: 'https://github.com/team-soapstone/front-end-capstone'
  },
  {
    title: 'League Matchup',
    logo: leagueMatchupLogo,
    tech: 'React | HTML/CSS3 | MongoDB | Mongoose | Node.js | Express | AWS | Riot Games API',
    description: 'An application for the popular videogame League of Legends, where players can come together and share their knowledge on specific champion matchups.',
    links: 'https://github.com/leonardodeutsch/league-matchup'
  }
];

export default projects;