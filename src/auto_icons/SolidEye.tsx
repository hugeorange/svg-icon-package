/**
 * @file SolidEye
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
            <g clipPath="url(#clip0_4_428)">
                <path
                    d="M12 2.66669C8.63333 2.66669 5.9375 4.20002 3.975 6.02502C2.025 7.83335 0.720829 10 0.104163 11.4875C-0.0333374 11.8167 -0.0333374 12.1834 0.104163 12.5125C0.720829 14 2.025 16.1667 3.975 17.975C5.9375 19.8 8.63333 21.3334 12 21.3334C15.3667 21.3334 18.0625 19.8 20.025 17.975C21.975 16.1625 23.2792 14 23.9 12.5125C24.0375 12.1834 24.0375 11.8167 23.9 11.4875C23.2792 10 21.975 7.83335 20.025 6.02502C18.0625 4.20002 15.3667 2.66669 12 2.66669ZM6 12C6 10.4087 6.63214 8.8826 7.75736 7.75738C8.88257 6.63216 10.4087 6.00002 12 6.00002C13.5913 6.00002 15.1174 6.63216 16.2426 7.75738C17.3679 8.8826 18 10.4087 18 12C18 13.5913 17.3679 15.1174 16.2426 16.2427C15.1174 17.3679 13.5913 18 12 18C10.4087 18 8.88257 17.3679 7.75736 16.2427C6.63214 15.1174 6 13.5913 6 12ZM12 9.33335C12 10.8042 10.8042 12 9.33333 12C9.0375 12 8.75416 11.95 8.4875 11.8625C8.25833 11.7875 7.99166 11.9292 8 12.1709C8.0125 12.4584 8.05416 12.7459 8.13333 13.0334C8.70416 15.1667 10.9 16.4334 13.0333 15.8625C15.1667 15.2917 16.4333 13.0959 15.8625 10.9625C15.4 9.23335 13.8708 8.07085 12.1708 8.00002C11.9292 7.99169 11.7875 8.25419 11.8625 8.48752C11.95 8.75419 12 9.03752 12 9.33335Z"
                    fill={color}
                />
            </g>
            <defs>
                <clipPath id="clip0_4_428">
                    <rect width="24" height="24" fill={color} />
                </clipPath>
            </defs>
        </svg>
    </span>
);
