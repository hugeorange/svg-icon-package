/**
 * @file LightFile
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
                d="M18 22.5H6C5.17031 22.5 4.5 21.8297 4.5 21V3C4.5 2.17031 5.17031 1.5 6 1.5H12V6.75C12 7.99219 13.0078 9 14.25 9H19.5V21C19.5 21.8297 18.8297 22.5 18 22.5ZM14.25 7.5C13.8375 7.5 13.5 7.1625 13.5 6.75V1.52344C13.6313 1.55625 13.7531 1.62188 13.8469 1.72031L19.2797 7.15313C19.3781 7.25156 19.4438 7.36875 19.4766 7.5H14.25ZM6 0C4.34531 0 3 1.34531 3 3V21C3 22.6547 4.34531 24 6 24H18C19.6547 24 21 22.6547 21 21V7.68281C21 7.0875 20.7609 6.51562 20.3391 6.09375L14.9109 0.660938C14.4891 0.239063 13.9172 0 13.3219 0H6ZM8.25 12C7.8375 12 7.5 12.3375 7.5 12.75C7.5 13.1625 7.8375 13.5 8.25 13.5H15.75C16.1625 13.5 16.5 13.1625 16.5 12.75C16.5 12.3375 16.1625 12 15.75 12H8.25ZM8.25 15C7.8375 15 7.5 15.3375 7.5 15.75C7.5 16.1625 7.8375 16.5 8.25 16.5H15.75C16.1625 16.5 16.5 16.1625 16.5 15.75C16.5 15.3375 16.1625 15 15.75 15H8.25ZM8.25 18C7.8375 18 7.5 18.3375 7.5 18.75C7.5 19.1625 7.8375 19.5 8.25 19.5H15.75C16.1625 19.5 16.5 19.1625 16.5 18.75C16.5 18.3375 16.1625 18 15.75 18H8.25Z"
                fill={color}
            />
        </svg>
    </span>
);
