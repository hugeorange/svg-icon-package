/**
 * @file SolidDown
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
                d="M10.9406 22.0594C11.5266 22.6453 12.4781 22.6453 13.0641 22.0594L20.5641 14.5594C21.15 13.9734 21.15 13.0219 20.5641 12.4359C19.9781 11.85 19.0266 11.85 18.4406 12.4359L13.5 17.3812V3C13.5 2.17031 12.8297 1.5 12 1.5C11.1703 1.5 10.5 2.17031 10.5 3V17.3766L5.55938 12.4406C4.97344 11.8547 4.02188 11.8547 3.43594 12.4406C2.85001 13.0266 2.85001 13.9781 3.43594 14.5641L10.9359 22.0641L10.9406 22.0594Z"
                fill={color}
            />
        </svg>
    </span>
);
