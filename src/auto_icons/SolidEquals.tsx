/**
 * @file SolidEquals
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
                d="M3.75 6C2.92031 6 2.25 6.67031 2.25 7.5C2.25 8.32969 2.92031 9 3.75 9H20.25C21.0797 9 21.75 8.32969 21.75 7.5C21.75 6.67031 21.0797 6 20.25 6H3.75ZM3.75 15C2.92031 15 2.25 15.6703 2.25 16.5C2.25 17.3297 2.92031 18 3.75 18H20.25C21.0797 18 21.75 17.3297 21.75 16.5C21.75 15.6703 21.0797 15 20.25 15H3.75Z"
                fill={color}
            />
        </svg>
    </span>
);
