/**
 * @file LightEquals
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
                d="M3 6.75C2.5875 6.75 2.25 7.0875 2.25 7.5C2.25 7.9125 2.5875 8.25 3 8.25H21C21.4125 8.25 21.75 7.9125 21.75 7.5C21.75 7.0875 21.4125 6.75 21 6.75H3ZM3 15.75C2.5875 15.75 2.25 16.0875 2.25 16.5C2.25 16.9125 2.5875 17.25 3 17.25H21C21.4125 17.25 21.75 16.9125 21.75 16.5C21.75 16.0875 21.4125 15.75 21 15.75H3Z"
                fill={color}
            />
        </svg>
    </span>
);
