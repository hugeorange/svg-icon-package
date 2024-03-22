/**
 * @file SolidRightLong
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
                d="M23.5594 13.0594C24.1453 12.4734 24.1453 11.5219 23.5594 10.9359L17.5594 4.93591C16.9734 4.34998 16.0219 4.34998 15.4359 4.93591C14.85 5.52185 14.85 6.47341 15.4359 7.05935L18.8766 10.5H1.5C0.670312 10.5 0 11.1703 0 12C0 12.8297 0.670312 13.5 1.5 13.5H18.8766L15.4359 16.9406C14.85 17.5265 14.85 18.4781 15.4359 19.064C16.0219 19.65 16.9734 19.65 17.5594 19.064L23.5594 13.064V13.0594Z"
                fill={color}
            />
        </svg>
    </span>
);
