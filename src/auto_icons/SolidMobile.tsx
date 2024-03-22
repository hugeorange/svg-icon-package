/**
 * @file SolidMobile
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
                d="M18.5091 0H6.29091C5.02614 0 4 1.00781 4 2.25V21.75C4 22.9922 5.02614 24 6.29091 24H18.5091C19.7739 24 20.8 22.9922 20.8 21.75V2.25C20.8 1.00781 19.7739 0 18.5091 0ZM14.6909 20.9578C14.6909 21.4125 14.3473 21.75 13.9273 21.75H10.8298C10.4527 21.75 10.1091 21.4125 10.1091 21C10.1091 20.5875 10.4527 20.25 10.8727 20.25H13.9273C14.3473 20.25 14.6909 20.5875 14.6909 20.9578Z"
                fill={color}
            />
        </svg>
    </span>
);
