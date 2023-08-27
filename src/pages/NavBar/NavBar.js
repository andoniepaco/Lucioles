import React, { useState } from 'react';
import { Menu } from 'antd';
import { NavBarData } from './NavBarData';
import './NavBar.css';

const NavbarItems = NavBarData.map((item, index) => ({
    key: String(index + 1),
    icon: item.icon,
    label: item.title,
    path: item.path, 
  }));
  const NavBar = () => {
    const [current, setCurrent] = useState('1'); // Initial selected key
  
    const onClick = (e) => {
      console.log('click ', e);
      setCurrent(e.key);
    };
  
    return (
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        className="nav-bar-items"
        items={NavbarItems}
      >
        {NavbarItems.map((item) => (
          <Menu.Item
            key={item.key}
            icon={item.icon}
            className='nav-bar-items'// Add 'active' class if current key matches
          >
            <a href={item.path}>{item.label}</a>
          </Menu.Item>
        ))}
      </Menu>
    );
  };
  
export default NavBar;