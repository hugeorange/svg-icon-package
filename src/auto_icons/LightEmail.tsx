/**
 * @file LightEmail
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
                d="M3 4.5C2.17031 4.5 1.5 5.17031 1.5 6V7.87031L10.6688 14.5922C11.4609 15.1734 12.5391 15.1734 13.3312 14.5922L22.5 7.87031V6C22.5 5.17031 21.8297 4.5 21 4.5H3ZM1.5 9.73125V18C1.5 18.8297 2.17031 19.5 3 19.5H21C21.8297 19.5 22.5 18.8297 22.5 18V9.73125L14.2172 15.8016C12.8953 16.7672 11.1 16.7672 9.78281 15.8016L1.5 9.73125ZM0 6C0 4.34531 1.34531 3 3 3H21C22.6547 3 24 4.34531 24 6V18C24 19.6547 22.6547 21 21 21H3C1.34531 21 0 19.6547 0 18V6Z"
                fill={color}
            />
        </svg>
    </span>
);
