/**
 * @file SolidKeyhole
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
            <g clipPath="url(#clip0_1_38)">
                <path
                    d="M12.6281 0.135938C12.4313 0.046875 12.2203 0 12 0C11.7797 0 11.5688 0.046875 11.3719 0.135938L2.54533 3.88125C1.51408 4.31719 0.745334 5.33438 0.750021 6.5625C0.773459 11.2125 2.68596 19.7203 10.7625 23.5875C11.5453 23.9625 12.4547 23.9625 13.2375 23.5875C21.3141 19.7203 23.2266 11.2125 23.25 6.5625C23.2547 5.33438 22.486 4.31719 21.4547 3.88125L12.6281 0.135938ZM14.625 9.75C14.625 10.7953 14.011 11.7 13.125 12.1219V15.375C13.125 15.9984 12.6235 16.5 12 16.5C11.3766 16.5 10.875 15.9984 10.875 15.375V12.1219C9.98908 11.7 9.37502 10.7953 9.37502 9.75C9.37502 8.30156 10.5516 7.125 12 7.125C13.4485 7.125 14.625 8.30156 14.625 9.75Z"
                    fill={color}
                />
            </g>
            <defs>
                <clipPath id="clip0_1_38">
                    <rect width="24" height="24" fill={color} />
                </clipPath>
            </defs>
        </svg>
    </span>
);
