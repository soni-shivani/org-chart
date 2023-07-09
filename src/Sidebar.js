import React from 'react';
import logo from './logo.svg';
import { useGlobalContext } from './context';
import { RxCaretRight,RxCaretLeft} from 'react-icons/rx';
import { social, links } from './data-list';

const Sidebar = () => {

  const {isToggle, toggle} = useGlobalContext();

  return (
    <aside className={`${isToggle ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <div className='sidebar-header'>
        <img src={logo} className='logo' alt='react-logo' />
        <button className='close-btn' onClick={toggle}>
          {isToggle? <RxCaretLeft />: <RxCaretRight />}
        </button>
      </div>
      <ul className='links'>
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {isToggle ? text :''}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className='social-icons'>
        {social.map((link) => {
          const { id, url, icon ,text } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {`${isToggle ? text :''}`}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
