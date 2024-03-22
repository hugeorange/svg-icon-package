/**
 * @file LightPerson
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
                d="M12 3.75C12.1477 3.75 12.294 3.7209 12.4305 3.66436C12.567 3.60783 12.691 3.52496 12.7955 3.4205C12.9 3.31603 12.9828 3.19201 13.0394 3.05552C13.0959 2.91903 13.125 2.77274 13.125 2.625C13.125 2.47726 13.0959 2.33097 13.0394 2.19448C12.9828 2.05799 12.9 1.93397 12.7955 1.8295C12.691 1.72504 12.567 1.64217 12.4305 1.58564C12.294 1.5291 12.1477 1.5 12 1.5C11.8523 1.5 11.706 1.5291 11.5695 1.58564C11.433 1.64217 11.309 1.72504 11.2045 1.8295C11.1 1.93397 11.0172 2.05799 10.9606 2.19448C10.9041 2.33097 10.875 2.47726 10.875 2.625C10.875 2.77274 10.9041 2.91903 10.9606 3.05552C11.0172 3.19201 11.1 3.31603 11.2045 3.4205C11.309 3.52496 11.433 3.60783 11.5695 3.66436C11.706 3.7209 11.8523 3.75 12 3.75ZM12 0C12.6962 0 13.3639 0.276562 13.8562 0.768845C14.3484 1.26113 14.625 1.92881 14.625 2.625C14.625 3.32119 14.3484 3.98887 13.8562 4.48116C13.3639 4.97344 12.6962 5.25 12 5.25C11.3038 5.25 10.6361 4.97344 10.1438 4.48116C9.65156 3.98887 9.375 3.32119 9.375 2.625C9.375 1.92881 9.65156 1.26113 10.1438 0.768845C10.6361 0.276562 11.3038 0 12 0ZM10.5 7.6875V15H13.5V7.6875C13.2188 7.56563 12.9141 7.5 12.5953 7.5H11.4047C11.0859 7.5 10.7813 7.56563 10.5 7.6875ZM10.5 16.5V23.25C10.5 23.6625 10.1625 24 9.75 24C9.3375 24 9 23.6625 9 23.25V9.47344L6.66094 13.8516C6.46406 14.2172 6.00938 14.3531 5.64375 14.1609C5.27813 13.9688 5.14219 13.5094 5.33438 13.1437L8.09531 7.98281C8.74688 6.76406 10.0172 6 11.4047 6H12.5953C13.9781 6 15.2531 6.76406 15.9047 7.98281L18.6609 13.1484C18.8578 13.5141 18.7172 13.9688 18.3516 14.1656C17.9859 14.3625 17.5313 14.2219 17.3344 13.8563L15 9.47812V23.25C15 23.6625 14.6625 24 14.25 24C13.8375 24 13.5 23.6625 13.5 23.25V16.5H10.5Z"
                fill={color}
            />
        </svg>
    </span>
);