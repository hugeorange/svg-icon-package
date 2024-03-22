/**
 * @file LightKeyhole
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
            <g clipPath="url(#clip0_1_36)">
                <path
                    d="M11.4141 1.74846C11.7891 1.58909 12.211 1.58909 12.586 1.74846L20.8688 5.26409C21.3985 5.48909 21.7547 5.99065 21.75 6.55784C21.7266 10.9641 19.9031 18.736 12.586 22.2375C12.2156 22.4156 11.7797 22.4156 11.4094 22.2375C4.09221 18.7313 2.27346 10.9594 2.25002 6.55315C2.24533 5.98596 2.60158 5.4844 3.13127 5.2594L11.4141 1.74377V1.74846ZM13.1719 0.365649C12.4219 0.0468994 11.5781 0.0468994 10.8281 0.365649L2.54533 3.88127C1.51408 4.31721 0.745334 5.3344 0.750021 6.56252C0.773459 11.2125 2.68596 19.7203 10.7625 23.5875C11.5453 23.9625 12.4547 23.9625 13.2375 23.5875C21.3141 19.7203 23.2266 11.2125 23.25 6.56252C23.2547 5.3344 22.486 4.31721 21.4547 3.88127L13.1719 0.365649ZM12 8.62502C12.2984 8.62502 12.5845 8.74355 12.7955 8.95453C13.0065 9.16551 13.125 9.45166 13.125 9.75002C13.125 10.0484 13.0065 10.3345 12.7955 10.5455C12.5845 10.7565 12.2984 10.875 12 10.875C11.7017 10.875 11.4155 10.7565 11.2045 10.5455C10.9935 10.3345 10.875 10.0484 10.875 9.75002C10.875 9.45166 10.9935 9.16551 11.2045 8.95453C11.4155 8.74355 11.7017 8.62502 12 8.62502ZM14.625 9.75002C14.625 8.30159 13.4485 7.12502 12 7.12502C10.5516 7.12502 9.37502 8.30159 9.37502 9.75002C9.37502 10.9406 10.1672 11.9438 11.25 12.2672V15.75C11.25 16.1625 11.5875 16.5 12 16.5C12.4125 16.5 12.75 16.1625 12.75 15.75V12.2672C13.8328 11.9438 14.625 10.9406 14.625 9.75002Z"
                    fill={color}
                />
            </g>
            <defs>
                <clipPath id="clip0_1_36">
                    <rect width="24" height="24" fill={color} />
                </clipPath>
            </defs>
        </svg>
    </span>
);