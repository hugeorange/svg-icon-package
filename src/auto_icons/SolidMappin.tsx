/**
 * @file SolidMappin
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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.4421 23.8252C11.4787 23.8459 11.5075 23.8619 11.5279 23.8731L11.5617 23.8916C11.8319 24.0366 12.167 24.0355 12.4374 23.8921L12.4721 23.8731C12.4925 23.8619 12.5213 23.8459 12.5579 23.8252C12.6311 23.7837 12.7357 23.7232 12.8673 23.644C13.1303 23.4856 13.5015 23.2521 13.945 22.9458C14.8304 22.3341 16.0118 21.4266 17.1958 20.2413C19.5523 17.882 22 14.3372 22 9.77847C22 4.37797 17.5228 0 12 0C6.47715 0 2 4.37797 2 9.77847C2 14.3372 4.44766 17.882 6.80419 20.2413C7.98818 21.4266 9.16959 22.3341 10.055 22.9458C10.4985 23.2521 10.8697 23.4856 11.1327 23.644C11.2643 23.7232 11.3689 23.7837 11.4421 23.8252ZM12 13.3343C14.0083 13.3343 15.6364 11.7423 15.6364 9.77848C15.6364 7.81466 14.0083 6.22267 12 6.22267C9.99169 6.22267 8.36364 7.81466 8.36364 9.77848C8.36364 11.7423 9.99169 13.3343 12 13.3343Z"
                fill={color}
            />
        </svg>
    </span>
);