import React from 'react';
import './PythonCheatsheet.css'; // Import CSS file for styling

const PythonCheatsheet = () => {
  return (
    <div className="cheatsheet-container">
      <h2 className="cheatsheet-header">Python Cheatsheet</h2>
      <ul className="cheatsheet-list">
        <li className="cheatsheet-subheader">Data Types:</li>
        <ul>
          <li>int: integer</li>
          <li>float: floating-point number</li>
          <li>str: string</li>
          <li>bool: boolean (True/False)</li>
        </ul>
        <li className="cheatsheet-subheader">Variables:</li>
        <ul>
          <li>Declaring a variable: variable_name = value</li>
          <li>Naming conventions: variable names should be descriptive and use lowercase letters with underscores between words</li>
        </ul>
        <li className="cheatsheet-subheader">Operators:</li>
        <ul>
          <li>Arithmetic operators: +, -, *, /, %</li>
          <li>Comparison operators: ==, !=, {'<'} , {'>'}, {'<='}, {'>='}</li>
          <li>Logical operators: and, or, not</li>
        </ul>
        <li className="cheatsheet-subheader">Control Flow:</li>
        <ul>
          <li>if statements: if condition:</li>
          <li>else statements: else:</li>
          <li>elif statements: elif condition:</li>
          <li>for loops: for variable in iterable:</li>
          <li>while loops: while condition:</li>
        </ul>
        <li className="cheatsheet-subheader">Functions:</li>
        <ul>
          <li>Defining a function: def function_name(parameter1, parameter2):</li>
          <li>Calling a function: function_name(argument1, argument2)</li>
        </ul>
        <li className="cheatsheet-subheader">Modules:</li>
        <ul>
          <li>Importing a module: import module_name</li>
          <li>Importing specific functions from a module: from module_name import function_name</li>
        </ul>
        <li className="cheatsheet-subheader">File Handling:</li>
        <ul>
          <li>Opening a file: file = open('filename', 'r')</li>
          <li>Reading a file: file.read()</li>
          <li>Writing to a file: file.write('text')</li>
          <li>Closing a file: file.close()</li>
        </ul>
      </ul>
    </div>
  );
};

export default PythonCheatsheet;
