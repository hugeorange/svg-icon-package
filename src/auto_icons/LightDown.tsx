/**
 * @file LightDown
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
                d="M11.4703 22.2797C11.7609 22.5703 12.2391 22.5703 12.5297 22.2797L20.7797 14.0297C21.0703 13.7391 21.0703 13.2609 20.7797 12.9703C20.4891 12.6797 20.0109 12.6797 19.7203 12.9703L12.75 19.9406V2.25C12.75 1.8375 12.4125 1.5 12 1.5C11.5875 1.5 11.25 1.8375 11.25 2.25V19.9406L4.27969 12.9703C3.98907 12.6797 3.51094 12.6797 3.22032 12.9703C2.92969 13.2609 2.92969 13.7391 3.22032 14.0297L11.4703 22.2797Z"
                fill={color}
            />
        </svg>
    </span>
);
