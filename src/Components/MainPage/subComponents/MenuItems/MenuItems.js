import React from 'react';
import { HomeOutlined, UserAddOutlined } from '@ant-design/icons';

export const MenuItems = [
    {
        title: 'Home',
        icon: <HomeOutlined />,
        link: '/home'
    },
    {
        title: 'Create User',
        icon: <UserAddOutlined />,
        link: '/createUser'
    }
];