/**
 * @file LightUp
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
                d="M12.5297 1.72029C12.2391 1.42966 11.7609 1.42966 11.4703 1.72029L3.22032 9.97029C2.92969 10.2609 2.92969 10.739 3.22032 11.0297C3.51094 11.3203 3.98907 11.3203 4.27969 11.0297L11.25 4.05935V21.75C11.25 22.1625 11.5875 22.5 12 22.5C12.4125 22.5 12.75 22.1625 12.75 21.75V4.05935L19.7203 11.0297C20.0109 11.3203 20.4891 11.3203 20.7797 11.0297C21.0703 10.739 21.0703 10.2609 20.7797 9.97029L12.5297 1.72029Z"
                fill={color}
            />
        </svg>
    </span>
);
