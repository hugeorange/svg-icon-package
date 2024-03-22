/**
 * @file CtaAngleRight
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
                d="M16.5297 11.4703C16.8203 11.7609 16.8203 12.239 16.5297 12.5297L9.02966 20.0297C8.73904 20.3203 8.26091 20.3203 7.97029 20.0297C7.67966 19.739 7.67966 19.2609 7.97029 18.9703L14.9406 12L7.97029 5.02966C7.67966 4.73904 7.67966 4.26091 7.97029 3.97029C8.26091 3.67966 8.73904 3.67966 9.02966 3.97029L16.5297 11.4703Z"
                fill={color}
            />
        </svg>
    </span>
);
