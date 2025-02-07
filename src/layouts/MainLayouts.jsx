import React from 'react';
import './layout.css';
import { NavLink } from 'react-router-dom';
function MainLayouts({ children }) {
  return (
    <div>
      <header className="header">
        <div className="container header__container">
          <div className="header-list">
            <NavLink to="/">Home page</NavLink>
            <NavLink to="/FirstExam">Foydalanuvchilar ro‘yxatini olish page</NavLink>
            <NavLink to="/post">post page</NavLink>
            <NavLink to="/post">update page</NavLink>
          </div>
        </div>
      </header>

      {children}
      <footer></footer>
    </div>
  );
}

export default MainLayouts;
