import { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";

import "../styles/Python.css";

const tutorials = [
  {
    id: 1,
    title: "Introduction",
    content: "This is an introduction to Python.",
    code: "print('Hello, world!')",
  },
  {
    id: 2,
    title: "Syntax",
    content: "This is a lesson on Python syntax.",
    code: "if 5 > 2:\n  print('Five is greater than two!')",
  },
  {
    id: 3,
    title: "Comments",
    content: "This is a lesson on commenting in Python.",
    code: "# This is a comment\nprint('Hello, world!')",
  },
  {
    id: 4,
    title: "Python Variables",
    content: "This is a lesson on Python variables.",
    code: "x = 5\ny = 'John'\nprint(x)\nprint(y)",
  },
  {
    id: 5,
    title: "Variable names",
    content: "This is a lesson on naming variables in Python.",
    code:
      "# Legal variable names\nmyvar = 'John'\nmy_var = 'John'\n_my_var = 'John'\nmyVar = 'John'\nMYVAR = 'John'\nmyvar2 = 'John'\n\n# Illegal variable names\n2myvar = 'John'\nmy-var = 'John'\nmy var = 'John'",
  },
  {
    id: 6,
    title: "Assigning multiple Values",
    content: "This is a lesson on assigning multiple values in Python.",
    code: "x, y, z = 'Orange', 'Banana', 'Cherry'\nprint(x)\nprint(y)\nprint(z)",
  },
  {
    id: 7,
    title: "Python Datatypes",
    content: "This is a lesson on Python datatypes.",
    code:
      "# Numbers\nx = 1\ny = 2.8\nz = 1j\n\n# Strings\na = 'Hello, World!'\nb = \"Hello, World!\"\nc = '''Hello, World!'''\nd = \"\"\"Hello, World!\"\"\"\n\n# Booleans\ne = True\nf = False\n\n# Lists\ng = ['apple', 'banana', 'cherry']\n\n# Tuples\nh = ('apple', 'banana', 'cherry')\n\n# Sets\ni = {'apple', 'banana', 'cherry'}\n\n# Dictionaries\nj = {'name': 'John', 'age': 36}",
  },
  // more tutorials go here
];

function PythonTutorial() {
  const [currentTutorial, setCurrentTutorial] = useState(tutorials[0]);
  const [code, setCode] = useState(currentTutorial.code);

  const [output, setOutput] = useState("");

const handleRun = () => {
  try {
    // Use eval() to execute the Python code and capture the output
    const newOutput = eval(code);
    setOutput(newOutput);
  } catch (error) {
    setOutput("Error: " + error.message);
  }
};


  const handleCodeChange = (value) => {
    setCode(value);
  };


  const handleNext = () => {
    const currentIndex = tutorials.findIndex(
      (tutorial) => tutorial.id === currentTutorial.id
    );
    if (currentIndex < tutorials.length - 1) {
      setCurrentTutorial(tutorials[currentIndex + 1]);
      setCode(tutorials[currentIndex + 1].code);
    }
  };

  const handlePrevious = () => {
    const currentIndex = tutorials.findIndex(
      (tutorial) => tutorial.id === currentTutorial.id
    );
    if (currentIndex > 0) {
      setCurrentTutorial(tutorials[currentIndex - 1]);
      setCode('');
      setOutput('');
    }
  };

  return (
    <div className="container">
      <div className="sidebar">
        <ul>
          {tutorials.map((tutorial) => (
            <li
              key={tutorial.id}
              className={
                currentTutorial.id === tutorial.id
                  ? "tutorial active"
                  : "tutorial"
              }
              onClick={() => {
                setCurrentTutorial(tutorial);
                setCode(tutorial.code);
                setOutput('');
              }}
            >
              {tutorial.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="content">
        <h1>{currentTutorial.title}</h1>
        <p>{currentTutorial.content}</p>
        <div className="code-editor">
          <textarea value={code} onChange={(value) => handleCodeChange(value)}></textarea>

          <button onClick={handleRun}>Run</button>
        </div>
        <div className="output">{output}</div>
        <div className="navigation">
          <button onClick={handlePrevious}>Previous</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default PythonTutorial;