/**
 * @file LightMappin
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
                d="M12 1.77779C7.48131 1.77779 3.81818 5.35954 3.81818 9.77785C3.81818 13.6842 5.91597 16.8064 8.1049 18.9978C9.19363 20.0877 10.285 20.9265 11.1041 21.4923C11.4653 21.7418 11.7719 21.9371 12 22.0765C12.228 21.9371 12.5347 21.7418 12.8959 21.4923C13.715 20.9265 14.8064 20.0877 15.8951 18.9978C18.084 16.8064 20.1818 13.6842 20.1818 9.77785C20.1818 5.35954 16.5187 1.77779 12 1.77779ZM12 23.1113C11.5633 23.8909 11.563 23.8907 11.5626 23.8905L11.5593 23.8888L11.5521 23.8849L11.5279 23.8716C11.5075 23.8604 11.4787 23.8444 11.4421 23.8236C11.3689 23.7822 11.2643 23.7217 11.1327 23.6425C10.8697 23.4841 10.4985 23.2506 10.055 22.9443C9.16959 22.3327 7.98819 21.4253 6.80419 20.24C4.44766 17.8808 2 14.3363 2 9.77785C2 4.37769 6.47715 0 12 0C17.5228 0 22 4.37769 22 9.77785C22 14.3363 19.5523 17.8808 17.1958 20.24C16.0118 21.4253 14.8304 22.3327 13.945 22.9443C13.5015 23.2506 13.1303 23.4841 12.8673 23.6425C12.7357 23.7217 12.6311 23.7822 12.5579 23.8236C12.5213 23.8444 12.4925 23.8604 12.4721 23.8716L12.4479 23.8849L12.4407 23.8888L12.4383 23.8901C12.4379 23.8903 12.4367 23.8909 12 23.1113ZM12 23.1113L12.4367 23.8909C12.1646 24.0366 11.8347 24.0362 11.5626 23.8905L12 23.1113ZM12 7.11117C10.4938 7.11117 9.27273 8.30508 9.27273 9.77785C9.27273 11.2506 10.4938 12.4445 12 12.4445C13.5062 12.4445 14.7273 11.2506 14.7273 9.77785C14.7273 8.30508 13.5062 7.11117 12 7.11117ZM7.45455 9.77785C7.45455 7.32323 9.48961 5.33337 12 5.33337C14.5104 5.33337 16.5455 7.32323 16.5455 9.77785C16.5455 12.2325 14.5104 14.2223 12 14.2223C9.48961 14.2223 7.45455 12.2325 7.45455 9.77785Z"
                fill={color}
            />
        </svg>
    </span>
);
