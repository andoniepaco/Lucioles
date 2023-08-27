import React, { useState } from 'react';
import { Menu, Avatar } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';
import { NavBarData } from './NavBarData';
import './NavBar.css';

const NavbarItems = NavBarData.map((item, index) => ({
    key: String(index + 1),
    icon: item.icon,
    label: item.title,
    path: item.path, 
    cName:item.cName,
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
            <a className={item.cName} href={item.path}>{item.label}</a>
          </Menu.Item>
        ))}
          <Menu.Item key="avatar" >
          <Avatar
    size={{
      xs: 24,
      sm: 32,
      md: 40,
      lg: 64,
      xl: 80,
      xxl: 100,
    }}
    icon={<AntDesignOutlined />}></Avatar>
          </Menu.Item>
      </Menu>
    );
  };
  
export default NavBar;