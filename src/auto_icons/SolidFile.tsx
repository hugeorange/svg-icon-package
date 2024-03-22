/**
 * @file SolidFile
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
                d="M6 0C4.34531 0 3 1.34531 3 3V21C3 22.6547 4.34531 24 6 24H18C19.6547 24 21 22.6547 21 21V7.5H15C14.1703 7.5 13.5 6.82969 13.5 6V0H6ZM15 0V6H21L15 0ZM8.25 12H15.75C16.1625 12 16.5 12.3375 16.5 12.75C16.5 13.1625 16.1625 13.5 15.75 13.5H8.25C7.8375 13.5 7.5 13.1625 7.5 12.75C7.5 12.3375 7.8375 12 8.25 12ZM8.25 15H15.75C16.1625 15 16.5 15.3375 16.5 15.75C16.5 16.1625 16.1625 16.5 15.75 16.5H8.25C7.8375 16.5 7.5 16.1625 7.5 15.75C7.5 15.3375 7.8375 15 8.25 15ZM8.25 18H15.75C16.1625 18 16.5 18.3375 16.5 18.75C16.5 19.1625 16.1625 19.5 15.75 19.5H8.25C7.8375 19.5 7.5 19.1625 7.5 18.75C7.5 18.3375 7.8375 18 8.25 18Z"
                fill={color}
            />
        </svg>
    </span>
);
