/**
 * @file CtaChevronUp
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
                d="M11.4703 5.47029C11.7609 5.17966 12.239 5.17966 12.5297 5.47029L21.5297 14.4703C21.8203 14.7609 21.8203 15.239 21.5297 15.5297C21.239 15.8203 20.7609 15.8203 20.4703 15.5297L12 7.05935L3.52966 15.5297C3.23904 15.8203 2.76091 15.8203 2.47029 15.5297C2.17966 15.239 2.17966 14.7609 2.47029 14.4703L11.4703 5.47029Z"
                fill={color}
            />
        </svg>
    </span>
);
