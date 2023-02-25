import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Tutorial.css';

// Introduction component
function Introduction() {
  return (
    <div className="tutorial-section">
      <h2>Introduction to Data Analysis</h2>
      <p>
        Data analysis is the process of collecting, 
        cleaning, transforming, and modeling data to 
        discover useful information for business decision-making. 
        The purpose of Data Analysis is to extract useful information 
        from data and taking the decision based upon the data analysis.
      </p>
      <p>
        Data analysis has multiple facets and approaches,
        encompassing diverse techniques under a variety of names,
        and is used in different business, science, and social science domains.
        In today's business world, data analysis plays a role in making
        decisions more scientific and helping businesses operate more effectively.
        </p>
        <p> Importance of Data Analysis</p>
      <ul>
        <li>It helps in making better decisions.</li>
        <li>It helps in identifying the problem.</li>
        <li>It helps in finding the solution.</li>
        <li>It helps in finding the root cause of the problem.</li>
        <li>It helps in finding the best solution.</li>
      </ul>
<p>Types of Data Analysis</p>
      <ul>
        <li>Descriptive Analysis</li>
        <li>Diagnostic Analysis</li>
        <li>Predictive Analysis</li>
        <li>Prescriptive Analysis</li>
      </ul>
      <p>
        Descriptive Analysis: Descriptive analysis is the process of summarizing data using statistics and graphs.
        It is used to describe the data in a meaningful way.
      </p>
      <p>
        Diagnostic Analysis: Diagnostic analysis is the process of identifying the root cause of a problem.
      </p>
      <p>
        Predictive Analysis: Predictive analysis is the process of forecasting future trends based on historical data.
      </p>
      <p>
        Prescriptive Analysis: Prescriptive analysis is the process of finding the best solution to a problem.
      </p>
    </div>
  );
}

// Installation component
function Installation() {
  return (
    <div className="tutorial-section">
      <h2>Installation</h2>
      <p>
        Let's start by installing some libraries and needful tools that we will need for this tutorial.
      </p>
      <p>
            We'll be using Jupyter Notebook for this tutorial.
            </p>
          <p>
            Jupyter Notebook is an open-source web application that allows you to create and share documents that contain live code, equations, visualizations and narrative text.
            </p>
          <p>
            Jupyter Notebook is an interactive computing environment that allows you to write and execute code in your browser.
            </p>
          <p>
            Jupyter Notebook is a is the most popular tool for data science and machine learning.
            And it's free!
            </p>
          <p>
            By the time of writing this article, Jupyter Notebook was the 
            the company's most popular product, with over 12 million users.
            And it's the industry's standard for data science and machine learning.
          </p>
          <p>
            You can install Jupyter Notebook on Windows by typing the following command in your terminal:
            </p>
          <pre>
            <code>
              pip install jupyter-notebook 
            </code>
          </pre>
          <p>
            You can install Jupyter Notebook on Mac by typing the following command in your terminal:
            </p>
          <pre>
            <code>
              pip3 install jupyter-notebook
            </code>
          </pre>
          <p>
            You can install Jupyter Notebook on Linux by typing the following command in your terminal:
            </p>
          <pre>
            <code>
              pip3 install jupyter-notebook
            </code>
          </pre>
      <p>
        Open your terminal and type the following commands:
      </p>
      <pre>
        <code>
          pip install pandas
        </code>
      </pre>
      <pre>
        <code>
          pip install numpy
        </code>
      </pre>
      <pre>
        <code>
          pip install matplotlib
        </code>
      </pre>
      <pre>
        <code>
          pip install seaborn
        </code>
      </pre>
      <p>
        You can also install all of these libraries at once if you're using VS Code or
        PyCharm by typing the following command:
      </p>
      <pre>
        <code>
          pip install pandas numpy matplotlib seaborn
        </code>
      </pre>
      <p>
        If you are using Anaconda, you can install these libraries by typing the following command:
      </p>
      <pre>
        <code>
          conda install pandas numpy matplotlib seaborn
        </code>
      </pre>
      <p>
        If you are using Jupyter Notebook or Google Colab, you can install these libraries by typing the following command:
      </p>
      <pre>
        <code>
          !pip install pandas numpy matplotlib seaborn
        </code>
      </pre>
      <p>
        You can use our inbuilt Python interpreter to run the code in this tutorial.
        Click on the "Run" button to run the code.
      </p>

    </div>
  );
}
// Tutorial Steps component
function TutorialSteps() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  let content;

  switch (step) {
    case 1:
      content = (
        <>
          <h2>
            Knowing our Libraries. 
          </h2>
          <p>Starting with Pandas</p>
          <p>
            Pandas is a Python library used for working with data sets.
            It has functions for analyzing, cleaning, exploring, and manipulating data.
          </p>
          <p>
            Pandas allows us to analyze big data and make conclusions based on statistical theories.
          </p>
          <p>
            Pandas can clean messy data sets, and make them readable and relevant.
          </p>
          <p>
            Pandas can help you answer questions quickly and efficiently by analyzing data from different angles.
          </p>
          <p>
            Pandas can handle thousands of records and manipulate them very easily.
          </p>
          <p>
            Pandas can be used for machine learning.
          </p>
          <p>
            Pandas can be used for data visualization.
          </p>
          <button onClick={nextStep}>Next Step</button>
        </>
      );
      break;
    case 2:
      content = (
        <>
          <h2>Let's work</h2>
          <p>It's time to work with Pandas</p>
          <p>
            We'll start by reading files using Pandas.
          </p>
          <pre>
            <code>
              import pandas as pd
            </code>
          </pre>
          <p>
            Pandas is usually imported as pd.
          </p>
          <p>
            We can use the pandas.read_csv() method to read csv files.
          </p>
          <pre>
            <code>
              df = pd.read_csv('data.csv')
            </code>
          </pre>
          <p>
            We can use the pandas.read_excel() method to read excel files.
          </p>
          <pre>
            <code>
              df = pd.read_excel('data.xlsx')
            </code>
          </pre>
          <p>
            We can use the pandas.read_json() method to read json files.
          </p>
          <pre>
            <code>
              df = pd.read_json('data.json')
            </code>
          </pre>
          <p>
            We can use the pandas.read_html() method to read html files.
          </p>
          <pre>
            <code>
              df = pd.read_html('data.html')
            </code>
          </pre>
          <p>
            We can use the pandas.read_sql() method to read sql files.
          </p>
          <pre>
            <code>
              df = pd.read_sql('data.sql')
            </code>
          </pre> 
          <button onClick={nextStep}>Next Step</button>
        </>
      );
      break;
    case 3:
      content = (
        <>
          <h2>Tutorial Step 3</h2>
          <p>Step 3 content goes here.</p>
          <button onClick={nextStep}>Next Step</button>
        </>
      );
      break;
    default:
      content = (
        <>
          <h2>Congratulations, you completed the tutorial!</h2>
          <p>Thank you for learning Python scripting with us.</p>
          <Link to="/">Back to Home</Link>
        </>
      );
  }

  return (
    <div className="tutorial-section">
      {content}
    </div>
  );
}

// Full Tutorial component
function Tutorial3() {
  return (
    <div className="tutorial-page">
      <header className="tutorial-header">
        <h1>Python Basics</h1>
      </header>
      <main className="tutorial-content">
        <Introduction />
        <Installation />
        <TutorialSteps />
      </main>
      <footer className="tutorial-footer">
        <Link to="/">Back to Tutorials</Link>
      </footer>
    </div>
  );
}

export default Tutorial3;