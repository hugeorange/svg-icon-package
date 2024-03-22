/**
 * @file SolidUser
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
            <g clipPath="url(#clip0_1_18)">
                <path
                    d="M18.7031 18.0094C17.6672 16.2094 15.7219 15 13.5 15H10.5C8.27812 15 6.33281 16.2094 5.29688 18.0094C6.94688 19.8469 9.3375 21 12 21C14.6625 21 17.0531 19.8422 18.7031 18.0094ZM0 12C0 8.8174 1.26428 5.76516 3.51472 3.51472C5.76516 1.26428 8.8174 0 12 0C15.1826 0 18.2348 1.26428 20.4853 3.51472C22.7357 5.76516 24 8.8174 24 12C24 15.1826 22.7357 18.2348 20.4853 20.4853C18.2348 22.7357 15.1826 24 12 24C8.8174 24 5.76516 22.7357 3.51472 20.4853C1.26428 18.2348 0 15.1826 0 12ZM12 12.75C12.8951 12.75 13.7535 12.3944 14.3865 11.7615C15.0194 11.1285 15.375 10.2701 15.375 9.375C15.375 8.47989 15.0194 7.62145 14.3865 6.98851C13.7535 6.35558 12.8951 6 12 6C11.1049 6 10.2465 6.35558 9.61351 6.98851C8.98058 7.62145 8.625 8.47989 8.625 9.375C8.625 10.2701 8.98058 11.1285 9.61351 11.7615C10.2465 12.3944 11.1049 12.75 12 12.75Z"
                    fill={color}
                />
            </g>
            <defs>
                <clipPath id="clip0_1_18">
                    <rect width="24" height="24" fill={color} />
                </clipPath>
            </defs>
        </svg>
    </span>
);