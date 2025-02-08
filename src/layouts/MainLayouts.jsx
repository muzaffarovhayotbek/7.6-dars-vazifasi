import React from 'react';
import './layout.css';
import { NavLink } from 'react-router-dom';
function MainLayouts({ children }) {
  return (
    <div className="layout-header">
      <header>
        <div className="container flex flex-col  rounded-md p-2 mx-auto">
          <nav className="bg-black p-4 text-white rounded-md">
            <ul className="flex items-center justify-evenly">
              <li>
                <NavLink to="/">Home page</NavLink>
              </li>

              <li>
                <NavLink to="firstExam">firstExam</NavLink>
              </li>
              <li>
                <NavLink to="post">Post</NavLink>
              </li>
              <li>
                <NavLink to="threeExam">Three Exam</NavLink>
              </li>
              <li>
                <NavLink to="updateInformation">Update information</NavLink>
              </li>
              <li>
                <NavLink to="/DeleteData">Delete data</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {children}
      <footer></footer>
    </div>
  );
}

export default MainLayouts;
