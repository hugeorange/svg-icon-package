/**
 * @file LightBan
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
            <g clipPath="url(#clip0_1_88)">
                <path
                    d="M18.8766 19.9359L4.06406 5.12344C2.46562 6.96563 1.5 9.37031 1.5 12C1.5 17.7984 6.20156 22.5 12 22.5C14.6297 22.5 17.0344 21.5344 18.8766 19.9359ZM19.9359 18.8766C21.5344 17.0344 22.5 14.6297 22.5 12C22.5 6.20156 17.7984 1.5 12 1.5C9.37031 1.5 6.96563 2.46562 5.12344 4.06406L19.9359 18.8766ZM0 12C0 8.8174 1.26428 5.76516 3.51472 3.51472C5.76516 1.26428 8.8174 0 12 0C15.1826 0 18.2348 1.26428 20.4853 3.51472C22.7357 5.76516 24 8.8174 24 12C24 15.1826 22.7357 18.2348 20.4853 20.4853C18.2348 22.7357 15.1826 24 12 24C8.8174 24 5.76516 22.7357 3.51472 20.4853C1.26428 18.2348 0 15.1826 0 12Z"
                    fill={color}
                />
            </g>
            <defs>
                <clipPath id="clip0_1_88">
                    <rect width="24" height="24" fill={color} />
                </clipPath>
            </defs>
        </svg>
    </span>
);
