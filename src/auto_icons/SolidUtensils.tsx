/**
 * @file SolidUtensils
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
                d="M21 0C20.25 0 15 1.5 15 8.25V13.5C15 15.1547 16.3453 16.5 18 16.5H19.5V22.5C19.5 23.3297 20.1703 24 21 24C21.8297 24 22.5 23.3297 22.5 22.5V16.5V11.25V1.5C22.5 0.670312 21.8297 0 21 0ZM4.5 0.75C4.5 0.365625 4.21406 0.046875 3.82969 0.0046875C3.44531 -0.0375 3.10313 0.215625 3.01875 0.585938L1.59844 6.975C1.53281 7.27031 1.5 7.57031 1.5 7.87031C1.5 10.0219 3.14531 11.7891 5.25 11.9813V22.5C5.25 23.3297 5.92031 24 6.75 24C7.57969 24 8.25 23.3297 8.25 22.5V11.9813C10.3547 11.7891 12 10.0219 12 7.87031C12 7.57031 11.9672 7.27031 11.9016 6.975L10.4813 0.585938C10.3969 0.210938 10.0453 -0.0375 9.66562 0.0046875C9.28594 0.046875 9 0.365625 9 0.75V7.04062C9 7.29375 8.79375 7.5 8.54062 7.5C8.30156 7.5 8.10469 7.31719 8.08125 7.07812L7.49531 0.684375C7.4625 0.295313 7.13906 0 6.75 0C6.36094 0 6.0375 0.295313 6.00469 0.684375L5.42344 7.07812C5.4 7.31719 5.20312 7.5 4.96406 7.5C4.71094 7.5 4.50469 7.29375 4.50469 7.04062V0.75H4.5ZM6.76406 7.875H6.75H6.73594L6.75 7.84219L6.76406 7.875Z"
                fill={color}
            />
        </svg>
    </span>
);