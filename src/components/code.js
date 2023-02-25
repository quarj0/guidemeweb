import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const PythonScript = () => {
  const [script, setScript] = useState('');
  const [output, setOutput] = useState('');

  const runScript = () => {
    // Use a sandboxed environment like Pyodide to run the Python code
    // and return the output
    const pyodide = window.pyodide;
    pyodide.runPython(script);
    const result = pyodide.globals.get('__output__');
    setOutput(result);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2>Python Script</h2>
          <textarea
            className="form-control"
            rows="10"
            value={script}
            onChange={(e) => setScript(e.target.value)}
          />
          <button className="btn btn-primary mt-2" onClick={runScript}>Run Script</button>
        </div>
        <div className="col-md-6">
          <h2>Output</h2>
          <SyntaxHighlighter language="python" style={darcula}>
            {output}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default PythonScript;
