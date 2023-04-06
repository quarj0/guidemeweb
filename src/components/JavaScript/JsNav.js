import React from 'react';
import { Routes, Route } from 'react-router-dom';

import JSIntroduction from '../../pages/Introduction';
import JsArrays from '../../pages/arrays';
import JsObjects from '../../pages/Objects';
import JsLoops from '../../pages/loops';
import JsFunctions from '../../pages/functions';
import JsBasics from '../../pages/Basic';
import JSComments from '../../pages/Comments';
import JsControl from '../../pages/Control';
import JsClosures from '../../pages/Closures';
import JSArraymethods from '../../pages/Arraymethods';
import JsOperators from '../../pages/Operators';
import JsFetch from  "../../pages/Fetch"


const JsNavPage = () => {
  return (
    <>
   <section className="js-nav">
        <div className="js-nav__container">
        <Routes>
            <Route path="/javascript/introduction" element={<JSIntroduction />} />
            <Route path="/javascript/comments" element={<JSComments />} />
            <Route path="/javascript/arrays" element={<JsArrays />} />
            <Route path="/javascript/objects" element={<JsObjects />} />
            <Route path="/javascript/loops" element={<JsLoops />} />
            <Route path="/javascript/functions" element={<JsFunctions />} />
            <Route path="/javascript/basics" element={<JsBasics />} />
            <Route path="/javascript/objects" element={<JsObjects />} />
            <Route path="/javascript/operators" element={<JsOperators />} />
            <Route path="/javascript/closures" element={<JsClosures />} />
            <Route path="/javascript/arraymethods" element={<JSArraymethods />} />
            <Route path="/javascript/control" element={<JsControl />} />
            <Route path="/javascript/fetch" element={<JsFetch />} />
        </Routes>
        </div>
    </section>

    </>
  )
}

export default JsNavPage;