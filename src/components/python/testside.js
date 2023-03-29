import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopicSection from './TopicSection.js';
import PythonPage from './PythonPage.js';
import JavascriptPage from './JavascriptPage.js';
import KaliLinuxPage from './KaliLinuxPage.js';
import HtmlPage from './HtmlPage';
import CssPage from './CssPage.js';
import ReactPage from './ReactPage.js';

import "./testt.css"

function TestSide() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/python">
            <PythonPage />
          </Route>
          <Route path="/javascript">
            <JavascriptPage />
          </Route>
          <Route path="/kali-linux">
            <KaliLinuxPage />
          </Route>
          <Route path="/html">
            <HtmlPage />
          </Route>
          <Route path="/css">
            <CssPage />
          </Route>
          <Route path="/react">
            <ReactPage />
          </Route>
          <Route path="/">
            <div className="topic-sections">
              <TopicSection
                title="Python"
                description="Learn to code with Python, a powerful programming language used for everything from web development to data analysis."
                image="/python-image.jpg"
                resources={[
                  {
                    title: 'Python Documentation',
                    url: 'https://docs.python.org/3/',
                  },
                  {
                    title: 'Python for Data Science Handbook',
                    url: 'https://jakevdp.github.io/PythonDataScienceHandbook/',
                  },
                  {
                    title: 'Python Web Development with Django',
                    url: 'https://www.djangoproject.com/',
                  },
                ]}
                link="/python"
              />
              <TopicSection
                title="JavaScript"
                description="Get started with JavaScript, the programming language of the web. Learn to build interactive web applications and dynamic user interfaces."
                image="/javascript-image.jpg"
                resources={[
                  {
                    title: 'JavaScript Documentation',
                    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
                  },
                  {
                    title: 'The Modern JavaScript Tutorial',
                    url: 'https://javascript.info/',
                  },
                  {
                    title: 'React Documentation',
                    url: 'https://reactjs.org/docs/getting-started.html',
                  },
                ]}
                link="/javascript"
              />
              <TopicSection
                title="Kali Linux"
                description="Kali Linux is a powerful tool used for penetration testing and digital forensics. Learn how to use Kali Linux to test and secure your own network."
                image="/kali-linux-image.jpg"
                resources={[
                  {
                    title: 'Kali Linux Documentation',
                    url: 'https://www.kali.org/docs/',
                  },
                  {
                    title: '                Kali Linux Revealed Book',
                    url: 'https://kali.training/downloads/Kali-Linux-Revealed-1st-edition.pdf',
                  },
                ]}
                link="/kali-linux"
              />
              <TopicSection
                title="HTML"
                description="HTML is the foundation of the web. Learn to build web pages with HTML, the markup language used to create content on the internet."
                image="/html-image.jpg"
                resources={[
                  {
                    title: 'HTML Documentation',
                    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
                  },
                  {
                    title: 'HTML & CSS: Design and Build Websites Book',
                    url: 'https://www.amazon.com/HTML-CSS-Design-Build-Websites/dp/1118008189',
                  },
                  {
                    title: 'Bootstrap Documentation',
                    url: 'https://getbootstrap.com/docs/5.0/getting-started/introduction/',
                  },
                ]}
                link="/html"
              />
              <TopicSection
                title="CSS"
                description="CSS is the styling language used to make web pages look great. Learn how to use CSS to add colors, fonts, and layouts to your HTML pages."
                image="/css-image.jpg"
                resources={[
                  {
                    title: 'CSS Documentation',
                    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
                  },
                  {
                    title: 'CSS Tricks',
                    url: 'https://css-tricks.com/',
                  },
                  {
                    title: 'Sass Documentation',
                    url: 'https://sass-lang.com/documentation',
                  },
                ]}
                link="/css"
              />
              <TopicSection
                title="React"
                description="React is a JavaScript library used to build user interfaces. Learn how to use React to create dynamic, responsive web applications."
                image="/react-image.jpg"
                resources={[
                  {
                    title: 'React Documentation',
                    url: 'https://reactjs.org/docs/getting-started.html',
                  },
                  {
                    title: 'React Native Documentation',
                    url: 'https://reactnative.dev/docs/getting-started',
                  },
                  {
                    title: 'React Router Documentation',
                    url: 'https://reactrouter.com/web/guides/quick-start',
                  },
                ]}
                link="/react"
              />
            </div>
          </Route>
        </Routes>
      </div>
    </Router>
  );

}
        
export default TestSide;
