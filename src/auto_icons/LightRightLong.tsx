/**
 * @file LightRightLong
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
                d="M23.7797 12.5297C24.0703 12.239 24.0703 11.7609 23.7797 11.4703L17.0297 4.72029C16.7391 4.42966 16.2609 4.42966 15.9703 4.72029C15.6797 5.01091 15.6797 5.48904 15.9703 5.77966L21.4406 11.25H0.75C0.3375 11.25 0 11.5875 0 12C0 12.4125 0.3375 12.75 0.75 12.75H21.4406L15.9703 18.2203C15.6797 18.5109 15.6797 18.989 15.9703 19.2797C16.2609 19.5703 16.7391 19.5703 17.0297 19.2797L23.7797 12.5297Z"
                fill={color}
            />
        </svg>
    </span>
);
