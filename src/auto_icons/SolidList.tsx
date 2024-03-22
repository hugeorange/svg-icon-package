/**
 * @file SolidList
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
                d="M1.5 4.5C1.5 2.84531 2.84531 1.5 4.5 1.5H19.5C21.1547 1.5 22.5 2.84531 22.5 4.5V19.5C22.5 21.1547 21.1547 22.5 19.5 22.5H4.5C2.84531 22.5 1.5 21.1547 1.5 19.5V4.5ZM6 13.5C6.39782 13.5 6.77936 13.342 7.06066 13.0607C7.34196 12.7794 7.5 12.3978 7.5 12C7.5 11.6022 7.34196 11.2206 7.06066 10.9393C6.77936 10.658 6.39782 10.5 6 10.5C5.60218 10.5 5.22064 10.658 4.93934 10.9393C4.65804 11.2206 4.5 11.6022 4.5 12C4.5 12.3978 4.65804 12.7794 4.93934 13.0607C5.22064 13.342 5.60218 13.5 6 13.5ZM7.5 7.5C7.5 7.10218 7.34196 6.72064 7.06066 6.43934C6.77936 6.15804 6.39782 6 6 6C5.60218 6 5.22064 6.15804 4.93934 6.43934C4.65804 6.72064 4.5 7.10218 4.5 7.5C4.5 7.89782 4.65804 8.27936 4.93934 8.56066C5.22064 8.84196 5.60218 9 6 9C6.39782 9 6.77936 8.84196 7.06066 8.56066C7.34196 8.27936 7.5 7.89782 7.5 7.5ZM6 18C6.39782 18 6.77936 17.842 7.06066 17.5607C7.34196 17.2794 7.5 16.8978 7.5 16.5C7.5 16.1022 7.34196 15.7206 7.06066 15.4393C6.77936 15.158 6.39782 15 6 15C5.60218 15 5.22064 15.158 4.93934 15.4393C4.65804 15.7206 4.5 16.1022 4.5 16.5C4.5 16.8978 4.65804 17.2794 4.93934 17.5607C5.22064 17.842 5.60218 18 6 18ZM10.5 6.375C9.87656 6.375 9.375 6.87656 9.375 7.5C9.375 8.12344 9.87656 8.625 10.5 8.625H18C18.6234 8.625 19.125 8.12344 19.125 7.5C19.125 6.87656 18.6234 6.375 18 6.375H10.5ZM10.5 10.875C9.87656 10.875 9.375 11.3766 9.375 12C9.375 12.6234 9.87656 13.125 10.5 13.125H18C18.6234 13.125 19.125 12.6234 19.125 12C19.125 11.3766 18.6234 10.875 18 10.875H10.5ZM10.5 15.375C9.87656 15.375 9.375 15.8766 9.375 16.5C9.375 17.1234 9.87656 17.625 10.5 17.625H18C18.6234 17.625 19.125 17.1234 19.125 16.5C19.125 15.8766 18.6234 15.375 18 15.375H10.5Z"
                fill={color}
            />
        </svg>
    </span>
);