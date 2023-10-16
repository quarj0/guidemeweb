import { useState } from "react";
import { Link } from "react-router-dom";

import git from "../assets/images/git.jpg";
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import js from "../assets/images/js.png";
import ML from "../assets/images/ML.png";
import Kali from "../assets/images/kali.png";
import python from "../assets/images/python.png";
import visual from "../assets/images/python-visual.png";
import cryptography from "../assets/images/cryptography.jpeg";
import Reactlogo from "../assets/images/logo512.png";
import SQL from "../assets/images/sql.png";
import gif from "../assets/images/video.gif";
import SearchBar from "./SearchBar.jsx";
import tutorials from "./Tutorials.jsx";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Home = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (searchTerm) => {
    const results = tutorials.filter((tutorial) =>
      tutorial.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div>
      <Navbar />
      <main>
        <div className="landing-page">
          <div className="landing-page-header">
            <h1>Welcome To Guide Me Learn</h1>
            <p>Get a skill today and be a better you tomorrow.</p>
            <p>
              Start your journey to learn programming languages, web
              development, data science, and more.
            </p>
            <SearchBar onSearch={handleSearch} />
            <div className="searched-result">
              {searchResults.map((result) => (
                <div key={result.title} className="tutorial-card-content">
                  <h3>{result.title}</h3>
                  <p>{result.description} </p>
                  <p>{result.content}</p>

                  <Link className="btn-start-learning" to={result.link}>
                    {result.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="landing-page-tutorials">
            <h2>Popular Tutorials</h2>
            <div className="tutorial-card">
              <div className="tutorial-card-img">
                <img src={python} alt="python logo" />
              </div>
              <div className="tutorial-card-content">
                <h3>Python</h3>
                <p>Learn Python programming language.</p>
                <Link to="/python" className="btn-start-learning">
                  Learn
                </Link>
                <Link to="/pythonreference" className="btn-reference">
                  Reference
                </Link>
              </div>
            </div>

            <div className="tutorial-card">
              <div className="tutorial-card-img">
                <img src={ML} alt="machine-learning img" />
              </div>
              <div className="tutorial-card-content">
                <h3>Python Machine Learning</h3>
                <p>
                  Learn how to build machine learning models using Python
                  programming language.
                </p>
                <Link to="/python" className="btn-start-learning">
                  Learn
                </Link>
                <Link
                  to="/machine-learning-reference"
                  className="btn-reference"
                >
                  Reference
                </Link>
              </div>
            </div>

            <div className="tutorial-card">
              <div className="tutorial-card-img">
                <img src={js} alt="js-icon" />
              </div>
              <div className="tutorial-card-content">
                <h3>JavaScript</h3>
                <p>Learn JavaScript programming language.</p>
                <p>Learn how to make web applications using JavaScript.</p>
                <Link to="/javascript" className="btn-start-learning">
                  Learn
                </Link>
                <Link to="/javascript-reference" className="btn-reference">
                  Reference
                </Link>
              </div>
            </div>

            <div className="tutorial-card">
              <div className="tutorial-card-img">
                <img src={visual} alt="python-visualization img" />
              </div>
              <div className="tutorial-card-content">
                <h3>Python Data Visualization</h3>
                <p>
                  Learn how to visualize data using Python programming language.
                  A great way to learn data science.
                </p>
                <Link to="/python-visualization" className="btn-start-learning">
                  Learn
                </Link>
                <Link to="/py-visual-reference" className="btn-reference">
                  Reference
                </Link>
              </div>
            </div>

            <div className="tutorial-card">
              <div className="tutorial-card-img">
                <img src={SQL} alt="Structred Query Language img" />
              </div>
              <div className="tutorial-card-content">
                <h3>SQL Database Language </h3>
                <p>
                  Learn the basics of SQL programming language. And how to use
                  it to manage databases.
                </p>
                <Link to="/sql" className="btn-start-learning">
                  Learn
                </Link>
                <Link to="/sql-reference" className="btn-reference">
                  Reference
                </Link>
              </div>
            </div>

            <div className="tutorial-card">
              <div className="tutorial-card-img">
                <img src={Kali} alt="Kali linux operating system img" />
              </div>
              <div className="tutorial-card-content">
                <h3>Kali Linux </h3>
                <p>
                  Learn the basics of Kali Linux operating system. And how to
                  use it to perform penetration testing.
                </p>
                <Link to="/kali-linux" className="btn-start-learning">
                  Learn
                </Link>
                <Link to="/kali-linux-reference" className="btn-reference">
                  Reference
                </Link>
              </div>
            </div>

            <div className="tutorial-card">
              <div className="tutorial-card-img">
                <img src={cryptography} alt="cryptography img" />
              </div>
              <div className="tutorial-card-content">
                <h3>Cryptography</h3>
                <p>
                  Learn how to encrypt and decrypt data using cryptography. The
                  art of writing and solving codes.
                </p>
                <Link to="/cryptography" className="btn-start-learning">
                  Learn
                </Link>
                <Link to="/crptography-reference" className="btn-reference">
                  Reference
                </Link>
              </div>
            </div>
            <div className="tutorial-card">
              <div className="tutorial-card-img">
                <img src={html} alt="html logo" />
              </div>
              <div className="tutorial-card-content">
                <h3>HTML</h3>
                <p>
                  Learn how to create web pages using HTML. The building blocks
                  of the web.
                </p>
                <Link to="/html" className="btn-start-learning">
                  Learn
                </Link>
                <Link to="/htmlreferences" className="btn-reference">
                  Reference
                </Link>
              </div>
            </div>
            <div className="tutorial-card">
              <div className="tutorial-card-img">
                <img src={css} alt="CSS logo" />
              </div>
              <div className="tutorial-card-content">
                <h3>CSS</h3>
                <p>
                  Learn how to style web pages using CSS. The language for
                  styling web pages.
                </p>
                <Link to="/css" className="btn-start-learning">
                  Learn
                </Link>
                <Link to="/cssreference" className="btn-reference">
                  Reference
                </Link>
              </div>
            </div>
            <div className="tutorial-card">
              <div className="tutorial-card-img">
                <img src={Reactlogo} alt="react logo" />
              </div>
              <div className="tutorial-card-content">
                <h3>React</h3>
                <p>
                  Learn how to create web applications using React. A JavaScript
                  library for building user interfaces.
                </p>
                <Link to="/react" className="btn-start-learning">
                  Learn
                </Link>
                <Link to="/reactreference" className="btn-reference">
                  Reference
                </Link>
              </div>
            </div>
            <div className="tutorial-card">
              <div className="tutorial-card-img">
                <img src={git} alt="nodejs logo" />
              </div>
              <div className="tutorial-card-content">
                <h3>Git</h3>
                <p>
                  Learn how to use Git and GitHub. A version control system for
                  tracking changes in computer files.
                </p>
                <Link to="/git" className="btn-start-learning">
                  Learn
                </Link>
                <Link to="/gitreference" className="btn-reference">
                  Reference
                </Link>
              </div>
            </div>
          </div>
        </div>
        <section className="gifarea">
          <div className="gif">
            <div className="tutorial-card-content">
              <h2>Learn how to code for free </h2>
              <div className="tutorial-card-img">
                <img src={gif} alt="coding gif" className="gif" />
              </div>
              <p className="gif-text">
                <i>&quot;The best way to learn to code is to code.&quot;</i>
                <br />
                <br />
                <i>From great responsibilities comes great opportunities.</i>
              </p>
            </div>
            <p id="contact">
              If you have any questions, please contact us at <br />
              <a href="mailto:guidemelearn.info@gmail.com" className="mail">
                Guide Me Learn
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
