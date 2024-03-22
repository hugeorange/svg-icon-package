/**
 * @file CtaChevronDown
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
                d="M12.5297 18.5297C12.239 18.8203 11.7609 18.8203 11.4703 18.5297L2.47029 9.52966C2.17966 9.23904 2.17966 8.76091 2.47029 8.47029C2.76091 8.17966 3.23904 8.17966 3.52966 8.47029L12 16.9406L20.4703 8.47029C20.7609 8.17966 21.239 8.17966 21.5297 8.47029C21.8203 8.76091 21.8203 9.23904 21.5297 9.52966L12.5297 18.5297Z"
                fill={color}
            />
        </svg>
    </span>
);
