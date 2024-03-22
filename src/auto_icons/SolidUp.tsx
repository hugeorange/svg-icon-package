/**
 * @file SolidUp
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
                d="M13.0594 1.94061C12.4734 1.35468 11.5219 1.35468 10.9359 1.94061L3.43594 9.44061C2.85001 10.0266 2.85001 10.9781 3.43594 11.564C4.02188 12.15 4.97344 12.15 5.55938 11.564L10.5 6.61874V21C10.5 21.8297 11.1703 22.5 12 22.5C12.8297 22.5 13.5 21.8297 13.5 21V6.61874L18.4406 11.5594C19.0266 12.1453 19.9781 12.1453 20.5641 11.5594C21.15 10.9734 21.15 10.0219 20.5641 9.43593L13.0641 1.93593L13.0594 1.94061Z"
                fill={color}
            />
        </svg>
    </span>
);
