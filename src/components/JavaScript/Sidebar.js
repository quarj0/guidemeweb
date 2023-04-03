import React from 'react'

import {SidebarData} from '../../JS/JsLessons'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
   <>
   <section>
      <div className="sidebar">
        <h3>JavaScript</h3>
        {SidebarData.map((item, key) => {
          return (
            <div key={key}>
              <Link to={item.path}>
                <h4>{item.title}</h4>
              </Link>
            </div>
          )
        })}
      </div>
   </section>
   </>
  )
}

export default Sidebar