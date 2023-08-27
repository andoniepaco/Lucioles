import React from 'react';
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as LuIcons from "react-icons/lu";
import * as MdIcons from "react-icons/md";
import * as BiIcons from "react-icons/bi";


export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <LuIcons.LuLayoutDashboard className='side-bar-icon'/>,
        cName: 'nav-text'
    },
    {
        title: 'My Info',
        path: '/myInfo',
        icon: <AiIcons.AiOutlineInfoCircle className='side-bar-icon'/>,
        cName: 'nav-text'
    },
    {
        title: 'Vacancies',
        path: '/vacancies',
        icon: <AiIcons.AiOutlineCheckCircle className='side-bar-icon'/>,
        cName: 'nav-text'
    },    {
        title: 'Reports',
        path: '/reports',
        icon: <MdIcons.MdQueryStats className='side-bar-icon'/>,
        cName: 'nav-text'
    },
    {
        title: 'Career Plan',
        path: '/careerPlan',
        icon: <AiIcons.AiOutlineRise className='side-bar-icon'/>,
        cName: 'nav-text'
    },
    {
        title: 'Calendar',
        path: '/calendar',
        icon: <BsIcons.BsCalendarCheck className='side-bar-icon'/>,
        cName: 'nav-text'
    },    {
        title: 'Recruitment',
        path: '/recruitment',
        icon: <BiIcons.BiUserCircle className='side-bar-icon'/>,
        cName: 'nav-text'
    },
    {
        title: 'News',
        path: '/news',
        icon: <BsIcons.BsNewspaper  className='side-bar-icon'/>,
        cName: 'nav-text'
    }
]