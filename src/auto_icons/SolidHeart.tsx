/**
 * @file SolidHeart
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
            <g clipPath="url(#clip0_1_82)">
                <path
                    d="M12.6281 0.135938C12.4312 0.046875 12.2203 0 12 0C11.7797 0 11.5687 0.046875 11.3719 0.135938L2.54531 3.88125C1.51406 4.31719 0.745311 5.33438 0.749998 6.5625C0.773436 11.2125 2.68594 19.7203 10.7625 23.5875C11.5453 23.9625 12.4547 23.9625 13.2375 23.5875C21.3141 19.7203 23.2266 11.2125 23.25 6.5625C23.2547 5.33438 22.4859 4.31719 21.4547 3.88125L12.6281 0.135938ZM6.75 10.3734C6.75 8.78906 8.03437 7.5 9.62344 7.5C10.3828 7.5 11.1141 7.80469 11.6531 8.33906L12 8.68594L12.3469 8.33906C12.8859 7.8 13.6172 7.5 14.3766 7.5C15.9609 7.5 17.25 8.78438 17.25 10.3734C17.25 11.1328 16.9453 11.8641 16.4109 12.4031L12.5344 16.2797C12.2437 16.5703 11.7656 16.5703 11.475 16.2797L7.59844 12.4031C7.05937 11.8641 6.75937 11.1328 6.75937 10.3734H6.75Z"
                    fill={color}
                />
            </g>
            <defs>
                <clipPath id="clip0_1_82">
                    <rect width="24" height="24" fill={color} />
                </clipPath>
            </defs>
        </svg>
    </span>
);
