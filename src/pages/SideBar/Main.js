import React from 'react';
import { Layout, Menu, theme } from 'antd';
import { SidebarData } from './SidebarData';
import './Main.css'
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import MyInfo from '../MyInfo/MyInfo';
import NavBar from '../NavBar/NavBar';
import FooterComponent from '../../components/Footer/Footer';
const { Content, Header, Footer, Sider } = Layout;
const menuItems = SidebarData.map((item, index) => ({
  key: String(index + 1),
  icon: item.icon,
  label: item.title,
  path: item.path, 
}));
const Main = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Router> {/* Wrap your layout with the Router */}
    <Layout hasSider>
      <Sider
        style={{
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
          <div className="logo">
              <img src="logo.png" alt="Logo" className="logo" />
              <span className="logo-label">Corporate portal</span>
          </div>
        <div className="demo-logo-vertical" />
        {/* <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={menuItems} /> */}
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} className='side-bar-list'>
            {menuItems.map((item) => (
              <Menu.Item key={item.key} icon={item.icon} className='side-bar-list'>
                <NavLink to={item.path}>{item.label}</NavLink>
              </Menu.Item>
            ))}
          </Menu>
      </Sider>
      <Layout
        className="site-layout"
        style={{
          marginLeft: 200,
        }}
      >
        <NavBar
          style={{
            padding: 0,
          }}
        />
        <Content
        className='content'
          style={{
            padding: 24,
            textAlign: 'center',
            display: 'flex', // Use flexbox to align the content
            flexDirection: 'column', // Stack content vertically
            alignItems: 'center', // Center content horizontally
            minHeight: '100vh', // Set a minimum height to fill the viewport
                  
          }}
        >
          <div
            style={{
              padding: 24,
              textAlign: 'center',
            }}
          >
            <Routes>
              <Route path="/dashboard" element={<Dashboard/>} />
              <Route path="/myinfo" element={<MyInfo/>} />
              <Route path="/vacancies" element={<Dashboard/>} />
              <Route path="/reports" element={<Dashboard/>} />
              <Route path="/careerPlan" element={<Dashboard/>} />
              <Route path="/calendar" element={<Dashboard/>} />
              <Route path="/recruitment" element={<Dashboard/>} />
              <Route path="/news" element={<Dashboard/>} />
            </Routes>
          </div>
        </Content>
        <FooterComponent/>
        {/* <Footer
        className='footer'
          style={{
            textAlign: 'center',
          }}
        >
        Privacy Policy | Copyright C 2021 Lucioles Home Page | Powered by Lucioles Home Page
        </Footer> */}
      </Layout>
    </Layout>
    </Router>
  );
};
export default Main;

// function Content(){
//   return <div>
//      <div
//             style={{
//               padding: 24,
//               textAlign: 'center',
//             }}
//           >
//             <Routes>
//               <Route path="/dashboard" element={<Dashboard/>} />
//               <Route path="/myinfo" element={<MyInfo/>} />
//               <Route path="/vacancies" element={<Dashboard/>} />
//               <Route path="/reports" element={<Dashboard/>} />
//               <Route path="/careerPlan" element={<Dashboard/>} />
//               <Route path="/calendar" element={<Dashboard/>} />
//               <Route path="/recruitment" element={<Dashboard/>} />
//               <Route path="/news" element={<Dashboard/>} />
//             </Routes>
//           </div>
//   </div>
// }