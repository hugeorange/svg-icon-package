/**
 * @file LightMinus
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
                d="M21.75 12C21.75 12.4125 21.4125 12.75 21 12.75H3C2.5875 12.75 2.25 12.4125 2.25 12C2.25 11.5875 2.5875 11.25 3 11.25H21C21.4125 11.25 21.75 11.5875 21.75 12Z"
                fill={color}
            />
        </svg>
    </span>
);
