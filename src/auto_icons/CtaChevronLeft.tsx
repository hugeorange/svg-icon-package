/**
 * @file CtaChevronLeft
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
                d="M6.96797 12.5273C6.67734 12.2367 6.67734 11.7586 6.96797 11.468L15.968 2.46797C16.2586 2.17734 16.7367 2.17734 17.0273 2.46797C17.318 2.75859 17.318 3.23672 17.0273 3.52734L8.55703 11.9977L17.0273 20.468C17.318 20.7586 17.318 21.2367 17.0273 21.5273C16.7367 21.818 16.2586 21.818 15.968 21.5273L6.96797 12.5273Z"
                fill={color}
            />
        </svg>
    </span>
);
