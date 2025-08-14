import React from 'react';
import { FaChartBar, FaRegComments, FaSignInAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-container">
        <div className="footer-links">
          <nav>
            <ul>
              <li>
                <Link to="/">
                  <FaRegComments />
                  <span>Threads</span>
                </Link>
              </li>
              <li>
                <Link to="/leaderboards">
                  <FaChartBar />
                  <span>Leaderboards</span>
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <FaSignInAlt />
                  <span>Login</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
