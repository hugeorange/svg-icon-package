/**
 * @file FeatWebsite
 */

import React from 'react';
import cn from 'classnames';
import { TCommonIconProp } from '../types';

export default ({
    size = 24,
    color,
    style = {},
    className = '',
}: TCommonIconProp) => (
    <span
        role="img"
        className={cn('icons', className)}
        style={{ color, ...style }}
    >
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M22.175 15.4286H1.825C1.36953 15.4286 1 15.8143 1 16.2857V16.8571C1 18.5893 2.35678 20 4.025 20H19.975C21.6432 20 23 18.5904 23 16.8571V16.2857C23 15.8143 22.6322 15.4286 22.175 15.4286ZM19.975 18.2857H4.025C3.36122 18.2857 2.80537 17.7939 2.6775 17.1429H21.3225C21.1953 17.7929 20.6384 18.2857 19.975 18.2857ZM4.85 6C4.85 5.84264 4.97354 5.71429 5.125 5.71429H18.875C19.0265 5.71429 19.15 5.84264 19.15 6V14.2857H20.8V6C20.8 4.8975 19.9372 4 18.875 4H5.125C4.06384 4 3.2 4.8975 3.2 6V14.2857H4.85V6Z"
                fill={color}
            />
        </svg>
    </span>
);
