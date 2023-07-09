import React from 'react';
import {FaRegUserCircle, FaUsers} from 'react-icons/fa';
import {HiOutlineBell} from 'react-icons/hi';
import {FiGrid } from "react-icons/fi";
import {BiTask} from 'react-icons/bi';
import {GoCalendar} from 'react-icons/go' ;
import {BsEnvelopePlus} from 'react-icons/bs';
import {RiBuildingLine} from 'react-icons/ri'
export const links = [
  {
    id: 1,
    url: '/',
    text: 'Navigation',
    icon: <FiGrid />,
  },
  {
    id: 2,
    url: '/',
    text: 'Tasks',
    icon: <BiTask />,
  },
  {
    id: 3,
    url: '/',
    text: 'Calender',
    icon: <GoCalendar />,
  },
  {
    id: 4,
    url: '/',
    text: 'Messages',
    icon: <BsEnvelopePlus />,
  },
  {
    id: 5,
    url: '/',
    text: 'Hierarchy',
    icon: <FaUsers />,
  },
  {
    id: 5,
    url: '/',
    text: 'Offices',
    icon: <RiBuildingLine />,
  },
];

export const social = [
  {
    id: 1,
    url: '#',
    text:'Notifications',
    icon: <HiOutlineBell />,
  },
  {
    id: 2,
    url: '#',
    text:'Anonymous',
    icon: <FaRegUserCircle />,
  }
];
