import React from 'react';
import { Link } from 'react-router-dom';
import Python from '../images/python.png';
import DataScince from '../images/analysis.png';
import Script from '../images/script';
function Home() {
  return (
    <section>
      <h2>Our Tutorials</h2>
      <div className="tutorial">
        <img src={Python} alt="Tutorial 1" />
        <h3>Tutorial 1</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <Link to="/tutorial1"><button>Read More</button></Link>
      </div>
      <div className="tutorial">
        <img src={DataScince} alt="Tutorial 2" />
        <h3>Tutorial 2</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <Link to="/tutorial2"><button>Read More</button></Link>
      </div>
      <div className="tutorial">
        <img src={Script} alt="Tutorial 3" />
        <h3>Tutorial 3</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <Link to="/tutorial3"><button>Read More</button></Link>
      </div>
    </section>
  );
}

export default Home;
