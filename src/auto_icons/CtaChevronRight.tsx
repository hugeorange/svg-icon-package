/**
 * @file CtaChevronRight
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
                d="M17.0273 11.4703C17.318 11.7609 17.318 12.2391 17.0273 12.5297L8.02734 21.5297C7.73672 21.8203 7.25859 21.8203 6.96797 21.5297C6.67734 21.2391 6.67734 20.7609 6.96797 20.4703L15.4383 12L6.96797 3.52969C6.67734 3.23907 6.67734 2.76094 6.96797 2.47032C7.25859 2.17969 7.73672 2.17969 8.02734 2.47032L17.0273 11.4703Z"
                fill={color}
            />
        </svg>
    </span>
);
