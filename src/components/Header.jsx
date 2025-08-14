import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../assets/avatar.svg';

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-container">
        <div className="header-logo">
          <Link to="/">Forum Diskusi</Link>
        </div>

        <div className="header-actions">
          <div className="user-avatar">
            <img src={avatar} alt="User Avatar" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
