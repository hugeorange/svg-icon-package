/**
 * @file CtaAngleLeft
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
                d="M7.96797 12.5297C7.67734 12.239 7.67734 11.7609 7.96797 11.4703L15.468 3.97029C15.7586 3.67966 16.2367 3.67966 16.5273 3.97029C16.818 4.26091 16.818 4.73904 16.5273 5.02966L9.55703 12L16.5273 18.9703C16.818 19.2609 16.818 19.739 16.5273 20.0297C16.2367 20.3203 15.7586 20.3203 15.468 20.0297L7.96797 12.5297Z"
                fill={color}
            />
        </svg>
    </span>
);
