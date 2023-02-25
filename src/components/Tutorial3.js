import React from 'react';
import { Link } from 'react-router-dom';

function Tutorial3() {
  return (
    <div className="tutorial-page">
      <header className="tutorial-header">
        <h1>Kali Linux Tutorial</h1>
      </header>
      <main className="tutorial-content">
        <p>
          In this tutorial, we will be learning how to use Kali Linux to perform
          vulnerability assessments on a target website. We will be using a
          variety of tools and techniques to identify and exploit weaknesses in
          the website's security.
        </p>
        <p>
          Before we begin, you will need to have Kali Linux installed on your
          machine. If you haven't already done so, you can download Kali Linux
          from the official website:
        </p>
        <a href="https://www.kali.org/downloads/">https://www.kali.org/downloads/</a>
        <p>
          Once you have Kali Linux installed, we can begin the tutorial by
          launching the Metasploit Framework and scanning our target website
          for vulnerabilities.
        </p>
      </main>
      <footer className="tutorial-footer">
        <Link to="/">Back to Tutorials</Link>
      </footer>
    </div>
  );
}

export default Tutorial3;
