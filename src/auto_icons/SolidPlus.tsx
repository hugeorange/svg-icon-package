/**
 * @file SolidPlus
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
                d="M13.5 3.75C13.5 2.92031 12.8297 2.25 12 2.25C11.1703 2.25 10.5 2.92031 10.5 3.75V10.5H3.75C2.92031 10.5 2.25 11.1703 2.25 12C2.25 12.8297 2.92031 13.5 3.75 13.5H10.5V20.25C10.5 21.0797 11.1703 21.75 12 21.75C12.8297 21.75 13.5 21.0797 13.5 20.25V13.5H20.25C21.0797 13.5 21.75 12.8297 21.75 12C21.75 11.1703 21.0797 10.5 20.25 10.5H13.5V3.75Z"
                fill={color}
            />
        </svg>
    </span>
);
