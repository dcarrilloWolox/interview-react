import React from 'react';

import menuSvg from '../../../Assets/menu.svg';
import logoPng from '../../../Assets/logo.png';
import MenuItem from './components/MenuItem';

import  './styles.css';

const menuItems = [
  { label: 'home', link: '/' },
  { label:'our focus', link: '/#ourFocus' },
  { label: 'contact', link:'/#contact' }
];

const renderItem = item => (<MenuItem label={item.label} link={item.label} />);
function Header() {
  const itemsToRender = menuItems.map(renderItem);
  return (
    <header className="header-container">
      <img className="logo" src={logoPng} alt="logo"/>
      <ul className="menu-container">
        {itemsToRender}
      </ul>
      <img className="image-menu" src={menuSvg} alt="menu"/>
    </header>
  );
}

export default Header;
