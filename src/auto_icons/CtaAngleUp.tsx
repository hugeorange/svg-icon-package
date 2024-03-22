/**
 * @file CtaAngleUp
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
                d="M11.468 7.46797C11.7586 7.17734 12.2367 7.17734 12.5273 7.46797L20.0273 14.968C20.318 15.2586 20.318 15.7367 20.0273 16.0273C19.7367 16.318 19.2586 16.318 18.968 16.0273L11.9977 9.05703L5.02734 16.0273C4.73672 16.318 4.25859 16.318 3.96797 16.0273C3.67734 15.7367 3.67734 15.2586 3.96797 14.968L11.468 7.46797Z"
                fill={color}
            />
        </svg>
    </span>
);
