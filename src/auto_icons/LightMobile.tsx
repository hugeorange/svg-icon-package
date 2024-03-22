/**
 * @file LightMobile
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
                d="M7.5 1.5C6.67031 1.5 6 2.17031 6 3V21C6 21.8297 6.67031 22.5 7.5 22.5H16.5C17.3297 22.5 18 21.8297 18 21V3C18 2.17031 17.3297 1.5 16.5 1.5H7.5ZM4.5 3C4.5 1.34531 5.84531 0 7.5 0H16.5C18.1547 0 19.5 1.34531 19.5 3V21C19.5 22.6547 18.1547 24 16.5 24H7.5C5.84531 24 4.5 22.6547 4.5 21V3ZM10.5 18.75H13.5C13.9125 18.75 14.25 19.0875 14.25 19.5C14.25 19.9125 13.9125 20.25 13.5 20.25H10.5C10.0875 20.25 9.75 19.9125 9.75 19.5C9.75 19.0875 10.0875 18.75 10.5 18.75Z"
                fill={color}
            />
        </svg>
    </span>
);
