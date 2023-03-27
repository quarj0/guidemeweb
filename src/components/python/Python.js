// import { useState } from "react";
import { Link } from "react-router-dom";

import Sidebar from "../python/SideBar";
import "./Python.css";

function Python() {

  
  return (
   
      <div className="Pymain">
        <Sidebar />
        <div className="Pycontainer">
          <h1 className="Pytitle">My React App</h1>
          <p className="info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="btnGroup">
            <Link className="Prev">
              <i className="bi-chevron-left"></i>Previous
            </Link>
            <Link className="Next">
              Next<i className="bi-chevron-right"></i>
            </Link>
          </div>
        </div>
      </div>

  );
};
export default Python;
