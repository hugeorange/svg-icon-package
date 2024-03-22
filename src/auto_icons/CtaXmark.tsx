/**
 * @file CtaXmark
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
                d="M18.2207 19.2817C18.5117 19.5728 18.9906 19.5728 19.2817 19.2817C19.5728 18.9906 19.5728 18.5117 19.2817 18.2207L13.061 12L19.2817 5.77934C19.5728 5.48826 19.5728 5.00939 19.2817 4.71831C18.9906 4.42723 18.5117 4.42723 18.2207 4.71831L12 10.939L5.77934 4.71831C5.48826 4.42723 5.00939 4.42723 4.71831 4.71831C4.42723 5.00939 4.42723 5.48826 4.71831 5.77934L10.939 12L4.71831 18.2207C4.42723 18.5117 4.42723 18.9906 4.71831 19.2817C5.00939 19.5728 5.48826 19.5728 5.77934 19.2817L12 13.061L18.2207 19.2817Z"
                fill={color}
            />
        </svg>
    </span>
);
