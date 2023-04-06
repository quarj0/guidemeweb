import React from "react";

import elements from "./htmlrefdata";

import "./htmltable.css";

const HtmlTable = () => {
  return (
    <>
      <div className="grid-container">
        <h1 className="html-header">HTML Reference</h1>
        <table>
          <thead>
            <tr>
              <th>Element</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {elements.map((element) => (
              <tr key={element.name}>
                <td>{element.name}</td>
                <td>{element.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default HtmlTable;
