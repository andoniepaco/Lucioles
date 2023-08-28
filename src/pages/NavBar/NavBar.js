import React, { useState } from 'react';
import { Menu, Avatar,Input  } from 'antd';
import { UserOutlined,SearchOutlined } from '@ant-design/icons';
import { NavBarData } from './NavBarData';
import './NavBar.css';

const NavbarItems = NavBarData.map((item, index) => ({
    key: String(index + 1),
    icon: item.icon,
    label: item.title,
    path: item.path, 
    cName:item.cName,
  }));
  const { Search } = Input;
  const { SubMenu, Item } = Menu;

  const generateMenuItems = (items) => {
    return items.map((item) => {
      if (item.children) {
        return (
          <Menu.SubMenu key={item.key} icon={item.icon} title={item.title}>
            {generateMenuItems(item.children)}
          </Menu.SubMenu>
        );
      } else {
        return (
          <Menu.Item key={item.key} icon={item.icon} defaultOpenKeys={[item.key]} className='nav-bar-items'>
            <a className={item.cName} href={item.path}>{item.title}</a>
          </Menu.Item>
        );
      }
    });
  };
  

  const NavBar = () => {
     const [current, setCurrent] = useState('1'); // Initial selected key

  const onClick = (e) => {
    console.log('click ', e);
    // e.preventDefault();
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      className="nav-bar-items"
    >
      <Item key="search"  className="nav-bar-items">
        <Search placeholder="Search" />
      </Item>
      {generateMenuItems(NavBarData)}
      <Menu.Item key="avatar" className='nav-bar-items'>
        <Avatar className="nav-bar-item" icon={<UserOutlined />} />
      </Menu.Item>
    </Menu>
  );
  };
  
export default NavBar;