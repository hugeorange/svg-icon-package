/**
 * @file SolidUpDown
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
                d="M7.60834 3.05835C7.08751 2.53752 6.24167 2.53752 5.72084 3.05835L1.72084 7.05835C1.20001 7.57919 1.20001 8.42502 1.72084 8.94585C2.24167 9.46669 3.08751 9.46669 3.60834 8.94585L5.33334 7.22085V20C5.33334 20.7375 5.92917 21.3334 6.66667 21.3334C7.40417 21.3334 8.00001 20.7375 8.00001 20V7.22085L9.72501 8.94585C10.2458 9.46669 11.0917 9.46669 11.6125 8.94585C12.1333 8.42502 12.1333 7.57919 11.6125 7.05835L7.61251 3.05835H7.60834ZM22.275 16.9459C22.7958 16.425 22.7958 15.5792 22.275 15.0584C21.7542 14.5375 20.9083 14.5375 20.3875 15.0584L18.6667 16.7792V4.00002C18.6667 3.26252 18.0708 2.66669 17.3333 2.66669C16.5958 2.66669 16 3.26252 16 4.00002V16.7792L14.275 15.0542C13.7542 14.5334 12.9083 14.5334 12.3875 15.0542C11.8667 15.575 11.8667 16.4209 12.3875 16.9417L16.3875 20.9417C16.9083 21.4625 17.7542 21.4625 18.275 20.9417L22.275 16.9417V16.9459Z"
                fill={color}
            />
        </svg>
    </span>
);
