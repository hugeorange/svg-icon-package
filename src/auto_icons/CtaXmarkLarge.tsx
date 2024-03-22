/**
 * @file CtaXmarkLarge
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
                d="M21.218 1.71797C21.5086 1.42734 21.9867 1.42734 22.2773 1.71797C22.568 2.00859 22.568 2.48672 22.2773 2.77734L13.057 11.9977L22.2773 21.218C22.568 21.5086 22.568 21.9867 22.2773 22.2773C21.9867 22.568 21.5086 22.568 21.218 22.2773L11.9977 13.057L2.77734 22.2773C2.48672 22.568 2.00859 22.568 1.71797 22.2773C1.42734 21.9867 1.42734 21.5086 1.71797 21.218L10.9383 11.9977L1.71797 2.77734C1.42734 2.48672 1.42734 2.00859 1.71797 1.71797C2.00859 1.42734 2.48672 1.42734 2.77734 1.71797L11.9977 10.9383L21.218 1.71797Z"
                fill={color}
            />
        </svg>
    </span>
);
