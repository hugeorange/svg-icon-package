/**
 * @file SolidQuestion
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
            <g clipPath="url(#clip0_1_24)">
                <path
                    d="M12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76516 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0C8.8174 0 5.76516 1.26428 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76516 22.7357 8.8174 24 12 24ZM7.95938 7.74844C8.32969 6.70312 9.32344 6 10.4344 6H13.1672C14.8031 6 16.125 7.32656 16.125 8.95781C16.125 10.0172 15.5578 10.9969 14.6391 11.5266L13.125 12.3937C13.1156 13.0031 12.6141 13.5 12 13.5C11.3766 13.5 10.875 12.9984 10.875 12.375V11.7422C10.875 11.3391 11.0906 10.9688 11.4422 10.7672L13.5187 9.57656C13.7391 9.45 13.875 9.21562 13.875 8.9625C13.875 8.56875 13.5562 8.25469 13.1672 8.25469H10.4344C10.275 8.25469 10.1344 8.35312 10.0828 8.50312L10.0641 8.55938C9.85781 9.14531 9.21094 9.45 8.62969 9.24375C8.04844 9.0375 7.73906 8.39062 7.94531 7.80938L7.96406 7.75312L7.95938 7.74844ZM10.5 16.5C10.5 16.1022 10.658 15.7206 10.9393 15.4393C11.2206 15.158 11.6022 15 12 15C12.3978 15 12.7794 15.158 13.0607 15.4393C13.342 15.7206 13.5 16.1022 13.5 16.5C13.5 16.8978 13.342 17.2794 13.0607 17.5607C12.7794 17.842 12.3978 18 12 18C11.6022 18 11.2206 17.842 10.9393 17.5607C10.658 17.2794 10.5 16.8978 10.5 16.5Z"
                    fill={color}
                />
            </g>
            <defs>
                <clipPath id="clip0_1_24">
                    <rect width="24" height="24" fill={color} />
                </clipPath>
            </defs>
        </svg>
    </span>
);
