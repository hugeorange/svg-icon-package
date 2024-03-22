/**
 * @file FeatJob
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
                d="M18.75 6.4H16.5V5.26667C16.5 4.01469 15.4928 3 14.25 3H9.75C8.50898 3 7.5 4.01469 7.5 5.26667V6.4H5.25C4.00723 6.4 3 7.41646 3 8.66667V17.7333C3 18.9853 4.00723 20 5.25 20H18.75C19.9928 20 21 18.9853 21 17.7333V8.66667C21 7.41646 19.991 6.4 18.75 6.4ZM9.75 4.7H14.25C14.5607 4.7 14.8125 4.95369 14.8125 5.26667V6.4H9.1875V5.26667C9.1875 4.95358 9.44063 4.7 9.75 4.7ZM5.25 8.1H18.75C19.0594 8.1 19.3125 8.355 19.3125 8.66667V12.0667H4.6875V8.66667C4.6875 8.355 4.94062 8.1 5.25 8.1ZM18.75 18.3H5.25C4.94062 18.3 4.6875 18.045 4.6875 17.7333V13.7667H9.75V14.3333C9.75 14.9591 10.2538 15.4667 10.875 15.4667H13.125C13.7462 15.4667 14.25 14.9591 14.25 14.3333V13.7667H19.3125V17.7333C19.3125 18.045 19.0594 18.3 18.75 18.3Z"
                fill={color}
            />
        </svg>
    </span>
);
