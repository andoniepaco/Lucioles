import * as AiIcons from "react-icons/ai";
import * as RxIcons from "react-icons/rx";


export const NavBarData = [
    {
        title: 'Message',
        path: '/message',
        icon: <AiIcons.AiOutlineMessage className='nav-bar-icon'/>,
        cName: 'nav-bar-item'
    },
    {
        title: 'Notification',
        path: '/notification',
        icon: <AiIcons.AiOutlineBell className='nav-bar-icon'/>,
        cName: 'nav-bar-item'
    },
    {
    title: 'Edith Chávez',
    path: '/Avatar',
    cName: 'nav-bar-item',
    children: [
      {
        type: 'group',
        title: 'Add User',
        path: '/addUser',
        cName: 'nav-bar-item-children'
      },
      {
        type: 'group',
        title: 'Manage Users',
        path: '/manageUsers',
        cName: 'nav-bar-item-children'
      },
      {
        type: 'group',
        title: 'Log Out',
        path: '/logOut',
        cName: 'nav-bar-item-children'
      },
    ],
  },
]