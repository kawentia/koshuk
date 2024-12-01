import React, { useContext } from 'react';
import logo from './logo.svg';
import { FaTimes } from 'react-icons/fa';
import { social, links } from './data';
import './index.css';
import { AppContext } from './context';

const Sidebar = () => {
  const { isSideBarOpen, closeSideBar } = useContext(AppContext);

  return (
    <aside className={`sidebar ${isSideBarOpen ? 'show-sidebar' : ''}`}>
      <div className='sidebar-header'>
        <img src={logo} alt="logo" className="logo" />
        <button
          className='close-btn'
          onClick={closeSideBar}
          aria-label={isSideBarOpen ? "Close Sidebar" : "Open Sidebar"} // Добавляем aria-label
        >
          <FaTimes />
        </button>
      </div>
      <ul className='links'>
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url} title={text}> {/* Добавляем title */}
                {icon}{text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className='social-icons'>
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url} title={`Follow us on ${url.split('//')[1].split('.')[0]}`}> {/* Добавляем title */}
                {icon}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;