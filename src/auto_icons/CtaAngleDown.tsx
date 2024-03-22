/**
 * @file CtaAngleDown
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
                d="M11.468 16.2773C11.7586 16.568 12.2367 16.568 12.5273 16.2773L20.0273 8.77734C20.318 8.48672 20.318 8.00859 20.0273 7.71797C19.7367 7.42734 19.2586 7.42734 18.968 7.71797L11.9977 14.6883L5.02734 7.71797C4.73672 7.42734 4.25859 7.42734 3.96797 7.71797C3.67734 8.00859 3.67734 8.48672 3.96797 8.77734L11.468 16.2773Z"
                fill={color}
            />
        </svg>
    </span>
);
