import React from "react";
import JsNavPage from "./JsNav";
import  Sidebar  from "./Sidebar";

const JavaScript = () => {
  return (
    <>
      <section>
        <div className="sidebar">
          <h3>JavaScript</h3>
        </div>
      </section>

      <section>
        <div className="js-nav__container">
          <Sidebar />
        </div>
      </section>

      <section>
        <div className="js-nav__container">
          <JsNavPage />
        </div>
      </section>
    </>
  );
};

export default JavaScript;
