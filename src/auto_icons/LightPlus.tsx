/**
 * @file LightPlus
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
                d="M12.75 3C12.75 2.5875 12.4125 2.25 12 2.25C11.5875 2.25 11.25 2.5875 11.25 3V11.25H3C2.5875 11.25 2.25 11.5875 2.25 12C2.25 12.4125 2.5875 12.75 3 12.75H11.25V21C11.25 21.4125 11.5875 21.75 12 21.75C12.4125 21.75 12.75 21.4125 12.75 21V12.75H21C21.4125 12.75 21.75 12.4125 21.75 12C21.75 11.5875 21.4125 11.25 21 11.25H12.75V3Z"
                fill={color}
            />
        </svg>
    </span>
);
