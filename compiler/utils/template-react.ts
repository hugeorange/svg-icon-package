import prettier from 'prettier';
import XString, { toCamelCase } from './XmlString';

export default (name: string, content: string): string => {
  const xml = new XString(content);

  xml
    .setSize('width', '{size}')
    .setSize('height', '{size}')
    .setColor('fill', '{color}')
    .setColor('stroke', '{color}');

  const str = `
	/**
	 * @file ${toCamelCase(name)}
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
		<span role="img" className={cn('icons', className)} style={{ color, ...style }}>
			${xml.toString()}
		</span>
	);
	`;
  return prettier.format(str, {
    parser: 'babel',
    tabWidth: 4,
    singleQuote: true,
  });
};
