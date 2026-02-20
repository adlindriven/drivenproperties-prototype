import React from 'react';
import { SearchBox } from './SearchBox';

export default {
    title: 'Components/SearchBox',
    component: SearchBox,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export const Default = {
    args: {
        placeholder: 'Search for properties...',
    },
};

export const Filled = {
    args: {
        placeholder: 'Search for properties...',
        value: 'Downtown Dubai',
    },
};
